# cashew-store-server
# MK Cashews Store

A full-stack e-commerce web app for selling cashews online. Customers can browse cashew varieties, search products, sign in and add items to a cart. The backend provides a REST API backed by MongoDB.

**Live site:**  "https://cashew-store-zeta.vercel.app/"

## Tech Stack

- **Frontend:** React (in the `client` folder), hosted on Vercel
- **Backend:** Node.js and Express, hosted on Render
- **Database:** MongoDB Atlas (Mongoose)

## Features

- Browse and search cashew varieties
- User sign in
- Shopping cart
- Order management
- REST API for products, users and orders

## Project Structure

```
cashew-store-server/
├── client/            # React frontend
├── models/            # Mongoose models (Product, User, Order)
├── routes/            # Express API routes
├── server.js          # Express server entry point
├── seed.js            # Adds sample products to the database
├── package.json
└── .env.example       # Example environment variables
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- A MongoDB Atlas account and cluster

### 1. Clone the repository

```
git clone https://github.com/deepadharshini96/cashew-store.git
cd cashew-store-server
```

### 2. Set up environment variables

Copy `.env.example` to `.env` and add your MongoDB connection string:

```
MONGO_URI=your_mongodb_connection_string
```

### 3. Install dependencies

```
npm install
cd client
npm install
cd ..
```

### 4. Add sample products (optional)

```
node seed.js
```

### 5. Run the app

Start the backend:

```
node server.js
```

In a second terminal, start the frontend:

```
cd client
npm start
```

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/products` | Get all products   |

More routes for users and orders are in the `routes` folder.

## Deployment

- **Backend (Render):** set the build command to `npm install` and the start command to `node server.js`. Add `MONGO_URI` under Environment Variables.
- **Frontend (Vercel):** set the root directory to `client`. A `vercel.json` rewrite forwards `/api` requests to the Render backend, so the site works from one link.
- **Database (MongoDB Atlas):** allow network access from `0.0.0.0/0` and make sure the cluster is not paused.

## Notes

- The Render free plan sleeps after about 15 minutes of inactivity, so the first request can take 30-50 seconds.
- MongoDB Atlas free clusters pause after inactivity. Resume the cluster in Atlas if products stop loading.

## Author

Deepa Dharshini
