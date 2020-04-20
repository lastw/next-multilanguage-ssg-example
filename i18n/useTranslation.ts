import { useContext } from 'react';
import { LangContext } from './context';

export const useTranslation = (_namespace?: string) => {
  const lang = useContext(LangContext);

  return {
    t: createTranslateFunction(lang),
    lang,
  };
};

/**
 * To emulate i18n we'll just transliterate strings.
 */

const letters: Record<string, string> = {};

Object.entries({
  a: 'а',
  b: 'б',
  c: 'ц',
  d: 'д',
  e: 'е',
  f: 'ф',
  g: 'г',
  h: 'х',
  i: 'и',
  j: 'ж',
  k: 'к',
  l: 'л',
  m: 'м',
  n: 'н',
  o: 'о',
  p: 'п',
  q: 'ку',
  r: 'р',
  s: 'с',
  t: 'т',
  u: 'у',
  v: 'в',
  w: 'в',
  x: 'кс',
  y: 'у',
  z: 'з',
}).forEach(([en, ru]) => {
  letters[en] = ru;
  letters[en.toUpperCase()] = ru.toUpperCase();
});

const transliterate = (str: string) => {
  return str
    .split('')
    .reduce((result, letter) => result + (letters[letter] ? letters[letter] : letter), '');
};

console.log(letters);
const createTranslateFunction = (lang: string) => (str: string) => {
  return lang === 'ru' ? transliterate(str) : str;
};
