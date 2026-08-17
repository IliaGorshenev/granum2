export const STONE_ICON_PATHS = {
  consultation: [
    'M5 5.5h14v9H9l-4 3v-12Z',
    'M8.5 9h7M8.5 12h4',
  ],
  dimensions: [
    'M5 8V5h3M16 5h3v3M19 16v3h-3M8 19H5v-3',
    'm8 8 8 8M13 8h3v3M11 16H8v-3',
  ],
  experience: [
    'M20 12a8 8 0 1 1-2.34-5.66A8 8 0 0 1 20 12Z',
    'M12 7.5V12l3 2',
  ],
  installation: [
    'm14.5 5.5 4 4M13 7l4 4',
    'M5.5 18.5 14 10l-4-4-4 4 3 3-3.5 3.5a2.12 2.12 0 0 0 3 3Z',
  ],
  location: [
    'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z',
    'M14.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
  ],
  measure: [
    'm5 16 11-11 3 3L8 19H5v-3Z',
    'm13 8 3 3M10.5 10.5l3 3M8 13l3 3',
  ],
  palette: [
    'M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.15A7 7 0 0 1 12 4Z',
    'M8.5 9h.01M12 7.5h.01M15.5 9.5h.01',
  ],
  polish: [
    'M12 3.5 13.6 8l4.4 1.6-4.4 1.6L12 15.5l-1.6-4.3L6 9.6 10.4 8 12 3.5Z',
    'm17.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z',
  ],
  project: [
    'M6 4h9l3 3v13H6V4Z',
    'M15 4v4h3M9 12h6M9 16h4',
  ],
  stone: [
    'm4.5 8.5 3.5-4h8l3.5 4L12 20 4.5 8.5Z',
    'M4.5 8.5h15M8 4.5 12 20l4-15.5',
  ],
  warranty: [
    'M12 3.5 18 6v5.5c0 4-2.5 7-6 9-3.5-2-6-5-6-9V6l6-2.5Z',
    'm9 12 2 2 4-4',
  ],
  workshop: [
    'M4 20V9l6 3V8l6 4V6h4v14H4Z',
    'M8 16h2M14 16h2',
  ],
} as const;

export type StoneIconName = keyof typeof STONE_ICON_PATHS;
