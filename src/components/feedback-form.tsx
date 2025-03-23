import React, { useState } from 'react';
import styled from 'styled-components';

interface FeedbackFormProps {
  telegramBotToken: string;
  backgroundImage?: string;
}

const FormSection = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

const BackgroundContainer = styled.div<{ backgroundImage?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #4caf50;
    margin: 0.8rem auto 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #444;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #4caf50;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const StatusMessage = styled.div<{ isError?: boolean }>`
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  text-align: center;
  background-color: ${(props) => (props.isError ? '#ffebee' : '#e8f5e9')};
  color: ${(props) => (props.isError ? '#c62828' : '#2e7d32')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const RequiredIndicator = styled.span`
  color: #e53935;
  margin-left: 4px;
`;

const FormFooter = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }
`;

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  telegramBotToken,
  backgroundImage = 'https://storage.yandexcloud.net/ilia/1679098994_vsegda-pomnim-com-p-gabbro-norit-foto-53.jpg',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message || (!email && !phone)) {
      setStatus({
        message: 'Please fill in your name, message, and either email or phone.',
        isError: true,
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const text = `
  Поступила новая заявка с сайта
  
  Имя: ${name}
  ${email ? `Почта: ${email}` : ''}
  ${phone ? `Телефон: ${phone}` : ''}
  
  💬 Сообщение:
  ${message}
      `;

      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: -4767436757, // Use the provided chat ID
          text: text,
          parse_mode: 'HTML',
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus({
          message: 'Спасибо! Заявка успешно отправлена.',
          isError: false,
        });
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error(data.description || 'Ошибка при отправке заявки');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus({
        message: 'Произошла ошибка при отправке заявки. Попробуйте заново.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormSection id='contact'>
      <BackgroundContainer backgroundImage={backgroundImage} />
      <FormContainer>
        <Title>Свяжитесь с нами</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Имя <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше полное имя" required />
          </InputGroup>

          <Row>
            <InputGroup>
              <Label htmlFor="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                Электронная почта
              </Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ваш адрес электронной почты" />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                Телефон
              </Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ваш номер телефона" />
            </InputGroup>
          </Row>

          <InputGroup>
            <Label htmlFor="message">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
              Сообщение <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <TextArea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Как мы можем помочь? Расскажите о вашем проекте или запросе..."
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                  <path
                    d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
                  />
                </svg>
                Отправка...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                Отправить сообщение
              </>
            )}
          </SubmitButton>

          {status && (
            <StatusMessage isError={status.isError}>
              {status.isError ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-check-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
              )}
              {status.message}
            </StatusMessage>
          )}
        </Form>

        <FormFooter>Мы ценим вашу конфиденциальность. Ваша информация будет использоваться только для ответа на ваш запрос.</FormFooter>
      </FormContainer>
    </FormSection>
  );
};

export default FeedbackForm;
