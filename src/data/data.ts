import { nanoid } from 'nanoid';

export const routerPagesData = [
  { url: '/collection', content: 'ВЕСЬ КАТАЛОГ' },
  { url: '/collection/wallets', content: 'Кошельки' },
  { url: '/collection/belts', content: 'Ремни' },
  { url: '/collection/cardholders', content: 'Картхолдеры' },
  { url: '/collection/fordocuments', content: 'Для документов' },
  { url: '/collection/bags', content: 'Сумки' },
  { url: '/collection/notebooks', content: 'Блокноты' },
  { url: '/collection/photoAlbums', content: 'Фотоальбомы' },
  { url: '/collection/coinBoxes', content: 'Монетницы' },
  { url: '/collection/keyChains', content: 'Для ключей' },
  { url: '/collection/longers', content: 'Лонгеры' },
  { url: '/collection/glassesCases', content: 'Футляры для очков' },
  { url: '/collection/backPacks', content: 'Рюкзаки' },
  { url: '/collection/bracelets', content: 'Браслеты' },
  { url: '/collection/giftBoxes', content: 'Наборы' },

  { url: '/favorites', content: 'ИЗБРАННОЕ' },
];

export const upperNavHeaderData = [
  { url: '/about', content: 'О нас' },
  { url: '/how-to-order', content: 'FAQ' },
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
      'Используются прочные литые пряжки из нержавеющей стали, либо латуни. Все ремни изготавливаются конкретно под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: '',
  },
  beltFireman: {
    ru: [
      'Ремень Fireman',
      'Характерная особенность этого ремня – быстросъемная пряжка.  Этот тип пряжки первоначально использовался для установки свернутых пожарных рукавов в 19 веке в Великобритании. Позже стала популярна в качестве пряжки для ремня.',
      'Сам ремень изготавливается из толстой 100% натуральной кожи. Полотно ремня  под эту пряжку можно подобрать практически из любой кожи в наличии. На фото предсталена кожа комбинированного дубления в толщине 3,8 мм.',
      'Все ремни изготавливаются конкретно под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: [],
  },
  beltItaly: {
    ru: [
      'Представляю вам ремень, который станет неотъемлемым аксессуаром и функциональным элементом вашего стиля. Изготовлен из толстой 100% натуральной кожи растительного дубления, произведенной в Италии. Мы используем только плотную кожу, вырезанную из одного цельного куска, что делает его отличным выбором по сравнению со склеенными или изготовленными из спрессованной кожи ремнями, которые быстро изнашиваются.',
      'Особая внимательность уделяется выбору качественных материалов. Литая пряжка из нержавеющей стали или латуни добавляет ремню солидности и элегантности, подчеркивая его превосходное качество.',
      'Что делает каждый ремень по-настоящему уникальным, так это то, что он изготавливается индивидуально под размер каждого заказчика. Это гарантирует идеальную посадку и комфорт при ношении. Вы можете указать свой размер при заказе, и ремень будет изготовлен точно по вашим индивидуальным требованиям. Мы придерживаемся высоких стандартов качества и стиля, чтобы каждый наш ремень стал надежным и долговечным аксессуаром, который прослужит вам долгие годы.',
      'Этот ремень ручной работы из толстой натуральной кожи и с литой пряжкой станет неотъемлемым элементом вашего стиля и долговечным аксессуаром. Он подчеркнет вашу индивидуальность и добавит элегантности к вашему образу. Будьте уверены, что каждый ремень изготовлен с любовью и вниманием к деталям, чтобы удовлетворить самые высокие стандарты качества и стиля.',
    ],
    en: [],
  },
  beltGrange: {
    ru: [
      'Яркий, броский, уникальный! Так можно охарактеризовать этот ремень. Второго такого не найти! Это связано с особенной технологией покраски, которая не позволяет создать 2 абсолютно идентичных ремня.',
      'Ремень как всегда выполнен из толстой 100% натуральной бычьей кожи. Литая, тяжелая фурнитура никогда не подведет и прослужит долгие десятилетия.',
      'Изготавливаю все ремни под ваш размер. Переходите по ссылке и узнайте как определить размер ремня. ',
    ],
    en: [],
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
  walletM3xCompact: {
    ru: [
      'Компактный Кошелек бифолд, изготовленный из натуральной кожи. Этот кошелек отличается высоким качеством и вниманием к деталям благодаря ручной работе.',
      'Внутри кошелька вы найдете три удобных кармана для карт, которые обеспечат безопасное и организованное хранение ваших пластиковых карт, визиток или других важных документов. Эти карманы обеспечивают быстрый и легкий доступ к нужной карте в любой момент. ',
      'Кошелек также оснащен монетницей, которая поможет вам удерживать мелочь в одном месте, избегая разбросанных монет в карманах или сумке. Монетница обеспечивает надежное хранение монет и легкий доступ к ним при необходимости.',
      'Натуральная кожа, использованная в изготовлении этого кошелька, гарантирует элегантный внешний вид и высокую прочность.',
      'Будьте уверены, что этот кошелек станет надежным и долговечным аксессуаром, который прослужит вам долгие годы, сохраняя свою функциональность и надежность.',
      'Размеры: 8,5* 11,5 см',
    ],
    en: [],
  },
  wallet4h: {
    ru: [
      'Если вы избегаете монет и цените компактность,  используете регулярно несколько пластиковых карт – то эта модель для вас. Имеет 4 отделения для карт и отделение для купюр. ',
      'Внимание! Максимальная ширина купюр удобно помещающихся в данную модель – 75мм, что позволяет удобно хранить валюту большинства стран мира, однако Евро в номиналах от 50 до 500 евро будут выступать за пределы бумажника. Учитывайте пожалуйста это при выборе данной модели.',
    ],
    en: [],
  },
  walletZipM4: {
    ru: [
      'Компактный кошелек с внешней монетницей на молнии. Имеет 4 отделения для карт, отделение для купюр, внешнюю монетницу на молнии ',
      'Внимание! Максимальная ширина купюр удобно помещающихся в данную модель – 75мм, что позволяет удобно хранить валюту большинства стран мира, однако Евро в номиналах от 50 до 500 евро будут выступать за пределы бумажника. Учитывайте пожалуйста это при выборе данной модели.',
    ],
    en: [],
  },
  giftSetBeltDocholder: {
    ru: [
      'Подарочный набор аксессуаров из кожи – отличный способ сделать запоминающийся оригинальный подарок, который точно оценят по достоинству!',
      'В данном наборе представлены ремень и докхолдер из натуральной кожи. Стильные кожаные изделия прослужат долго и станут любимыми аксессуарами в повседневных делах, поездках и путешествиях, подчеркивая отличный вкус владельца.',
      'На изделия из подарочного набора можно добавить персонализацию, например именное тиснение. Тиснение имени или инициалов владельца сделает подарок более личным и оставит долгую и приятную память о подарке!',
    ],
    en: [],
  },
  walletZM42x: {
    ru: ['Имеет 4 кармана для карт, 2 скрытых отделения и монетницу с внешней стороны.'],
    en: [],
  },
  woodenNotebook: {
    ru: [
      'Этот блокнот формата А5 станет стильным и функциональным спутником для ваших записей, мыслей и идей.',
      'Деревянная обложка придает ему особый шарм и неповторимый внешний вид. Корешок из натуральной кожи добавляет роскоши и утонченности этому аксессуару.',
      'Кольцевой механизм с разъемными металлическими кольцами добавляет функциональности, обеспечивает гибкость в использовании. Он позволяет вставлять новые листы и убирать не нужные. После того как чистые листы закончатся (120 листов в комплекте) новый бумажный блок можно без проблем купить в ближайшем канцелярском магазине, ну а старый отправить на переработку :)',
      'Блокнот на 100 % экологичен и придется по вкусу любителям всего натурального.  Запах дерева  в сочетании с  натуральной кожей не смогут оставить равнодушным никого.',
      'Блокнот в деревянной обложке -  отличный и оригинальный подарок для себя, близких, коллег. Он покорит вас с первого знакомства!',
    ],
    en: [''],
  },
  miniPhotoalbum: {
    ru: [
      'Мини-фотоальбом с деревянной обложкой, оригинальный элемент для вашего интерьера.',
      'Сохраняет воспоминания.',
      'Дарит радость',
      'Размер фото 10*15. Можно вклеивать с помощью двухстороннего скотча, либо любым клеем для бумаги.',
      '100% экологичен и необычен!',
    ],
    en: [''],
  },
  bagTote: {
    ru: [
      'Сумка тоут - идеальное решение для тех, кто ищет стиль и функциональность. Она способна вместить все необходимые предметы вашего повседневного использования. Независимо от того, нужно ли вам перенести ноутбук, кошелек, ключи, ежедневник или даже небольшие вещи для легкого пикника, эта сумка справится с задачей. Помимо этого если вы забежите с ней в магазин за небольшими покупками, вам больше не понадобится пластиковый пакет.',
      'Изготовленная из натуральной кожи, эта сумка обладает не только элегантным внешним видом, но и непревзойденной прочностью. Высокое качество кожи обеспечивает долговечность и долгий срок службы сумки. Кроме того, каждая сумка изготавливается вручную, что придает ей особый шарм и уникальность.',
      'Будьте уверены, что сумка тоут из натуральной кожи станет надежным и стильным спутником в вашей повседневной жизни. Независимо от того, куда вы направляетесь или что нужно взять с собой, эта сумка будет служить вам верой и правдой, подчеркивая вашу индивидуальность и стиль.',
    ],
    en: [''],
  },
  crossbodyVeg: {
    ru: [
      'Кроссбоди – сумка ручной работы, которая станет стильным и функциональным дополнением к вашему гардеробу. Эта сумка выполнена из высококачественной итальянской кожи растительного дубления, тактильно приятная как внутри, так и снаружи. С возрастом эта сумка будет приобретать красивую патину и станет еще привлекательнее ',
      'Обладает идеальным размером, чтобы вместить все необходимое, при этом оставаясь компактной и удобной в использовании. Она оснащена регулируемым ремешком, который позволяет носить ее на плече или через тело, обеспечивая максимальный комфорт и свободу движений.',
      'Это идеальный выбор для тех, кто ценит высокое качество, элегантность и индивидуальность. Она станет вашим надежным спутником в повседневной жизни и придаст вашему образу особый шарм и стиль.',
    ],
    en: [''],
  },
  bagChild: {
    ru: [
      'Детская сумка из кожи, подойдет для делей в возрасте 3-8 лет. Отлично смотрися в сочетании со "взрослой" сумкой тоут',
    ],
    en: [''],
  },

  forDocument: {
    ru: [
      'Этот кожаный ремень выдержит все испытания, которые преподнесет вам жизнь. Наш ремень изготовлен из толстой 100% натуральной кожи. Мы используем только плотную кожу вырезанную из одного цельного куска, никаких склеек, один толстый сплошной кусок кожи, что делает его отличным выбором по сравнению со склеенными либо изготовленных из спрессованной кожи ремнями, которые быстро изнашиваются.',
      'Мы так же используем прочные литые пряжки из нержавеющей стали, либо латуни. Мы делаем все ремни под ваш размер. Переходите по ссылке и узнайте как определить размер ремня.',
    ],
    en: [''],
  },
  cardholder: {
    ru: [
      'Компактный картхолдер легко помешающийся в карман шорт и не вызывающий лишнюю тяжесть. Отлично подходит для легких прогулок. Вмещает несколько карт и немного наличных сложенных вчетверо.',
    ],
    en: '',
  },
  cardholderC: {
    ru: [
      'Компактный и функциональный картхолдер - имеет 4 отделения для карт. А специальный центральный кармашек позволят удобно размешать сложенные пополам купюры. ',
      'Удобен для повседневного использование если вам не нужны монеты и вы цените компактность и функциональность.',
    ],
    en: '',
  },
  cardholderCM: {
    ru: [
      'Компактный и функциональный картхолдер - имеет 3 отделения для карт, монетницу. А специальный центральный кармашек позволят удобно размешать сложенные пополам купюры. ',
      'Удобен для повседневного использование если вы цените компактность и функциональность, являестя полноценной заменой классического кошелька',
    ],
    en: '',
  },
  cardholderD: {
    ru: [
      'Компактный картхолдер имеющий 3 внешних кармана для карт и визиток и 2 внутренних, в которые можно положить наличные либо что нибудь еще. ',
    ],
    en: '',
  },
  longer6x: {
    ru: ['Лонгер – имеет 2 больших полноразмерных отделения для наличных, 6 карманов для карт.'],
    en: '',
  },
  longerM9x: {
    ru: [
      'Самая прокачанная модель лонгера – имеет 2 больших полноразмерных отделения для наличных, 9 карманов для карт и огромную монетницу на молнии.',
    ],
    en: '',
  },
  longerWomM4x: {
    ru: [
      'Изысканный женский кошелек, имеющий отделение для купюр, 5 отделения для карт и отделение на молнии.',
    ],
    en: '',
  },
  keychainSimple: {
    ru: [
      'Стильный брелок для удобства использования и украшения вашей связки с ключами. Также можно прикрепить к автоключу.',
      'По вашему желанию, на изделиях можно выгравировать инициалы, номер телефона, фразу или девиз, а также персональные логотипы компаний (доступно при заказе от 50 шт, стоимость уточняйте при заказе).',
    ],
    en: '',
  },
  keychainMultiA: {
    ru: [
      'Связка ключей встречающаяся в ограниченном пространстве с  телефоном, ноутбуком либо другой дорогостоящей техникой или предметов с лакокрасочным покрытием– является настоящим холодным оружием.',
      'Поэтому для защиты дорогих вам вещей и для упрощения поиска ключей  предлагаю вашему вниманию  - ключницу.  За карабин её можно пристегнуть к шлейке джинсов и положить в задний карман. Либо этот карабин можно использовать для крепления ключницы в любом другом удобном для вас месте. ',
    ],
    en: '',
  },
  glassescaseA: {
    ru: [
      'Стильный и оригинальный  кожаный футляр для очков  подойдет как для женщины так и для мужчины и послужит надежной защитой для линз солнечных очков, очков для зрения или для работы на компьютере. ',
      'Футляр удобный  в использовании  а его  отстегиваемый на кнопках ремешок позволяет крепить  его куда угодно ( на шлейку рюкзака в путешествиях, крючок для одежды  в гардеробе) , а также делает этот футляр удобным при переноске. Эта очечница станет по настоящему любимым аксессуаром для ваших очков.',
      'Если вам не нужен ремешок с карабином, данную модель можно изготовить без него, всего лишь напишите об этом.',
    ],
    en: '',
  },

  passportCover: {
    ru: [
      'Обложка на паспорт из натуральной кожи - это идеальный способ защитить ваш паспорт и придать ему стильный и уникальный вид. Каждая обложка изготовлена вручную из высококачественной натуральной кожи, что обеспечивает прочность и долговечность изделия.',
      'Что касается цветовой гаммы, то могу предложить широкий выбор цветов кожи для обложки на паспорт. Вы можете выбрать тот, который лучше всего отражает вашу индивидуальность и соответствует вашему стилю. От классических черных и коричневых оттенков до ярких и модных цветов - у нас есть варианты для каждого вкуса.',
      'Чтобы согласовать выбор цвета или задать любые другие вопросы, не стесняйтесь  - пишите в личные сообщения. Всегда готов помочь вам с выбором и обсудить все детали, чтобы ваша обложка на паспорт была именно такой, какой вы ее представляете.',
      'Подчеркните свою индивидуальность и защитите свой паспорт с помощью элегантной обложки из натуральной кожи, выполненной вручную. Это не только практичный аксессуар, но и отличное дополнение к вашему стилю и образу жизни.',
    ],
    en: [],
  },
  docholder: {
    ru: [
      'Докхолдер - стильный и практичный аксессуар. Этот компактный органайзер для документов способен вместить самые необходимые документы и карточки, включая паспорт, водительское удостоверение, документы на автомобиль и страховку, а также до 6 пластиковых карт. Если вы часто пользуетесь паспортом и водите автомобиль он может стать идеальной заменой вашему обычному портмоне.',
      'Изготовленное из натуральной кожи и прошито вручную толстой нитью, это изделие гарантированно обладает высоким качеством, прочностью и прослужит вам долгие годы.',
      'Внутри докхолдера вы найдете удобные отсеки для организации ваших документов. Паспорт, водительское удостоверение и документы на автомобиль легко поместятся в специальных карманах, обеспечивая безопасное и удобное хранение. Кроме того, дополнительные отделения предназначены для размещения до 6 пластиковых карт, чтобы вы всегда имели быстрый доступ к ним.',
      'Но это еще не все! В докхолдере также имеется кармашек для нескольких купюр наличности, чеков или даже фотографий. Это позволит вам держать все важные материалы в одном месте, обеспечивая легкий доступ и организацию.',
      'Не упустите возможность приобрести этот функциональный и элегантный органайзер для документов. Он не только поможет вам организовать ваши документы и карточки, но и станет стильным и надежным спутником в вашей повседневной жизни.',
    ],
    en: [],
  },
};
