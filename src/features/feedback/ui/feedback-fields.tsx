import {
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from '@heroui/react';

import type {
  FeedbackField,
  FeedbackPayload,
} from '../model/types';
import {
  PROJECT_TYPES,
  RUSSIAN_PHONE,
} from '../config/feedback';

interface FeedbackFieldsProps {
  form: FeedbackPayload;
  onChange: (update: {
    field: FeedbackField;
    value: string;
  }) => void;
}

export const FeedbackFields = ({
  form,
  onChange,
}: FeedbackFieldsProps) => (
  <>
    <TextField fullWidth isRequired>
      <Label>Имя</Label>
      <Input
        autoComplete="name"
        onChange={(event) =>
          onChange({ field: 'name', value: event.target.value })
        }
        placeholder="Как к вам обращаться"
        value={form.name}
      />
    </TextField>
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
      <TextField fullWidth isRequired>
        <Label>Телефон</Label>
        <Input
          autoComplete="tel"
          inputMode="tel"
          onChange={(event) =>
            onChange({ field: 'phone', value: event.target.value })
          }
          pattern={RUSSIAN_PHONE.pattern}
          placeholder={RUSSIAN_PHONE.placeholder}
          type="tel"
          value={form.phone}
        />
      </TextField>
      <TextField fullWidth>
        <Label>Почта</Label>
        <Input
          autoComplete="email"
          onChange={(event) =>
            onChange({ field: 'email', value: event.target.value })
          }
          placeholder="name@example.ru"
          type="email"
          value={form.email}
        />
      </TextField>
    </div>
    <Select
      fullWidth
      isRequired
      onSelectionChange={(key) => {
        if (key === null) {
          throw new Error('Project type selection is missing');
        }

        onChange({
          field: 'projectType',
          value: String(key),
        })
      }}
      placeholder="Выберите изделие"
      selectedKey={
        form.projectType === '' ? null : form.projectType
      }>
      <Label>Тип изделия</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox items={PROJECT_TYPES}>
          {(item) => (
            <ListBox.Item id={item.id} textValue={item.label}>
              {item.label}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          )}
        </ListBox>
      </Select.Popover>
    </Select>
    <TextField fullWidth>
      <Label>Комментарий</Label>
      <TextArea
        className="min-h-24"
        onChange={(event) =>
          onChange({ field: 'message', value: event.target.value })
        }
        placeholder="Размеры, материал или удобное время связи"
        value={form.message}
      />
    </TextField>
  </>
);
