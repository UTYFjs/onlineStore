import { nanoid } from 'nanoid';

export const routerPagesData = [
  { url: '/collection', content: 'ВЕСЬ КАТАЛОГ' },
  { url: '/collection/wallets', content: 'Кошельки' },
  { url: '/collection/belts', content: 'Ремни' },
  { url: '/collection/bags', content: 'Сумки' },
  { url: '/collection/cardholders', content: 'Картхолдеры' },
  { url: '/collection/notebooks', content: 'Блокноты' },
  { url: '/collection/fordocuments', content: 'Для документов' },
  { url: '/favorites', content: 'ИЗБРАННОЕ' },
];

export const upperNavHeaderData = [
  { url: '/about', content: 'О нас' },
  { url: '/how-to-order', content: 'Как заказать' },
];

export interface ISelectRule {
  id: string;
  title: string;
  value: string;
}

export const sortingRules: ISelectRule[] = [
  { id: nanoid(), title: '', value: '' },
  { id: nanoid(), title: 'По возрастанию цены', value: 'priceAscending' },
  { id: nanoid(), title: 'По убыванию цены', value: 'priceDescending' },
  { id: nanoid(), title: 'По Алфавиту Я -> A', value: 'titleAscending' },
  { id: nanoid(), title: 'По Алфавиту A -> Я', value: 'titleDescending' },
  //{ id: nanoid(), title: 'BestSelling', value: 'bestselling' },
];
export const sortingRulesEng: ISelectRule[] = [
  { id: nanoid(), title: '', value: '' },
  { id: nanoid(), title: 'Price, low to high', value: 'priceAscending' },
  { id: nanoid(), title: 'Price, high to low', value: 'priceDescending' },
  { id: nanoid(), title: 'Alphabetically A to Z', value: 'titleAscending' },
  { id: nanoid(), title: 'Alphabetically Z to A', value: 'titleDescending' },
  //{ id: nanoid(), title: 'BestSelling', value: 'bestselling' },
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
  isActive: boolean;
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
    isActive: false,
  },
  {
    name: 'cardCapacity',
    textName: { ru: 'Количество карт', en: 'Card capacity' },
    options: [2, 3, 4, 5],
    textOptions: {
      ru: [2, 3, 4, 5],
      en: [2, 3, 4, 5],
    },
    isActive: false,
  },
  {
    name: 'moneyClip',
    textName: { ru: 'Зажим', en: 'Money clip' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
    isActive: false,
  },
  {
    name: 'coinbox',
    textName: { ru: 'Монетница', en: 'Coinbox' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
    isActive: false,
  },
  {
    name: 'cash',
    textName: { ru: 'Наличные', en: 'Cash' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
    isActive: false,
  },
  {
    name: 'cards',
    textName: { ru: 'Карты', en: 'Cards' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
    isActive: false,
  },
  {
    name: 'strap',
    textName: { ru: 'Ремешок', en: 'Straps' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
    isActive: false,
  },
  {
    name: 'bifold',
    textName: { ru: 'Бифолд', en: 'Bifold' },
    options: ['yes', 'no'],
    textOptions: {
      ru: ['Да', 'Нет'],
      en: ['Yes', 'No'],
    },
    isActive: false,
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

export const ruColors = {
  black: 'Черный',
  orange: 'Рыжий',
  brown: 'Коричневый',
  blue: 'Синий',
  green: 'Зеленый',
  red: 'Красный',
  sand: 'Песочный',
  gold: 'Золотой',
  mix: 'Микс',
  fucsia: 'Фуксия',
  other: 'Другой',
};
// to do create enum or const with actual colors

export const description = {
  belt: {
    ru: [
      'Этот кожаный ремень выдержит все испытания, которые преподнесет вам жизнь. Изготовлен из толстой 100% натуральной кожи. Мы используем только плотную кожу вырезанную из одного цельного куска, что делает его отличным выбором по сравнению со склеенными либо изготовленных из спрессованной кожи ремнями, которые быстро изнашиваются.',
      'Используются прочные литые пряжки из нержавеющей стали, либо латуни. Мы делаем все ремни под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: '',
  },
  walletM3x: {
    ru: [
      'Кошелек бифолд, изготовленный из натуральной кожи, представляет собой стильное и практичное решение для хранения ваших финансовых средств. Этот кошелек отличается высоким качеством и вниманием к деталям благодаря ручной работе.',
      'Внутри кошелька вы найдете три удобных кармана для карт и монетницу, которая поможет вам удерживать мелочь в одном месте, избегая разбросанных монет в карманах или сумке. ',
      'Натуральная кожа, использованная в изготовлении этого кошелька, придает ему элегантный внешний вид и высокую прочность. Кожа отличается приятной на ощупь текстурой и с течением времени становится еще более привлекательной, приобретая уникальную патину.',
      'Будьте уверены, что этот кошелек станет надежным и долговечным аксессуаром, который прослужит вам долгие годы, сохраняя свою функциональность и эстетическое очарование.',
    ],
    en: [],
  },
  woodenNotebook: {
    ru: [
      'Блокнот формата А5, деревянная обложка и корешок из натуральной кожи. В блокноте 120 листов в клетку из качественной приятной бумаги. В этом блокноте можно вставлять новые листы и убирать не нужные. Кольцевой механизм с разъемными металлическими кольцами  позволяет заменять блоки и многократно использовать ваш ежедневник на протяжении долгих лет.  Новый бумажный блок можно без проблем купить в канцелярском магазине, ну а старый отправить на переработку :)',
      'Блокнот на 100 % экологичен и придется по вкусу любителям всего натурального.  Запах дерева  в сочетании с  натуральной кожей не смогут оставить никого равнодушным.',
      'Блокнот в деревянной обложке -  отличный и оригинальный подарок для себя, близких, коллег. Он покорит вас с первого знакомства!',
    ],
    en: '',
  },
  bag: {
    ru: [
      'Этот кожаный ремень выдержит все испытания, которые преподнесет вам жизнь. Наш ремень изготовлен из толстой 100% натуральной кожи. Мы используем только плотную кожу вырезанную из одного цельного куска, никаких склеек, один толстый сплошной кусок кожи, что делает его отличным выбором по сравнению со склеенными либо изготовленных из спрессованной кожи ремнями, которые быстро изнашиваются.',
      'Мы так же используем прочные литые пряжки из нержавеющей стали, либо латуни. Мы делаем все ремни под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: '',
  },
  forDocument: {
    ru: [
      'Этот кожаный ремень выдержит все испытания, которые преподнесет вам жизнь. Наш ремень изготовлен из толстой 100% натуральной кожи. Мы используем только плотную кожу вырезанную из одного цельного куска, никаких склеек, один толстый сплошной кусок кожи, что делает его отличным выбором по сравнению со склеенными либо изготовленных из спрессованной кожи ремнями, которые быстро изнашиваются.',
      'Мы так же используем прочные литые пряжки из нержавеющей стали, либо латуни. Мы делаем все ремни под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: '',
  },
  cardholder: {
    ru: [
      'Этот кожаный ремень выдержит все испытания, которые преподнесет вам жизнь. Наш ремень изготовлен из толстой 100% натуральной кожи. Мы используем только плотную кожу вырезанную из одного цельного куска, никаких склеек, один толстый сплошной кусок кожи, что делает его отличным выбором по сравнению со склеенными либо изготовленных из спрессованной кожи ремнями, которые быстро изнашиваются.',
      'Мы так же используем прочные литые пряжки из нержавеющей стали, либо латуни. Мы делаем все ремни под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: '',
  },
  passportCover: {
    ru: [],
    en: [],
  },
  docholder: {
    ru: [],
    en: [],
  },
  giftBoxBeltDocholder: {
    ru: [],
    en: [],
  },
};
