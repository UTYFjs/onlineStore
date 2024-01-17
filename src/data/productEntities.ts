// working variant
export enum Category {
  WALLET = 'wallet',
  BELT = 'belt',
  CARDHOLDER = 'cardholder',
  FORDOCUMENT = 'forDocument',
  BAG = 'bag',
  NOTEBOOK = 'notebook',

  COINBOX = 'coinBox',
  KEYCHAIN = 'keyChain',
  LONGER = 'longer',
  GLASSESCASE = 'glacesCase',
  PHOTOALBUM = 'photoAlbum',
  BACKPACK = 'backPack',
  BRACELETE = 'bracelete',
  GIFTBOX = 'giftBox',
}

enum Color {
  BLACK = 'black',
  ORANGE = 'orange',
  BROWN = 'brown',
  BLUE = 'blue',
  GREEN = 'green',
  RED = 'red',
  SAND = 'sand',
  GOLD = 'gold',
  MIX = 'mix',
  FUCSIA = 'fucsia',
  OTHER = 'other',
}

interface IDataProduct {
  id: string;
  title: string;
  thumbnail: { primary: string; secondary: string };
  images: string[];
  category: Category;
  color: Color;
  price: number;
  discountPersentage: number;
  stock: number;
  description: string;
  countSales: number;
  productionTime: string;
  bestseller: boolean;
  freeShipping: boolean;
  manufacturer: string;
  year: number;
  countInCart: number;
  //specific
  cardCapacity?: number;
  moneyClip?: 'yes' | 'no';
  coinbox?: 'yes' | 'no';
  cards?: 'yes' | 'no';
  cash?: 'yes' | 'no';
  strap?: 'yes' | 'no';
  bifold?: 'yes' | 'no';
}

export class Product {
  id: string;

  constructor(data: Product) {
    this.id = data.id;
  }
}
