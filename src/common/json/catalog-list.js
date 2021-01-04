const catalogList = [
  {
    title: 'Пицца с тунцом',
    image: 'http://pizza.vivatalushta.ru/images/pizza/punez.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/400 рублей',
      middle: '40см/700 рублей',
      large: '50см/900 рублей'
    },
    composition: 'тунец, сыр пармезан, соус, оливки, помидоры'
  },
  {
    title: 'Пицца "Маргарита"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/margarita.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/340 рублей',
      middle: '40см/420 рублей',
      large: '50см/560 рублей'
    },
    composition: 'сыр, соус, помидор, зелень'
  },
  {
    title: 'Пицца Вегетарианская',
    image: 'http://pizza.vivatalushta.ru/images/pizza/vegani.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/340 рублей',
      middle: '40см/480 рублей',
      large: '50см/690 рублей'
    },
    composition: 'сыр, соус, помидор, кукуруза, болгарский перец, грибы, брокколи, маслины'
  },
  {
    title: 'Пицца 4 сыра',
    image: 'http://pizza.vivatalushta.ru/images/pizza/4sira.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/440 рублей',
      middle: '40см/680 рублей',
      large: '50см/800 рублей'
    },
    composition: 'пармезан, моцарелла, гауда, эдам, соус'
  },
  {
    title: 'Пицца "Грибная"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/gribi.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/355 рублей',
      middle: '40см/520 рублей',
      large: '50см/680 рублей'
    },
    composition: 'сыр, соус, помидор, шампиньоны, зелень, болгарский перец'
  },
  {
    title: 'Пицца "Антонио"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/margarita.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/365 рублей',
      middle: '40см/520 рублей',
      large: '50см/730 рублей'
    },
    composition: 'сыр, соус, салями, грибы, болгарский перец, кукуруза, зелень'
  },
  {
    title: 'Пицца Классика',
    image: 'http://pizza.vivatalushta.ru/images/pizza/vegani.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/380 рублей',
      middle: '40см/510 рублей',
      large: '50см/650 рублей'
    },
    composition: 'сыр, соус, салями, ветчина, грибы, помидор, сыр'
  },
  {
    title: 'Пицца Пикассо',
    image: 'http://pizza.vivatalushta.ru/images/pizza/picaso.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/360 рублей',
      middle: '40см/520 рублей',
      large: '50см/665 рублей'
    },
    composition: 'сыр, соус, салями, буженина, помидоры, кукуруза'
  },
  {
    title: 'Пицца "Прошуто"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/proshito.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/365 рублей',
      middle: '40см/520 рублей',
      large: '50см/730 рублей'
    },
    composition: 'сыр, соус, помидор, ветчина, грибы'
  },
  {
    title: 'Пицца "Курица с грибами"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/kashagribi.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/380 рублей',
      middle: '40см/580 рублей',
      large: '50см/700 рублей'
    },
    composition: 'сыр, соус, курица, грибы, зелень по желанию'
  },
  {
    title: 'Пицца "Гавайская"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/gavai.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/350 рублей',
      middle: '40см/580 рублей',
      large: '50см/690 рублей'
    },
    composition: 'сыр, соус, курица или ветчина, ананас'
  },
  {
    title: 'Пицца "Морская"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/morskay.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/470 рублей',
      middle: '40см/750 рублей',
      large: '50см/900 рублей'
    },
    composition: 'мидии, осьминоги, креветки, кальмары, сыр, соус, зелень'
  },
  {
    title: 'Пицца "Микс"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/mix.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/490 рублей',
      middle: '40см/680 рублей',
      large: '50см/900 рублей'
    },
    composition: 'сыр, соус, салями, ветчина, буженина, курица, грибы, сладкий перец'
  },
  {
    title: 'Пицца "Салями"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/salami.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/350 рублей',
      middle: '40см/510 рублей',
      large: '50см/650 рублей'
    },
    composition: 'сыр, соус, салями, маслины'
  },
  {
    title: 'Пицца "С сёмгой"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/ssemgoi.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/460 рублей',
      middle: '40см/740 рублей',
      large: '50см/900 рублей'
    },
    composition: 'сыр, соус, оливки, сёмга, креветки'
  },
  {
    title: 'Пицца "Пеперони"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/peperoni.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/340 рублей',
      middle: '40см/490 рублей',
      large: '50см/650 рублей'
    },
    composition: 'сыр, соус, перерони, болгарский перец'
  },
  {
    title: 'Пицца "Vivat"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/vivat.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/440 рублей',
      middle: '40см/620 рублей',
      large: '50см/800 рублей'
    },
    composition: 'сыр, соус, свинина, буженина, пеперони, грибы, зелень'
  },
  {
    title: 'Пицца "Пармезан"',
    image: 'http://pizza.vivatalushta.ru/images/pizza/parmezan.png',
    price: {
      title: 'Диаметр/цена',
      small: '32см/400 рублей',
      middle: '40см/500 рублей',
      large: '50см/800 рублей'
    },
    composition: 'сыр, соус, свинина, помидор'
  }
]

export default catalogList
