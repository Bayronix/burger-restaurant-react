import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "Flame & Bun",
          subtitle: "Find the Nearest Restaurant or Order Delivery",
          intro: "Looking for delicious food nearby? Or maybe you need a quick meal for takeout or delivery? Flame & Bun has you covered! We offer a wide variety of flame-grilled dishes, including our famous burgers, crispy chicken strips, juicy steaks, and more. You can find us in many cities across Poland, including Warsaw, Łódź, Kraków, Poznań, and Wrocław. Pick the nearest location and order your favorite dishes for pickup or delivery right to your doorstep!",
          deliveryTitle: "Flame & Bun Delivery - Order Online, Fast and Easy",
          deliveryIntro: "Don’t have time to visit our restaurant? No problem! With our delivery service, you can enjoy Flame & Bun at home or the office. Place your order online, and we’ll bring it right to you. Our menu is a feast for meat lovers, featuring mouthwatering burgers, combo meals, and desserts. Plus, don’t miss out on our exclusive promotional offers available through our website or app!",
          pickupTitle: "Order and Pick Up at Your Convenience",
          pickupIntro: "In a hurry and don’t want to wait in line? Pre-order your meal online and pick it up at the restaurant. Simply choose your favorite items from our menu, select the nearest Flame & Bun location, and your food will be ready when you arrive. Use our website or the Flame & Bun app to explore our wide selection of burgers, sides, refreshing beverages, and delectable desserts. It's the quickest and most convenient way to enjoy Flame & Bun on the go!",
          qualityStandardsTitle: "Quality Standards",
          qualityStandardsIntro: "At Flame & Bun, we use only the finest ingredients for our dishes. All our steaks, burgers, and other meals are made from carefully selected meats. Our ingredients are fresh, natural, and sourced from local farms, ensuring every bite is a celebration of flavor. We adhere to strict safety and quality standards for your peace of mind.",
          sustainabilityTitle: "Sustainability",
          sustainabilityIntro: "We believe in sustainability and do our best to minimize our environmental footprint. Flame & Bun uses eco-friendly packaging, supports local suppliers, and implements energy-efficient processes in all our restaurants. Our commitment is to make the planet a better place for future generations, starting with small steps we take every day.",
          specialOffersTitle: "Special Offers",
          specialOffersIntro: "Flame & Bun offers a variety of special deals for our customers. Enjoy discounts on your favorite meals when you order through our app or website. Additionally, we offer great combo deals for families and large groups. Don’t miss our seasonal promotions—from limited-edition burgers to unique flavors on the menu.",
          cateringTitle: "Flame & Bun Catering",
          cateringIntro: "Planning an event and want to impress your guests? Flame & Bun catering is your perfect choice! We offer customized menus for corporate events, parties, and celebrations. From juicy steaks to signature burgers, we’ll make sure your guests are impressed.",
          customerServiceTitle: "Customer Service",
          customerServiceIntro: "Our customer service team is ready to assist you with any inquiries. We strive to provide the best experience for every customer. If you have feedback or suggestions, we’re always happy to hear from you. Contact us through our website or social media.",
          franchiseOpportunitiesTitle: "Franchise Opportunities",
          franchiseOpportunitiesIntro: "Join the Flame & Bun family by opening your own restaurant! We offer franchise opportunities nationwide. If you’re interested in growing a business with a well-known brand and are passionate about food, we’re excited to discuss this with you.",
          copyright: "© 2024 Flame & Bun. All rights reserved.",
         
          homePage: "Home Page",
          menu: "Menu",
          reservation: "Reservation",
          comments: "Comments",
          close: "Close",
          aboutUs: {
            exquisiteCuisine: "Exquisite Cuisine",
            bestQualityFood: "Best Quality Food",
            affordableFood: "Affordable Food",
            exquisiteCuisineDescription: "Experience a culinary journey with our expertly crafted dishes made from the finest ingredients.",
            bestQualityFoodDescription: "The quality of our food is excellent! We source our ingredients from the most reputable suppliers.",
            affordableFoodDescription: "The cost of our food depends only on its quantity. The quality is always top-notch!"
          },
          ourHistoryTitle: "Our History",
          ourHistoryDescription: "Like any other unique place, we have our own special story. The idea for the restaurant came unexpectedly to its founders. During a walk in the forest, the creator of our restaurant got stranded hundreds of kilometers away from the nearest town. Far from civilization and communication, they had to improvise and set up a basic living arrangement, sourcing and preparing food for themselves.",
          drinksCount: "93",
          foodCount: "206",
          snacksCount: "71",
          drinksLabel: "Drinks",
          foodLabel: "Food",
          snacksLabel: "Snacks",
          reservationTitle: "Celebrate at one of the finest restaurants.",
          tableReservation: "Table Reservation",
          tableReserved: "Table reserved!",
          welcome: "Welcome to",
          viewLink: " View menu"
        },
      },
      uk: {
        translation: {
          title: "Flame & Bun",
          subtitle: "Знайдіть найближчий ресторан або замовте доставку",
          intro: "Шукаєте смачну їжу неподалік? А може, вам потрібна швидка їжа на винос або доставку? Flame & Bun допоможе вам! Ми пропонуємо широкий асортимент страв на вогні, включаючи наші знамениті бургери, хрусткі курячі палички, соковиті стейки та багато іншого. Ви можете знайти нас у багатьох містах Польщі, зокрема у Варшаві, Лодзі, Кракові, Познані та Вроцлаві. Виберіть найближчу локацію та замовте ваші улюблені страви на винос або доставку прямо до вашого порога!",
          deliveryTitle: "Доставка Flame & Bun - Замовляйте онлайн, швидко та зручно",
          deliveryIntro: "Немає часу відвідати наш ресторан? Немає проблем! З нашою службою доставки ви можете насолоджуватися Flame & Bun вдома або в офісі. Замовте онлайн, і ми доставимо ваше замовлення прямо до вас. Наше меню - це свято для м’ясних гурманів, з апетитними бургерами, комбо-меню та десертами. Плюс, не пропустіть наші ексклюзивні акційні пропозиції, доступні через наш веб-сайт або додаток!",
          pickupTitle: "Замовте та заберіть, коли вам зручно",
          pickupIntro: "У спішці та не хочете стояти в черзі? Замовте вашу їжу онлайн та заберіть її в ресторані. Просто виберіть ваші улюблені страви з нашого меню, оберіть найближчу локацію Flame & Bun, і ваша їжа буде готова, коли ви приїдете. Використовуйте наш веб-сайт або додаток Flame & Bun, щоб переглянути наш широкий вибір бургерів, гарнірів, освіжаючих напоїв та смачних десертів. Це найшвидший та найзручніший спосіб насолодитися Flame & Bun на ходу!",
          qualityStandardsTitle: "Стандарти Якості",
          qualityStandardsIntro: "У Flame & Bun ми використовуємо лише найкращі інгредієнти для наших страв. Усі наші стейки, бургери та інші страви готуються з ретельно відібраного м'яса. Наші інгредієнти свіжі, натуральні та доставляються з місцевих ферм, гарантуючи, що кожен укус є святом смаку. Ми дотримуємося суворих стандартів безпеки та якості для вашого спокою.",
          sustainabilityTitle: "Сталий Розвиток",
          sustainabilityIntro: "Ми віримо в сталий розвиток і робимо все можливе, щоб мінімізувати наш екологічний слід. Flame & Bun використовує екологічно чисті упаковки, підтримує місцевих постачальників і впроваджує енергоефективні процеси в усіх наших ресторанах. Наше зобов’язання – зробити планету кращим місцем для майбутніх поколінь, починаючи з невеликих кроків, які ми робимо щодня.",
          specialOffersTitle: "Спеціальні Пропозиції",
          specialOffersIntro: "Flame & Bun пропонує безліч спеціальних пропозицій для наших клієнтів. Отримуйте знижки на улюблені страви, коли замовляєте через наш додаток або веб-сайт. Крім того, ми пропонуємо вигідні комбо-меню для сімей та великих компаній. Не пропустіть наші сезонні акції – від обмежених видань бургерів до унікальних смаків у меню.",
          cateringTitle: "Кейтеринг Flame & Bun",
          cateringIntro: "Плануєте захід і хочете справити враження на своїх гостей? Кейтеринг Flame & Bun – це ваш ідеальний вибір! Ми пропонуємо індивідуальні меню для корпоративних заходів, вечірок та свят. Від соковитих стейків до фірмових бургерів – ми подбаємо про те, щоб ваші гості були вражені.",
          customerServiceTitle: "Обслуговування Клієнтів",
          customerServiceIntro: "Наша команда з обслуговування клієнтів готова допомогти вам з будь-якими запитаннями. Ми прагнемо забезпечити найкращий досвід для кожного клієнта. Якщо у вас є відгуки або пропозиції, ми завжди раді почути вас. Зв'яжіться з нами через веб-сайт або наші соціальні мережі.",
          franchiseOpportunitiesTitle: "Можливості Франшизи",
          franchiseOpportunitiesIntro: "Приєднуйтесь до сім’ї Flame & Bun, відкривши свій власний ресторан! Ми пропонуємо можливості для франшизи по всій країні. Якщо ви зацікавлені в розвитку бізнесу з відомим брендом і готові ділитися нашою пристрастю до їжі, ми раді обговорити це з вами.",
          copyright: "© 2024 Flame & Bun. Усі права захищено.",
          menu: "Меню",
          homePage: "Головна Сторінка",
          reservation: "Резервування", 
          comments: "Коментарі",
          close: "Закрити", 
          aboutUs: {
            exquisiteCuisine: "Вишукана кухня",
            bestQualityFood: "Якісна їжа",
            affordableFood: "Доступна їжа",
            exquisiteCuisineDescription: "Відчуйте кулінарну подорож з нашими майстерно приготованими стравами з найкращих інгредієнтів.",
            bestQualityFoodDescription: "У нас якісна їжа Ми беремо інгредієнти тільки у перевірених постачальників",
            affordableFoodDescription: "Вартість нашої їжі залежить лише від її кількості. Якість завжди на висоті!"
          },
          ourHistoryTitle: "Наша Історія",
          ourHistoryDescription: "Як і у будь-якого іншого унікального місця, у нас є своя особлива історія. Ідея ресторану прийшла несподівано до його засновників. Під час прогулянки лісом, творець нашого ресторану застряг за сотні кілометрів від найближчого міста. Далеко від цивілізації та зв’язку, їм довелося імпровізувати і організувати базові умови життя, добуваючи та готуючи їжу для себе.",
          drinksCount: "93",
          foodCount: "206",
          snacksCount: "71",
          drinksLabel: "Напої",
          foodLabel: "Їжа",
          snacksLabel: "Закуски",
          reservationTitle: "Святкуйте в одному з найкращих ресторанів.",
          tableReservation: "Резервування столика",
          tableReserved: "Столик заброньовано!",
          welcome: "Ласкаво просимо до",
          viewLink: " Переглянути меню"
        },
      },
    },
    lng: "uk", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

