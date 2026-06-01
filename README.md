# FullStack Store App

A full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

This application demonstrates a complete online shopping workflow, including user registration, authentication, product browsing, cart management, order placement, and order tracking.

---

## 🚀 Features

### 🔐 Authentication
- User Registration (Signup)
- User Login
- JWT-based Authentication
- Protected API Routes

### 🛍️ Product Management
- View Available Products
- Product Listing Page
- Dynamic Product Data

### 🛒 Cart Management
- Add Products to Cart
- View Cart Items
- Manage Shopping Cart

### 📦 Order Management
- Place Orders
- View Order History
- Cancel Orders
- Track Order Status

### 💾 Database Management
- Store Users
- Store Products
- Store Orders
- MongoDB Integration using Mongoose

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication

### Database
- MongoDB
- Mongoose

### Version Control
- Git
- GitHub

---

## 📋 Application Workflow

1. User creates an account using the Signup page.
2. User logs into the application.
3. User browses available products.
4. User adds products to the cart.
5. User reviews cart items.
6. User places an order.
7. User views order history under "My Orders".
8. User can cancel an order if needed.

---

## 📂 Project Structure

```text
fullstack-store-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── ...
│
├── .gitignore
├── README.md
└── package-lock.json
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/sureshokp123/fullstack-store-app.git
cd fullstack-store-app
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

Backend runs on:

```text
http://localhost:5000
```

---

## 📸 Application Screens

### User Authentication
- Signup Page
- Login Page

### Shopping Experience
- Product Listing Page
- Cart Page

### Order Management
- Place Order
- My Orders Page
- Cancel Order

---

## 🎯 Learning Outcomes

This project helped me gain practical experience in:

- Building Full Stack Applications
- React.js Component Architecture
- React Router Navigation
- API Integration using Axios
- REST API Development with Express.js
- JWT Authentication & Authorization
- MongoDB Database Design
- Mongoose Data Modeling
- Cart and Order Management Workflows
- Frontend and Backend Integration
- Version Control using Git & GitHub

---

## 🔮 Future Enhancements

- Product Search Functionality
- Product Categories
- User Profile Management
- Admin Dashboard
- Product CRUD Operations
- Payment Gateway Integration
- Order Status Updates
- Responsive UI Improvements

---

## 👨‍💻 Author

**Suresh Kumar**

Full Stack Developer

**Skills:** React.js | Node.js | Express.js | MongoDB | JavaScript | TypeScript

---

⭐ If you found this project useful, feel free to star the repository.