import { nanoid } from 'nanoid';

export const routerPagesData = [
  { url: '/collection', content: 'Весь каталог' },
  { url: '/collection/wallets', content: 'Кошельки' },
  { url: '/collection/belts', content: 'Ремни' },
  { url: '/collection/bags', content: 'Сумки' },
  { url: '/collection/cardholders', content: 'Лонгеры' },
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
  options: Array<string | number>;
}
export const filters: IFilter[] = [
  {
    name: 'color',
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
  },
  {
    name: 'cardCapacity',
    options: [2, 3, 4, 5],
  },
  {
    name: 'moneyClip',
    options: ['yes', 'no'],
  },
  {
    name: 'coinbox',
    options: ['yes', 'no'],
  },
  {
    name: 'cash',
    options: ['yes', 'no'],
  },
  {
    name: 'cards',
    options: ['yes', 'no'],
  },
  {
    name: 'strap',
    options: ['yes', 'no'],
  },
  {
    name: 'bifold',
    options: ['yes', 'no'],
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
