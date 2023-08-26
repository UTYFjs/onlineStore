import { nanoid } from 'nanoid';
import { ISelectRule } from '../data/data';

export const mockSelect = [
  { id: nanoid(), content: '', value: 'all' },
  { id: nanoid(), content: 'по возрастанию', value: 'ascending' },
  { id: nanoid(), content: 'по убыванию', value: 'descending' },
];

export const mockDataCategory = [
  {
    id: nanoid(),
    textContent: 'Кошельки',
    buttonContent: 'Выбери свой кошелек',
    to: '/collection/wallets',
    imgSrc: './assets/img/webp/bg/notebook-1080-min.webp',
  },
  {
    id: nanoid(),
    textContent: 'Ремни',
    buttonContent: 'Выбери свой ремень',
    to: '/collection/belts',
    imgSrc: './assets/img/webp/bg/belt-1620-min.webp',
  },
  {
    id: nanoid(),
    textContent: 'Весь каталог',
    buttonContent: 'Перейти в каталог',
    to: '/collection',
    imgSrc: './assets/img/webp/bg/belt2-1620-min.webp',
  },
  {
    id: nanoid(),
    textContent: 'Сумки',
    buttonContent: 'Выбери свою сумку',
    to: '/collection/bags',
    imgSrc: './assets/img/webp/bg/bag-tote-child-orange-small.webp',
  },
  {
    id: nanoid(),
    textContent: 'Картхолдеры',
    buttonContent: 'Найди свой картхолдер',
    to: '/collection/cardholders',
    imgSrc: './assets/img/webp/bg/wallet-mini-bison.webp',
  },
];

export const mockSelectRules: ISelectRule[] = [
  { id: nanoid(), title: '', value: '' },
  { id: nanoid(), title: '1', value: '1' },
  { id: nanoid(), title: '2', value: '2' },
  { id: nanoid(), title: '3', value: '3' },
  { id: nanoid(), title: '4', value: '4' },
  { id: nanoid(), title: '5', value: '5' },
];
