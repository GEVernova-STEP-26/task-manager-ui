# Task Manager – Full Stack Application

A full-stack Task Manager application built using **Spring Boot** (backend) and **HTML/CSS/JavaScript** (frontend).

This project demonstrates REST API development, layered architecture, and frontend-backend integration.

---

## Features

* Create, view, and delete tasks
* Assign tasks to users
* Categorize tasks
* Set priority levels
* Due date management
* RESTful API design
* Global exception handling
* CORS configuration
* Swagger API documentation
* Dynamic frontend integration using Fetch API

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* PostgreSQL
* Swagger (SpringDoc OpenAPI)

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

---

## Project Structure

### Backend

```
controller/
service/
repository/
model/
dto/
exception/
config/
```

### Frontend

```
task-manager-ui/
 ├── index.html
 ├── style.css
 └── script.js
```

---

## ⚙️ How to Run

### 1️⃣ Backend

Configure PostgreSQL in `application.properties`.

Run:

```
mvn spring-boot:run
```

Backend will start at:

```
http://localhost:8080
```

Swagger UI:

```
http://localhost:8080/swagger-ui.html
```

---

### 2️⃣ Frontend

Open:

```
task-manager-ui/index.html
```

in browser (or use Live Server).

Make sure backend is running before opening frontend.

---

## 🔗 API Base URL

```
http://localhost:8080/api
```
