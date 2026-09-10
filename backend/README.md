# LINDBERG Backend

<div align="center">

![Laravel](https://img.shields.io/badge/Laravel-12-F9322C?style=flat-square&logo=laravel)
![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?style=flat-square&logo=php)
![MySQL](https://img.shields.io/badge/MySQL-Ready-4479A1?style=flat-square&logo=mysql)
![SQLite](https://img.shields.io/badge/SQLite-Local-003B57?style=flat-square&logo=sqlite)

</div>

Lightweight Laravel starter API for the LINDBERG business template. This backend provides sample-ready CRUD-style endpoints for business data such as customers, leads, opportunities, and tasks.

## Stack

- Laravel 12
- PHP 8.2
- SQLite for quick local setup
- MySQL-ready environment configuration

## Run locally

```powershell
cd C:\Users\venus\OneDrive\Desktop\linberg\backend
C:\xampp\php\php.exe artisan serve --host 127.0.0.1 --port 8000
```

Open:

- http://127.0.0.1:8000
- http://127.0.0.1:8000/api/dashboard

## Available sample endpoints

```text
GET /api/dashboard
GET /api/customers
GET /api/leads
GET /api/opportunities
GET /api/tasks
GET /api/search?q=example
```

## Database setup

The backend is configured to work with SQLite for quick local demo usage. It is also ready to be swapped to MySQL by updating the project environment variables in the `.env` file.

## Notes

This is intentionally a lightweight starter backend for a business template, not a full enterprise API. It is ready to extend with additional modules, auth, and production-grade services.
