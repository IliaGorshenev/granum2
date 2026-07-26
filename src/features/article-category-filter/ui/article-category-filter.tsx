import { Tabs } from '@heroui/react';
import type { ReactNode } from 'react';

interface ArticleCategoryFilterProps {
  categories: string[];
  children: ReactNode;
  selected: string;
  onSelect: (category: string) => void;
}

export const ArticleCategoryFilter = ({
  categories,
  children,
  selected,
  onSelect,
}: ArticleCategoryFilterProps) => (
  <Tabs
    className="min-w-0"
    onSelectionChange={(key) => onSelect(String(key))}
    selectedKey={selected}
    variant="primary">
    <Tabs.ListContainer className="mx-auto w-full max-w-4xl overflow-x-auto">
      <Tabs.List
        aria-label="Категории статей"
        className="min-w-max">
        {categories.map((category) => (
          <Tabs.Tab id={category} key={category}>
            {category}
            <Tabs.Indicator />
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs.ListContainer>
    <Tabs.Panel className="min-w-0 pt-8 sm:pt-10" id={selected}>
      {children}
    </Tabs.Panel>
  </Tabs>
);
