# DjangoPress

**Developed by: Ekrema Shihap**
**Email:** [ekrema0007@gmail.com](mailto:ekrema0007@gmail.com)
**GitHub Repository:** [https://github.com/e1357924680/Django.git](https://github.com/e1357924680/Django.git)

DjangoPress is a full-stack blog management platform built with Django and Django REST Framework on the backend, and React with Bootstrap on the frontend. It features a modular, scalable architecture and includes user authentication, article publishing, and commenting systems.

---

## 📋 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation & Setup](#installation--setup)
* [How to Run](#how-to-run)
* [API Endpoints](#api-endpoints)
* [License](#license)

---

## 🧠 Overview

DjangoPress empowers administrators to manage articles, while allowing users to register, read, and comment. It supports JWT-based secure authentication and implements role-based permissions. This project was designed, built, and tested entirely by **Ekrema Shihap** as part of an academic submission.

---

## 🚀 Features

### Backend:

* Modular Django architecture (apps: `articles`, `comments`, `users`)
* JWT Authentication via `djangorestframework-simplejwt`
* Custom permissions for roles (admin, owner)
* RESTful APIs with filtering and pagination

### Frontend:

* Responsive UI using Bootstrap
* Article search and filtering
* Rich-text article creation (admin only)
* Paginated display
* Login/Register with JWT-based session

---

## 🧰 Tech Stack

### Backend

* Python 3.12+
* Django 5.x
* Django REST Framework
* SQLite (default) or PostgreSQL (via `.env`)
* JWT Authentication

### Frontend

* React
* React Router
* Axios
* Bootstrap

---

## 🛠️ Installation & Setup

### 🔗 Clone the repo

```bash
git clone https://github.com/e1357924680/Django.git
cd Django/backend
```

### ⚙️ Backend Setup

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

# Use SQLite (no need for PostgreSQL setup)
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Visit: [http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/)

### 🌐 Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 API Endpoints (Examples)

* `GET /api/articles/` – List articles
* `POST /api/articles/` – Create article (admin only)
* `POST /api/token/` – Login
* `POST /api/comments/` – Post comment

---

## 📝 License

This project is built for academic purposes and is free to use for learning, inspiration, or contribution. All design, logic, and implementation done by **Ekrema Shihap**.

---

## 📦 Project Execution Summary

### ✅ Backend Commands:

```bash
cd Django/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### ✅ Frontend Commands:

```bash
cd Django/frontend
npm install
npm start
```

---

> 💬 For feedback or questions, contact me at: [ekrema0007@gmail.com](mailto:ekrema0007@gmail.com)
