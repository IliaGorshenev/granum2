import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as XLSX from 'xlsx';
import Loader from './loader/loader';
// Define types for our data
interface PriceItem {
  size: string;
  price: string;
  additional: string;
}

interface CatalogItem {
  id: number;
  name: string;
  description: string;
  origin: string;
  color: string;
  image: string;
  prices: PriceItem[];
}

// Catalog data with updated image links
// const DATA: CatalogItem[] = [
//   {
//     id: 1,
//     name: 'Плита южно-султаевская',
//     description:
//       'Плиты из южно-султаевского гранита используют для наружных работ в облицовке цоколя, фасадов зданий, ступеней, крылец. А также в дорожном строительстве: укладывают тротуары, дорожки. Южно-султаевский гранит --- один из самых востребованных в Уральском регионе. Он имеет крупнозернистую структуру и красно-коричневый цвет с чёрными прожилками и редко встречающимися светлыми вкраплениями. Его положительными качествами являются долговечность, хорошая стойкость к температурным перепадам и влажности. Плиты не поддаются химическому воздействию, переносят повышенные нагрузки. Здания, облицованные этим видом гранита, выделяются в городской среде за счет насыщенного красно-коричневого оттенка.',
//     origin: 'Челябинская область',
//     color: 'коричневый',
//     image: 'https://images.unsplash.com/photo-1588435362337-36a8ccc55d0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     prices: [
//       { size: '300 × 600 × 20 мм', price: '2 700 р/м2', additional: '+450 р/м2' },
//       { size: '300 × 600 × 30 мм', price: '3 000 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 40 мм', price: '3 300 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 50 мм', price: '3 550 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 60 мм', price: '3 800 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 80 мм', price: '4 350 р/м2', additional: '+600 р/м2' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Плита мансуровская',
//     description:
//       'Плиты из мансуровского гранита используют в строительстве, ландшафтном дизайне. Область применения очень широка --- от облицовки фасадов до оформления мемориальных комплексов. Они надёжно защищают стены от негативных воздействий различных природных явлений, будь то дождь, солнце, мороз или жара. Мансуровский гранит представляет собой природный камень мелкозернистой структуры с преобладающим однородным рисунком, спокойного серо-зелёного цвета. Цвет универсальный, сочетается со многими оттенками в интерьере. Обладает высокой влагоустойчивостью, стойкостью к истиранию, прочен и долговечен. Может быть использован без каких-либо ограничений во внутренней отделке ввиду первого класса радиоактивности. Помимо всего прочего он легок в обработке. Подойдет для мощения улиц, укладки полов, облицовки ступеней и стен.',
//     origin: 'республика Башкортостан',
//     color: 'серый',
//     image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     prices: [
//       { size: '300 × 600 × 20 мм', price: '2 900 р/м2', additional: '+450 р/м2' },
//       { size: '300 × 600 × 30 мм', price: '3 200 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 40 мм', price: '3 550 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 50 мм', price: '3 900 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 60 мм', price: '4 200 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 80 мм', price: '4 850 р/м2', additional: '+600 р/м2' },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Плита камбулатовская',
//     description:
//       'Плиты из камбулатовского гранита нашли широкое применение практически в любом строительстве и отделке зданий. Цвет светло-серый с включениями черных и коричневых вкраплений. Наружная отделка из этого камня делает строения очень презентабельными. Подойдет как для обработки ландшафтных частей, так и для облицовки жилых, коммерческих помещений, мемориальных комплексов. Несет не только защитную функцию, но и придает утонченность и элегантность помещению. Обладает высоким уровнем прочности и морозостойкости. Это один из наиболее часто используемых видов гранита из-за его универсального внешнего вида и первого класса радиобезопасности. Является отечественным аналогом известного импортного гранита Royal White.',
//     origin: 'Челябинская область',
//     color: 'серый',
//     image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     prices: [
//       { size: '300 × 600 × 20 мм', price: '3 000 р/м2', additional: '+450 р/м2' },
//       { size: '300 × 600 × 30 мм', price: '3 400 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 40 мм', price: '3 800 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 50 мм', price: '4 150 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 60 мм', price: '4 500 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 80 мм', price: '5 250 р/м2', additional: '+600 р/м2' },
//     ],
//   },
//   {
//     id: 4,
//     name: 'Плита из гранита Томирис II (Куртинского)',
//     description:
//       'Плиты из куртинского гранита (Томирис II) применяют для оформления фасадов дома, лестниц, а также других конструкций. Цвет у такого гранита необычный --- кофейный с коричневыми и бежевыми включениями. Стены, подоконники, террасы, летние площадки и другие зоны и элементы домашнего интерьера, загородного участка, отделанные этим камнем, выглядят очень изысканно. Подойдет этот камень для облицовки беседок и ротонд, укладки дорожек в саду. Его можно использовать и в дорожном строительстве для покрытий городских площадей, улиц, парковых дорожек и т. д. Так же как и другие виды гранита куртинский отличается высоким уровнем прочности и морозоустойчивости.',
//     origin: 'Алматинская область',
//     color: 'коричневый',
//     image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     prices: [
//       { size: '300 × 600 × 20 мм', price: '3 550 р/м2', additional: '+450 р/м2' },
//       { size: '300 × 600 × 30 мм', price: '4 100 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 40 мм', price: '4 650 р/м2', additional: '+500 р/м2' },
//       { size: '300 × 600 × 50 мм', price: '5 200 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 60 мм', price: '5 750 р/м2', additional: '+550 р/м2' },
//       { size: '300 × 600 × 80 мм', price: '6 800 р/м2', additional: '+600 р/м2' },
//     ],
//   },
// ];

export const parseExcelFile = (filePath: string): CatalogItem[] => {
  try {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);

    // Assume the first sheet contains our data
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const rawData = XLSX.utils.sheet_to_json(worksheet);

    // Process the data to match our CatalogItem structure
    const catalogItems: CatalogItem[] = [];

    rawData.forEach((row: any, index) => {
      // Create a new catalog item
      const item: CatalogItem = {
        id: index + 1,
        name: row.name || '',
        origin: row.origin || '',
        color: row.color || '',
        image: row.image || '',
        description: row.description || '',
        prices: [],
      };

      // Check if there are prices in the row
      if (row.size && row.price) {
        item.prices.push({
          size: row.size,
          price: row.price,
          additional: row.additional || '',
        });
      }

      // Check if this is a new item or a price for an existing item
      const existingItem = catalogItems.find((i) => i.name === item.name);
      if (existingItem) {
        // Add price to existing item
        existingItem.prices.push(...item.prices);
      } else {
        // Add new item
        catalogItems.push(item);
      }
    });

    return catalogItems;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    return [];
  }
};

// Styled components
const CatalogContainer = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  margin-top: 2.5rem;
`;

const CatalogTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: #2d3748;
  position: relative;
  font-weight: 600;
  width: 100%;
  letter-spacing: -0.5px;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.05rem;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #333;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  }
`;

const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

const CardImage = styled.div<{ bgImage: string }>`
  height: 240px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 1s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 100%);
  }

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 600;
  transition: color 0.3s ease;
  line-height: 1.3;

  ${Card}:hover & {
    color: #3b7a57;
  }
`;

const CardOrigin = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const CardColor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`;

const ColorLabel = styled.span`
  font-size: 1rem;
  color: #4a5568;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const ColorCircle = styled.div<{ color: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.color.toLowerCase()) {
      case 'коричневый':
        return '#8B4513';
      case 'серый':
        return '#808080';
      default:
        return '#CCCCCC';
    }
  }};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardButton = styled.button`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.05rem;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.25);
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(90deg, #346c4d, #5c7a1e);
    box-shadow: 0 8px 20px rgba(59, 122, 87, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(59, 122, 87, 0.25);
  }
`;

// Modal styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 20px;
  max-width: 1250px;
  width: 92%;
  max-height: 92vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem 2.5rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  border-radius: 20px 20px 0 0;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #2d3748;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #718096;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #2d3748;
    background-color: #f7fafc;
  }
`;

const ModalBody = styled.div`
  padding: 2.5rem;
`;

const ModalContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1269px) {
    flex-direction: column;
  }
`;
const ModalImage = styled.img`
  width: 50%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  margin-bottom: 2.5rem;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1269px) {
    width: 100%;
    height: 300px;
  }
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  margin-bottom: 2.5rem;
  text-align: justify;
  letter-spacing: 0.2px;
  width: 50%;

  @media (max-width: 1269px) {
    width: 100%;
  }
`;
const ModalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const InfoItem = styled.div`
  flex: 1;
  min-width: 220px;
`;
const InfoLabel = styled.h4`
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const InfoValue = styled.p`
  font-size: 1.2rem;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;

  ${ColorCircle} {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`;

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #f1f5f9;
  padding: 1.2rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: #475569;
  font-size: 1.1rem;
  border-bottom: 2px solid #e2e8f0;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }
`;

const TableCell = styled.td`
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  color: #334155;
  font-size: 1.05rem;
  transition: background-color 0.2s ease;

  tr:last-child & {
    border-bottom: none;
  }

  tr:hover & {
    background-color: #f8fafc;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)<{ delay: number }>`
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;
`;
// Main component
const Catalog: React.FC = () => {
  const [catalogData, setCatalogData] = useState<CatalogItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatalogData = async () => {
      try {
        setLoading(true);

        // Replace this URL with the one you get after publishing your sheet to the web
        // The format should be something like:
        // https://docs.google.com/spreadsheets/d/e/2PACX-your-published-id/pub?output=csv
        const fileUrl =
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnfEBU2jZvGQOqDX0hgA0dQXM9br26tBVhoN7ctaa1W4ChbfQkUrX6afNums1ZGA/pub?gid=1474798808&single=true&output=csv';

        console.log('Fetching from URL:', fileUrl);

        const response = await fetch(fileUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
        }

        const csvText = await response.text();

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

        console.log('Raw CSV data:', rawData);

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
        const processedItems = Array.from(itemsMap.values());
        console.log('Processed catalog data:', processedItems);

        setCatalogData(processedItems);
        setLoading(false);
      } catch (error) {
        console.error('Error loading CSV file:', error);
        setError(`Failed to load catalog data: ${error instanceof Error ? error.message : String(error)}`);
        setLoading(false);
      }
    };

    fetchCatalogData();
  }, []);

  const openModal = (item: CatalogItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return <Loader text="Загружаем данные" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CatalogContainer>
      <CatalogTitle id="catalog">Каталог гранитных плит</CatalogTitle>
      <CatalogGrid>
        {catalogData.map((item, index) => (
          <AnimatedCard key={item.id} onClick={() => openModal(item)} delay={index * 0.1}>
            <CardImage bgImage={item.image} />
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardOrigin>Происхождение: {item.origin}</CardOrigin>
              <CardColor>
                <ColorLabel>Цвет:</ColorLabel>
                <ColorCircle color={item.color} />
              </CardColor>
              <StyledButton>
                <ButtonImage src="https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png" alt="Button icon" />
                Подробнее
              </StyledButton>
            </CardContent>
          </AnimatedCard>
        ))}
      </CatalogGrid>

      {selectedItem && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{selectedItem.name}</ModalTitle>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              <ModalContentLayout>
                <ModalImage src={selectedItem.image} alt={selectedItem.name} />
                <ModalDescription>{selectedItem.description}</ModalDescription>
              </ModalContentLayout>
              <ModalInfo>
                <InfoItem>
                  <InfoLabel>Происхождение:</InfoLabel>
                  <InfoValue>{selectedItem.origin}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Цвет:</InfoLabel>
                  <InfoValue>
                    {selectedItem.color} <ColorCircle color={selectedItem.color} />
                  </InfoValue>
                </InfoItem>
              </ModalInfo>
              <h3>Цены</h3>
              <PriceTable>
                <thead>
                  <tr>
                    <TableHeader>Размер</TableHeader>
                    <TableHeader>Цена</TableHeader>
                    <TableHeader>Дополнительно</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {selectedItem.prices.map((price, index) => (
                    <tr key={index}>
                      <TableCell>{price.size}</TableCell>
                      <TableCell>{price.price}</TableCell>
                      <TableCell>{price.additional}</TableCell>
                    </tr>
                  ))}
                </tbody>
              </PriceTable>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </CatalogContainer>
  );
};

export default Catalog;
