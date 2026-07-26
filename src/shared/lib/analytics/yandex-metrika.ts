import { METRIKA_COUNTER_ID } from '@/shared/config';

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...params: unknown[]) => void;
  }
}

// Track page view (automatically tracked on route change, but can be called manually)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_COUNTER_ID, 'hit', url);
  }
};

// Track custom goal/event
export const trackGoal = (goalName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_COUNTER_ID, 'reachGoal', goalName, params);
  }
};

// Track external link click
export const trackExternalLink = (url: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_COUNTER_ID, 'extLink', url);
  }
};

// Track file download
export const trackFileDownload = (url: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_COUNTER_ID, 'file', url);
  }
};

// Track user parameters
export const setUserParams = (params: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_COUNTER_ID, 'userParams', params);
  }
};

// Common goal names for your website
export const Goals = {
  // Feedback form
  FEEDBACK_FORM_OPENED: 'feedback_form_opened',
  FEEDBACK_FORM_SUBMITTED: 'feedback_form_submitted',
  QUOTE_CTA_CLICKED: 'quote_cta_clicked',
  CATALOG_CTA_CLICKED: 'catalog_cta_clicked',
  MAP_OPENED: 'map_opened',

  // Catalog interactions
  CATALOG_ITEM_CLICKED: 'catalog_item_clicked',
  CATALOG_MODAL_OPENED: 'catalog_modal_opened',

  // Portfolio/Works
  WORK_ITEM_CLICKED: 'work_item_clicked',
  WORK_MODAL_OPENED: 'work_modal_opened',

  // Articles
  ARTICLE_VIEWED: 'article_viewed',
  ARTICLE_SHARED: 'article_shared',
  ARTICLE_PRINTED: 'article_printed',

  // Contact
  PHONE_CLICKED: 'phone_clicked',
  EMAIL_CLICKED: 'email_clicked',

  // Navigation
  CATALOG_SECTION_VISITED: 'catalog_section_visited',
  WORKS_SECTION_VISITED: 'works_section_visited',
  ABOUT_SECTION_VISITED: 'about_section_visited',
  CONTACT_SECTION_VISITED: 'contact_section_visited',
} as const;
