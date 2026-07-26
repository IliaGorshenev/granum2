import { ColorSwatch } from '@heroui/react';

import { resolveCatalogColor } from '../config/colors';

interface CatalogColorSwatchProps {
  color: string;
}

export const CatalogColorSwatch = ({
  color,
}: CatalogColorSwatchProps) => (
  <ColorSwatch
    aria-label={color}
    className="shadow-md transition-transform hover:scale-110"
    color={resolveCatalogColor(color)}
    shape="circle"
    size="md"
  />
);
