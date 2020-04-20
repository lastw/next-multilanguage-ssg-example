import { availableLangs } from './config';

export const isValidLang = (lang: string) => availableLangs.includes(lang);
