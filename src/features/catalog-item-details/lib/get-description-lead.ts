const DESCRIPTION_LEAD_SENTENCE_COUNT = 2;

export const getDescriptionLead = (description: string) =>
  `${description
    .split('. ')
    .slice(0, DESCRIPTION_LEAD_SENTENCE_COUNT)
    .join('. ')}.`;
