import { nanoid } from 'nanoid';

export const routerPagesData = [
  { url: '/collection', content: 'Весь каталог' },
  { url: '/collection/wallets', content: 'Кошельки' },
  { url: '/collection/belts', content: 'Ремни' },
  { url: '/collection/bags', content: 'Сумки' },
  { url: '/collection/cardholders', content: 'Картхолдеры' },
  { url: '/collection/fordocuments', content: 'Для документов' },
];

export const upperNavHeaderData = [
  { url: '/about', content: 'О нас' },
  { url: '/how-to-order', content: 'Как заказать' },
];

export interface ISortingRule {
  id: string;
  title: string;
  value: string;
}

export const sortingRules: ISortingRule[] = [
  { id: nanoid(), title: '', value: '' },
  { id: nanoid(), title: 'Price, low to high', value: 'priceAscending' },
  { id: nanoid(), title: 'Price, high to low', value: 'priceDescending' },
  { id: nanoid(), title: 'Alphabetically A to Z', value: 'titleAscending' },
  { id: nanoid(), title: 'Alphabetically Z to A', value: 'titleDescending' },
  { id: nanoid(), title: 'BestSelling', value: 'bestselling' },
];

export type filterType =
  | 'color'
  | 'cardCapacity'
  | 'moneyClip'
  | 'coinbox'
  | 'cash'
  | 'cards'
  | 'strap'
  | 'bifold';
export interface IFilter {
  name: filterType;
  textName: { ru: string; en: string };
  options: Array<string | number>;
  textOptions: { ru: Array<string | number>; en: Array<string | number> };
}
export const filters: IFilter[] = [
  {
    name: 'color',
    textName: { ru: 'Цвет', en: 'Color' },
    options: [
      'black',
      'orange',
      'brown',
      'blue',
      'green',
      'red',
      'sand',
      'gold',
      'mix',
      'fucsia',
      'other',
    ],
    textOptions: {
      ru: [
        'Черный',
        'Рыжий',
        'Коричневый',
        'Синий',
        'Зеленый',
        'Красный',
        'Песочный',
        'Золотой',
        'Смешанный',
        'Фуксия',
        'Другой',
      ],
      en: [
        'black',
        'orange',
        'brown',
        'blue',
        'green',
        'red',
        'sand',
        'gold',
        'mix',
        'fucsia',
        'other',
      ],
    },
  },
  {
    name: 'cardCapacity',
    textName: { ru: 'Количество карт', en: 'Card capacity' },
    options: [2, 3, 4, 5],
    textOptions: {
      ru: [2, 3, 4, 5],
      en: [2, 3, 4, 5],
    },
  },
  {
    name: 'moneyClip',
    textName: { ru: 'Зажим', en: 'Money clip' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
  },
  {
    name: 'coinbox',
    textName: { ru: 'Монетница', en: 'Coinbox' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
  },
  {
    name: 'cash',
    textName: { ru: 'Наличные', en: 'Cash' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
  },
  {
    name: 'cards',
    textName: { ru: 'Карты', en: 'Cards' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
  },
  {
    name: 'strap',
    textName: { ru: 'Ремешок', en: 'Straps' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
  },
  {
    name: 'bifold',
    textName: { ru: 'Бифолд', en: 'Bifold' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
  },
];

export const defaultSelectedFilters = {
  color: [],
  cardCapacity: [],
  moneyClip: [],
  coinbox: [],
  cash: [],
  cards: [],
  strap: [],
  bifold: [],
};
