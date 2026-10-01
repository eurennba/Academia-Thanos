import { GYM_INFO } from '../data/gymData';

export function getWhatsAppUrl(customMessage?: string, phoneNumber?: string): string {
  const number = phoneNumber || GYM_INFO.whatsapp.cleanNumber;
  const message = customMessage || GYM_INFO.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(customMessage?: string, phoneNumber?: string): void {
  const url = getWhatsAppUrl(customMessage, phoneNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}
