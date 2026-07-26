export interface FeedbackPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export type FeedbackField = keyof FeedbackPayload;

export interface FeedbackFieldUpdate {
  field: FeedbackField;
  value: string;
}

export interface FeedbackStatus {
  message: string;
  status: 'danger' | 'success';
}
