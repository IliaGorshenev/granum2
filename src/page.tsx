import App from './App';
import { CatalogItem } from './components/catalog';

async function getCatalogData(): Promise<CatalogItem[]> {
  try {
    // Replace this URL with the one you get after publishing your sheet to the web
    const fileUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnfEBU2jZvGQOqDX0hgA0dQXM9br26tBVhoN7ctaa1W4ChbfQkUrX6afNums1ZGA/pub?gid=1474798808&single=true&output=csv';

    const response = await fetch(fileUrl, { next: { revalidate: 3600 } }); // Revalidate every hour

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }

    const csvText = await response.text();

    // Parse CSseV data
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
    return Array.from(itemsMap.values());
  } catch (error) {
    console.error('Error loading CSV file:', error);
    return []; // Return empty data in case of error
  }
}

export default async function Home() {
  const catalogData = await getCatalogData();

  return <App initialCatalogData={catalogData} />;
}
