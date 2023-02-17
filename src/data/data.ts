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
  { id: nanoid(), title: '', value: 'default' },
  { id: nanoid(), title: 'Price, low to high', value: 'priceAscending' },
  { id: nanoid(), title: 'Price, high to low', value: 'priceDescending' },
  { id: nanoid(), title: 'Alphabetically A to Z', value: 'titleAscending' },
  { id: nanoid(), title: 'Alphabetically Z to A', value: 'titleDescending' },
  { id: nanoid(), title: 'BestSelling', value: 'bestselling' },
];

export interface IFilter {
  name: string;
  options: Array<string | number>;
  selectedOptions: Array<string | number | never>;
}
export const filters: IFilter[] = [
  {
    name: 'цвет',
    options: ['черный', 'рыжий', 'коричневый', 'синий', 'зеленый', 'красный', 'фуксия', 'другой'],
    selectedOptions: [],
  },
  {
    name: 'количество карт',
    options: [2, 3, 4, 5, 6, 7, 9, 12],
    selectedOptions: [],
  },
  {
    name: 'зажим для денег',
    options: ['yes', 'no'],
    selectedOptions: [],
  },
  {
    name: 'монетница',
    options: ['yes', 'no'],
    selectedOptions: [],
  },
  {
    name: 'хлястик',
    options: ['yes', 'no'],
    selectedOptions: [],
  },
  {
    name: 'бифолд',
    options: ['yes', 'no'],
    selectedOptions: [],
  },
];
