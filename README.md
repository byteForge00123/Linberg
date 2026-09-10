# LINDBERG

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=flat-square&logo=angular)
![Laravel](https://img.shields.io/badge/Laravel-12-F9322C?style=flat-square&logo=laravel)
![MySQL](https://img.shields.io/badge/MySQL-Ready-4479A1?style=flat-square&logo=mysql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Lucide Angular](https://img.shields.io/badge/Lucide-Angular-18c7ff?style=flat-square&logo=lucide)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat-square&logo=reactivex)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## A quiet table. A thoughtful workflow.

LINDBERG is a premium business management starter built for teams who value clarity, momentum, and deliberate decisions. It blends a polished Angular dashboard experience with a lightweight Laravel backend and MySQL-ready foundation to create a modern operations workspace that feels refined, focused, and genuinely usable from day one.

Inspired by the calm, premium atmosphere of a well-curated dining experience, LINDBERG approaches business operations with the same principles: intentional design, smooth flow, and meaningful detail. The result is a professional starter template for CRM, sales, service, and internal management workflows that feels more like a product than a demo.

From the first glance to the final workflow, the experience is designed to feel elevated — clean, confident, and ready for real-world use.

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
Set-Location "C:\Users\forge\Desktop\linberg\backend"
C:\xampp\php\php.exe artisan serve --host 127.0.0.1 --port 8000
```

### Start the frontend

```powershell
Set-Location "C:\Users\forge\Desktop\linberg\frontend"
& "C:\Users\forge\AppData\Roaming\nvm\nodejs\node-v18.20.8-win-x64\node.exe" ".\node_modules\@angular\cli\bin\ng.js" serve --host 127.0.0.1 --port 4200
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

This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
