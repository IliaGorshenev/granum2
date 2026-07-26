import { RUSSIAN_PHONE } from '../config/feedback';

const getLocalDigits = (value: string) => {
  const digits = value.replace(/\D/g, '');
  const hasCountryPrefix =
    digits.startsWith(RUSSIAN_PHONE.countryCode) ||
    digits.startsWith(RUSSIAN_PHONE.domesticPrefix);

  return (hasCountryPrefix ? digits.slice(1) : digits).slice(
    0,
    RUSSIAN_PHONE.localDigitsCount
  );
};

export const formatRussianPhone = (value: string) => {
  const digits = getLocalDigits(value);

  return [
    RUSSIAN_PHONE.prefix,
    digits.length > 0 ? ` (${digits.slice(0, 3)}` : '',
    digits.length >= 3 ? ')' : '',
    digits.length > 3 ? ` ${digits.slice(3, 6)}` : '',
    digits.length > 6 ? `-${digits.slice(6, 8)}` : '',
    digits.length > 8 ? `-${digits.slice(8, 10)}` : '',
  ].join('');
};
