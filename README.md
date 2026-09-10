# LINDBERG

<div align="center">

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=flat-square&logo=angular)
![Laravel](https://img.shields.io/badge/Laravel-12-F9322C?style=flat-square&logo=laravel)
![MySQL](https://img.shields.io/badge/MySQL-Ready-4479A1?style=flat-square&logo=mysql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Lucide Angular](https://img.shields.io/badge/Lucide-Angular-18c7ff?style=flat-square&logo=lucide)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat-square&logo=reactivex)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

A professional business management web application.

LINDBERG is a polished business management starter template designed for modern operations, sales, and customer lifecycle workflows. It combines a premium Angular dashboard frontend with a lightweight Laravel backend and MySQL-ready data model, making it suitable as a practical foundation for CRM, business operations, or internal management apps.

## Overview

This project is intentionally built to look and feel like a genuine business software starter rather than a basic CRUD demo. It includes:

- executive dashboard with KPIs, revenue trends, and sales pipeline insights
- customer, lead, and opportunity-focused data structure
- sample-ready Laravel API endpoints for a business template
- Tailwind-powered UI with a professional, minimal dashboard aesthetic
- RxJS-driven global search and responsive UI behavior

## Tech stack

- Frontend: Angular 18
- Backend: Laravel 12
- Database: MySQL-ready, SQLite for local sample/dev setup
- Styling: Tailwind CSS
- Icons: Lucide Angular
- Reactive logic: RxJS
- Runtime: Node 18.20.8, PHP 8.2 via XAMPP

## Project structure

```text
linberg/
├── frontend/          # Angular application
├── backend/           # Laravel starter API
├── README.md          # Project overview
└── package-lock.json  # Local dependency lock
```

## Quick start

### Start the backend

```powershell
Set-Location "C:\Users\venus\OneDrive\Desktop\linberg\backend"
C:\xampp\php\php.exe artisan serve --host 127.0.0.1 --port 8000
```

### Start the frontend

```powershell
Set-Location "C:\Users\venus\OneDrive\Desktop\linberg\frontend"
& "C:\Users\venus\AppData\Roaming\nvm\nodejs\node-v18.20.8-win-x64\node.exe" ".\node_modules\@angular\cli\bin\ng.js" serve --host 127.0.0.1 --port 4200
```

### Open the app

- Frontend: http://127.0.0.1:4200
- Backend API: http://127.0.0.1:8000/api/dashboard

## Sample API endpoints

```text
GET /api/dashboard
GET /api/customers
GET /api/leads
GET /api/opportunities
GET /api/tasks
GET /api/search?q=example
```

## Sample response

```json
{
  "stats": [
    { "title": "Total Customers", "value": "1,284", "change": "+12.5%", "tone": "positive" },
    { "title": "Active Leads", "value": "238", "change": "+8.2%", "tone": "neutral" }
  ],
  "revenue": [
    { "label": "Jan", "value": 18000 },
    { "label": "Feb", "value": 22000 }
  ]
}
```

## Notes

This project is intentionally structured as a professional starter template rather than a classroom CRUD app. The backend is lightweight and extendable, making it suitable for rapid setup and future feature expansion.

## License

MIT
