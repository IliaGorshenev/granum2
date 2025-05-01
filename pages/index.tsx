import { GetStaticProps } from 'next';
import Head from 'next/head';
import App from '../src/App';
import { CatalogItem } from '../src/components/catalog';

interface HomeProps {
  catalogData: CatalogItem[];
}

export default function Home({ catalogData }: HomeProps) {
  console.log('Home component rendering with catalogData:', catalogData ? catalogData.length : 0, 'items');
  return (
    <>
      <Head>
        <title>Гранум - Изделия из натурального камня</title>
        <meta name="description" content="Премиальные решения с камнем - создайте пространство, которое восхищает" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App initialCatalogData={catalogData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps started');
  try {
    // Replace this URL with the one you get after publishing your sheet to the web
    const fileUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnfEBU2jZvGQOqDX0hgA0dQXM9br26tBVhoN7ctaa1W4ChbfQkUrX6afNums1ZGA/pub?gid=1474798808&single=true&output=csv';

    console.log('Fetching data from:', fileUrl);
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }

    const csvText = await response.text();
    console.log('CSV data received, length:', csvText.length);

    // Parse CSV data
    const rows = csvText.split('\n').map((row) => {
      // Handle quoted fields properly
      const fields = [];
      let field = '';
      let inQuotes = false;

      for (let i = 0; i < row.length; i++) {
        const char = row[i];

        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          fields.push(field);
          field = '';
        } else {
          field += char;
        }
      }

      fields.push(field); // Add the last field
      return fields;
    });

    console.log('CSV parsed into rows:', rows.length);
    const headers = rows[0];
    const dataRows = rows.slice(1);

    // Convert to array of objects
    const rawData = dataRows.map((row) => {
      const item: any = {};
      headers.forEach((header, index) => {
        item[header.trim()] = row[index]?.trim() || '';
      });
      return item;
    });

    console.log('Raw data objects created:', rawData.length);

    // Process the flattened data back into our nested CatalogItem structure
    const itemsMap = new Map<number, CatalogItem>();

    rawData.forEach((row: any) => {
      const itemId = parseInt(row.id);

      if (!itemId) {
        console.warn('Row missing ID, skipping:', row);
        return;
      }

      // If this is the first time we're seeing this item, create it
      if (!itemsMap.has(itemId)) {
        itemsMap.set(itemId, {
          id: itemId,
          name: row.name || '',
          origin: row.origin || '',
          color: row.color || '',
          image: row.image || '',
          description: row.description || '',
          prices: [],
        });
      }

      // Add the price information
      const item = itemsMap.get(itemId);
      if (item && row.size && row.price) {
        item.prices.push({
          size: row.size,
          price: row.price,
          additional: row.additional || '',
        });
      }
    });

    // Convert the map to an array
    const catalogData = Array.from(itemsMap.values());
    console.log('Final catalog data processed:', catalogData.length, 'items');
    
    return {
      props: {
        catalogData: catalogData, // Return the actual data, not an empty array
      },
      // Revalidate every 24 hours (in seconds)
      revalidate: 86400, // 24 * 60 * 60
    };
  } catch (error) {
    console.error('Error fetching catalog data:', error);
    return {
      props: {
        catalogData: [], // Return empty array in case of error
      },
      // Even if there's an error, still revalidate after 24 hours
      revalidate: 86400,
    };
  }
}
