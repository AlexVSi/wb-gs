# WB Tariffs Service

Сервис для:

- 📥 Ежечасного получения тарифов коробов из Wildberries API  
- 🗄 Сохранения данных в PostgreSQL (с накоплением по дням и UPSERT)
- 📊 Регулярного обновления N Google Sheets (лист `stocks_coefs`)  
- 🔢 Сортировки данных по коэффициенту доставки (ASC)

---

## 🛠 Используемые технологии

- Node.js 20
- TypeScript
- tsx (dev)
- PostgreSQL 15
- knex.js
- Axios
- node-cron
- Google Sheets API (Service Account)
- Docker + docker-compose

---

## 📦 Архитектура

- Модульная структура (services / repository / mapper)
- Batch UPSERT через `ON CONFLICT`
- Автоматический запуск миграций
- Cron-задачи:
  - каждый час — синхронизация с WB
  - каждые 15 минут — обновление Google Sheets

---

## ⚙ Переменные окружения

Создать `.env` на основе `.env.example`:
```
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=postgres

PORT=3000

WB_API_TOKEN=token

GOOGLE_SERVICE_EMAIL=email
GOOGLE_PRIVATE_KEY=key
GOOGLE_SPREADSHEET_IDS=id,id
```

## 🚀 Запуск проекта

### Запуск через Docker (основной способ)

```bash
git clone https://github.com/AlexVSi/wb-gs
cd wb-gs
docker compose up --build
```