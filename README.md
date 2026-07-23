# career.navbahorholding.uz

Карьерный сайт Navbahor Holding на [Nuxt 4](https://nuxt.com/docs).

## Разработка

```bash
npm install
npm run dev      # дев-сервер на http://localhost:3000
```

## Сборка и деплой

Сайт хостится вместе с остальными проектами через PM2 (порт **3050**):

```bash
npm install
npm run build                     # сборка сервера в .output/server
pm2 start ecosystem.config.cjs    # запуск приложения Navbahor-Career
```

## Структура

- `app/pages/index.vue` — единственная страница, собирается из секций
- `app/components/` — секции сайта (шапка, вакансии, FAQ и т.д.)
- `app/assets/css/` — глобальные стили и шрифты
- `shared/types/hh.ts` — типы ответа API hh.ru
- `public/` — статические файлы (изображения, видео)
- `ecosystem.config.cjs` — конфигурация PM2

Вакансии загружаются в браузере с API hh.ru (`employer_id=4893760`),
поэтому список всегда актуален, даже на статическом хостинге.
