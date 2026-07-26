import { Alert } from '@heroui/react';

import type { FeedbackStatus as FeedbackStatusModel } from '../model/types';

interface FeedbackStatusProps {
  value: FeedbackStatusModel;
}

export const FeedbackStatus = ({
  value,
}: FeedbackStatusProps) => (
  <Alert status={value.status}>
    <Alert.Content>
      <Alert.Description>{value.message}</Alert.Description>
    </Alert.Content>
  </Alert>
);
