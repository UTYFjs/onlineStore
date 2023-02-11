import { nanoid } from 'nanoid';

export interface IDataProduct {
  id: string;
  name: string;
  img: string;
  type: string;
  color: string;
  price: number;
  stock: number;
  description: string;
  productionTime: string;
  bestseller: boolean;
  freeShipping: boolean;
  manufacturer: string;
  year: number;
  countInCart: number;
}

export const dataProducts: Array<IDataProduct> = [
  /*{
    id: nanoid(),
    name: 'Ремень "Винтаж"',
    img: './assets/img/jpg/belt_red_vintage.jpg',
    type: 'belt',
    color: 'red',
    price: 130,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },*/
  {
    id: nanoid(),
    name: 'Сумка "Child"',
    img: './assets/img/jpg/bag-tote-child-orange-small.jpg',
    type: 'bag',
    color: 'orange',
    price: 110,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '7',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Сумка',
    img: './assets/img/jpg/bag-tote-orange.jpg',
    type: 'bag',
    color: 'orange',
    price: 250,
    stock: 3,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '7',
    bestseller: false,
    freeShipping: true,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Бизон"',
    img: './assets/img/jpg/belt-bizon-black.jpg',
    type: 'belt',
    color: 'black',
    price: 130,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '99',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Кровавая Мэри"',
    img: './assets/img/jpg/belt-bloody-mary.jpg',
    type: 'belt',
    color: 'mix',
    price: 150,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Fireman"',
    img: './assets/img/jpg/belt-fireman-black.jpg',
    type: 'belt',
    color: 'black',
    price: 170,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Деревянный блокнот',
    img: './assets/img/jpg/notebook-wooden.jpg',
    type: 'notebook',
    color: 'sand',
    price: 75,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '14',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Монетница',
    img: './assets/img/jpg/coin-box-red.jpg',
    type: 'coinBox',
    color: 'red',
    price: 50,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Докхолдер "Бизон"',
    img: './assets/img/jpg/docholder-bison.jpg',
    type: 'forDocuments',
    color: 'brown',
    price: 100,
    stock: 4,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Gold"',
    img: './assets/img/jpg/belt-gold.jpg',
    type: 'belt',
    color: 'gold',
    price: 150,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '14',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Missouri"',
    img: './assets/img/jpg/belt-missouri-black.jpg',
    type: 'belt',
    color: 'black',
    price: 160,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '14',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Missouri"',
    img: './assets/img/jpg/belt-missouri-burgundy.jpg',
    type: 'belt',
    color: 'brown',
    price: 160,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '6',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Missouri"',
    img: './assets/img/jpg/belt-missouri-lite-brown.jpg',
    type: 'belt',
    color: 'brown',
    price: 160,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "OnlyBlack"',
    img: './assets/img/jpg/belt-only-black.jpg',
    type: 'belt',
    color: 'black',
    price: 180,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Гранат"',
    img: './assets/img/jpg/belt-pomegranate.jpg',
    type: 'belt',
    color: 'mix',
    price: 150,
    stock: 3,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Винтаж"',
    img: './assets/img/jpg/belt-vintage-orange.jpg',
    type: 'belt',
    color: 'orange',
    price: 130,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '12',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Кошелек',
    img: './assets/img/jpg/wallet-brown.jpg',
    type: 'wallet',
    color: 'brown',
    price: 120,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '7',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Кошелек Crazy',
    img: './assets/img/jpg/wallet-brown-crazy.jpg',
    type: 'wallet',
    color: 'brown',
    price: 120,
    stock: 3,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '4',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Мини-кошелек "Бизон"',
    img: './assets/img/jpg/wallet-mini-bison.jpg',
    type: 'wallet',
    color: 'brown',
    price: 70,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Ремень "Violet"',
    img: './assets/img/jpg/belt-violet.jpg',
    type: 'belt',
    color: 'mix',
    price: 150,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Картхолдер',
    img: './assets/img/jpg/cardholder-yellow.jpg',
    type: 'cardholder',
    color: 'mix',
    price: 35,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Картхолдер',
    img: './assets/img/jpg/cardholder-brown.jpg',
    type: 'cardholder',
    color: 'brown',
    price: 35,
    stock: 2,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Картхолдер сет (4 шт)',
    img: './assets/img/jpg/cardhalder-mix.jpg',
    type: 'cardholder',
    color: 'mix',
    price: 125,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '4',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Докхолдер',
    img: './assets/img/jpg/dockholder-mix-color.jpg',
    type: 'forDocuments',
    color: 'mix',
    price: 100,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Деревянный блокнот (4 шт)',
    img: './assets/img/jpg/notebook-mix.jpg',
    type: 'notebook',
    color: 'sand',
    price: 280,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '14',
    bestseller: false,
    freeShipping: true,
    manufacturer: 'alPaco',
    year: 2021,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Кошелек',
    img: './assets/img/jpg/wallet-orange.jpg',
    type: 'wallet',
    color: 'orange',
    price: 120,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'alPaco',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Обложка на паспорт',
    img: './assets/img/jpg/passport-cover-bizon.jpg',
    type: 'forDocuments',
    color: 'brown',
    price: 40,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: true,
    freeShipping: false,
    manufacturer: 'other',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Обложка на паспорт',
    img: './assets/img/jpg/passport-cover-wood.jpg',
    type: 'forDocuments',
    color: 'sand',
    price: 50,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '3',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'other',
    year: 2022,
    countInCart: 0,
  },
  {
    id: nanoid(),
    name: 'Кошелек с монетницей',
    img: './assets/img/jpg/wallet-brown1.jpg',
    type: 'wallet',
    color: 'brown',
    price: 120,
    stock: 1,
    description:
      'Red vintage belt. Natural leather, strong furniture. Leather thickness - 4-4.2 mm',
    productionTime: '5',
    bestseller: false,
    freeShipping: false,
    manufacturer: 'other',
    year: 2022,
    countInCart: 0,
  },
];
