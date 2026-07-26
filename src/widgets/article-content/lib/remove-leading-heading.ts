const LEADING_MARKDOWN_HEADING = /^\s*#\s+[^\n]+\n+/;

export const removeLeadingHeading = (content: string) =>
  content.replace(LEADING_MARKDOWN_HEADING, '');
