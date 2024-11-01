<!-- Загальна інформація: Мета проєкту – створити фронтенд частину веб-додатку для
компанії "TravelTrucks", яка займається орендою кемперів.  -->

<!-- Веб-додаток повинен
включати кілька сторінок, серед яких домашня сторінка, сторінка каталогу і
сторінка окремого кемпера з відгуками і формою для бронювання. -->

<!-- Для реалізації функціоналу роботи з оголошеннями про кемпери у вашому
фронтенд-додатку, використовуйте готовий бекенд API, який доступний за
посиланням: https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers -->

Основні його ендпоінти: 
GET /campers для отримання всіх оголошень (можна додати
параметри для фільтрації) 

GET /campers/:id для отримання деталей оголошення за
його ID

Вимоги до проєкту:

<!-- 1. Фреймворк та бібліотеки: -->
   <!-- Робота виконана з використанням бандлеру Vite на React. -->

   <!-- Redux для управління станом. -->

   <!-- React Router для маршрутизації. -->

   <!-- Для запитів використовується бібліотека Axios. -->

   <!-- Будь-яка CSS бібліотека на вибір (наприклад, CSS модулі, styled-components, MUI тощо). -->

2. Основні сторінки:
   <!-- Домашня сторінка: повинна містити банер з основним закликом до дії. -->
   
   Каталог: сторінка, де відображаються всі доступні транспортні засоби з
   можливістю фільтрації за певними критеріями (локація, тип транспорту,
   наявність кондиціонера, кухні тощо) 
   
   та можливістю додати кемпер до обраних.
   
   Сторінка окремого кемпера: сторінка з детальним описом обраного кемпера,
   галереєю фотографій, відгуками користувачів, формою для бронювання. Для опиcу
   характеристик використовуй наступні властивості, якщо вони присутні на
   данному кемпері: transmission, engine, AC, bathroom, kitchen, TV, radio,
   refrigerator, microwave, gas, water. 
   
   Для опиcу деталей використовуй наступні
   властивості: form, length, width, height, tank, consumption.

<!-- 3. Маршрутизація: -->
<!-- / - Домашня сторінка. -->
<!-- /catalog - Сторінка каталогу. -->
<!-- /catalog/:id- Сторінка окремого кемпера. -->

4. Стан додатку: Використовувати Redux для управління станом. Створити
   глобальний стан для зберігання:
   <!-- - списку транспортних засобів,  -->
   - стану фільтрів 
   - списку обраних. 
   
   При відправці запиту за фільтрованими транспортними засобами
   важливо попередньо скинути попередні результати пошуку, щоб забезпечити
   актуальність та точність відображуваних даних відповідно до нових критеріїв
   фільтрації.

5. Функціональні вимоги:
   <!-- Перехід на сторінку каталогу: користувач повинен мати можливість натиснути на кнопку "View Now" на головній сторінці, щоб перейти на сторінку каталогу. -->

   Фільтрація транспортних засобів: користувач повинен мати можливість
   фільтрувати транспортні засоби за: локацією (текстове поле) типом кузова
   (може бути обрано один тип кузова) наявністю кондиціонера, кухні, та іншими
   критеріями (може бути обрано декілька критеріїв). 
   
   Обране: користувач повинен
   мати можливість додавати транспортні засоби до списку обраних. Список обраних
   кемперів має зберігатись при оновленні сторінки. 
   
   <!-- Ціна оренди має бути
   прописана одним значенням (наприклад, 8000). В UI - виведено через кому
   (8000,00).  -->
   
   <!-- Перехід на сторінку деталей: користувач повинен мати можливість
   натиснути на кнопку "Show more" на картці транспортного засобу на сторінці
   каталогу, щоб перейти в новій вкладці браузера на сторінку з детальним описом
   цього транспортного засобу.  -->
   
   <!-- Довантаження карток: на сторінці каталогу повинна
   бути кнопка "Load More",  -->
   
   при кліку на яку завантажуються додаткові картки
   транспортних засобів з урахуванням обраних фільтрів. 
   
   Відгуки: на сторінці
   окремого кемпера повинні відображатися відгуки інших користувачів, які
   оцінюють кемпер за п'ятизірковою шкалою. 
   
   Форма бронювання: користувач повинен
   мати можливість забронювати кемпер, заповнивши форму на сторінці окремого
   кемпера. Результатом вдалої відправки форми має бути нотифікація про вдале
   бронювання.

6. Дизайн: Дотримуватись наданого макету. Верстка повинна бути виконана для
   десктопної версії. Адаптивність можна реалізувати за бажанням.

7. Розробка:
   <!-- Використовувати компонентний підхід. -->
   <!-- Дотримуватись принципу DRY (Don't Repeat Yourself). -->
   <!-- Писати чистий та читабельний код з коментарями там, де це необхідно. -->
   <!-- Проєкт задеплоєний (на vercel.com або netlify.com) -->

Інші критерії оцінки виконаного ТЗ: Оформлений head сайту Відсутні помилки в
консолі Код відформатований Валідна розмітка Відсутні зайві файли в репозиторії
Описана інструкція по запуску проєкту в файлі README.md Усі зміни закомічені зі
зрозумілими повідомленнями При асинхронних запитах є Loader Коректно працююча
маршрутизація на живій сторінці vercel.com/netlify.com Формат оцінювання:
