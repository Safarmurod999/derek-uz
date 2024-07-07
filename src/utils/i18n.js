import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        bestsellers: "Bestsellers",
        products: "Products",
        brands: "Brands",
        all_brands: "All brands",
        all_products: "All products",
        faqs: "Frequently asked questions",
        catalogs: "Catalog",
        more: "More",
        about_title: "Lorem ipsum lorem ipsum lorem",
        about_text:
          "Lorem ipsum dolor sit amet consectetur. Nunc varius sit non venenatis \
          dignissim felis phasellus. Lobortis amet nunc aliquam tincidunt purus sed faucibus. ",
        about_right:
          "Lorem ipsum dolor sit amet consectetur. Nunc varius sit non venenatis\
           dignissim felis phasellus. Lobortis amet nunc aliquam tincidunt purus sed faucibus. ",
        header_1: "About us",
        header_2: "Partners",
        header_3: "History",
        header_4: "Team",
        header_5: "Contacts",
        cart: "Cart",
        downloads: "Downloads",
        footer_about:
          "Lorem ipsum dolor sit amet consectetur. Nunc varius sit non venenatis\
            dignissim felis phasellus. Lobortis amet nunc aliquam tincidunt purus sed faucibus.",
        copyright: "All rights reserved",
        filter_1: "All",
        filter_2: "Price",
        filter_3: "Weight",
        search: "Search",
        default: "Order: Default",
        ascending: "Order: Ascending",
        descending: "Order: Descending",
        clear_filter: "Clear filters",
        our_team: "Our Team",
        history_derek: "History of Derek",
        company_text:
          "Lorem ipsum dolor sit amet consectetur. A eget hendrerit neque interdum arcu. Est\
           suspendisse aliquet sagittis sollicitudin quis at vulputate porttitor leo. Vehicula\
           egestas nisl dui phasellus vitae ante tortor fringilla rutrum. Auctor neque urna ipsum\
           netus. Sed leo hac lorem sed facilisis habitasse hendrerit. Bibendum lorem adipiscing\
           quis ac nunc fames sit. Commodo sit purus enim id at ut.",
        statistics_1: "Lorem ipsum dolor sit",
        statistics_2: "Lorem ipsum dolor sit",
        statistics_3: "Lorem ipsum dolor sit",
        phone:'Phone:',
        address:'Address:',
        mail:'Mail:',
        back:'Back',
        total:'Total:',
        name:'Name:',
        clear_cart:'Clear cart',
        articles:'Article',
        color:'Color:', 
        weight:'Weight:',
        order:'Order',
        buy:'Buy',
        add_cart:'Add to cart',
      },
    },
    ru: {
      translation: {
        bestsellers: "БЕСТ СЕЛЛЕР",
        products: "ТОВАРЫ",
        brands: "Бренды",
        all_brands: "Все бренды",
        all_products: "Все товары",
        faqs: "Часто задаваемые вопросы",
        catalogs: "Каталог",
        more: "Подробнее",
        about_title: "Лорем ипсум лорем ипсум лорем",
        about_text:
          "Лорем ипсум долор сит амет консектетур. Нунц вариус сит нон вененатис \
          дигниссим фелис фаселлус. Лобортис амет нунц аликвам тинцидунт пурус сед фауцибус.",
        about_right:
          "Лорем ипсум долор сит амет консектетур. Нунц вариус сит нон вененатис\
           дигниссим фелис фаселлус. Лобортис амет нунц аликвам тинцидунт пурус сед фауцибус.",
        header_1: "О компании",
        header_2: "Партнеры",
        header_3: "История",
        header_4: "Команда",
        header_5: "Контакты",
        cart: "Корзина",
        downloads: "Загрузки",
        footer_about:
          "Лорем ипсум долор сит амет консектетур. Нунц вариус сит нон вененатис\
           дигниссим фелис фаселлус. Лобортис амет нунц аликвам тинцидунт пурус сед фауцибус.",
        copyright: "Все права защищены",
        filter_1: "Все",
        filter_2: "Цена",
        filter_3: "Масса",
        search: "Поиск",
        default: "Порядок: По умолчанию",
        ascending: "Порядок: По возрастанию",
        descending: "Порядок: По убыванию",
        clear_filter: "Сбросить фильтры",
        our_team: "Наша команда",
        history_derek: "История Derek",
        company_text:
          "Лорем ипсум долор сит амет консектетур. А егет хендрерит неяуе интердум арцу. Ест\
           суспендиссе аликвет сагиттис соллицитудин куис ат вулпутате порттитор лео. Вехицула\
           егестас нисл дуи фаселлус витае анте тортор фрингилла рутрум. Ауцтор неяуе урна ипсум\
           нетус. Сед лео хац лорем сед фацилисис хабитассе хендрерит. Бибендум лорем адиписцинг\
           куис ац нунц фамес сит. Коммодо сит пурус еним ид ат ут.",
        statistics_1: "Лорем ипсум долор сит",
        statistics_2: "Лорем ипсум долор сит",
        statistics_3: "Лорем ипсум долор сит",
        phone:'Телефон:',
        address:'Адрес:',
        mail:'Почта:',
        back:'Назад',
        total:'Сумма:',
        name:'Имя:',
        clear_cart:'Очистить корзину',
        articles:'Артикул',
        color:'Цвет:',
        weight:'Масса:',
        order:'Заказать',
        buy:'Купить',
        add_cart:'В корзину',

      },
    },
  },
  lng: "ru", // default language
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
