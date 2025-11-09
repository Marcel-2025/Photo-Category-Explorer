
import { FilterState } from './types';

export const INITIAL_FILTER_STATE: FilterState = {
  searchTerm: '',
  type: 'all',
  app: 'all',
  isScreenshot: null,
};

export const APP_CATEGORIES = [
  'WhatsApp',
  'Instagram',
  'Telegram',
  'Banking',
  'Maps',
  'System',
  'Other'
];

export const TOPIC_CATEGORIES = [
    'Chats',
    'Memes',
    'Receipts',
    'Documents',
    'Travel',
];
