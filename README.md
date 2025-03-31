# 🎟️ Coding Conf 2025 Ticket Generator

**Coding Conf 2025 Ticket Generator** — a full-stack web application that allows users to generate personalized tickets for the upcoming Coding Conf event in Austin, TX.

## ✨ Features

- 🎫 Ticket generation with unique ticket ID
- 🧾 Email validation & GitHub username input
- 📦 Persistent backend using PostgreSQL
- 💅 Design with TailwindCSS
- 🧪 Input validation using `express-validator`
- 🔐 Email uniqueness check
- 🌐 API built with Express.js


---

## 🚀 Tech Stack

### Frontend:
- React
- TailwindCSS
- React Hook Form
- React Router

### Backend:
- Express.js
- PostgreSQL
- nanoid
- express-validator
- cookie-parser
- CORS

---

## 🛠️ Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Environment Setup

Create a `.env` file with:

PORT = 5000

# Database
DB_HOST = localhost
DB_PORT = 5432
DB_NAME = your_DB_name
DB_USER = your_user_name
DB_PASS = your_DB_password

# JWT config
JWT_SECRET = jwt_secret_password
JWT_EXPIRES_IN = 90d
JWT_COOKIE_EXPIRES_IN = 90


