## SoKOGLAM

https://curious-calf-beret.cyclic.cloud/

## ABOUT 

All of us at SOKOGLAM want to empower and inspire our customers to find their own style and be their own unique and beautiful selves! Our goal is to be the world’s biggest marketplace for Asian and Asia-inspired fashion, beauty and lifestyle products. We believe that by helping customers conveniently and reliably find what they want, SOKOGLAM is the go-to and most-trusted destination online for Asian beauty and fashion products.

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Appendix

Any additional information goes here


## Features

JWT-Based Authentication: Enhance security through JWT-based authentication, ensuring secure user registration and login processes.

Effortless Brands Management: Simplify cafe brand management with intuitive Create, Read, Update, and Delete (CRUD) operations.

Streamlined Category Organization: Efficiently organize products into categories, providing easy-to-use CRUD functionality.

Product Control Made Easy: Seamlessly manage bakery and sweet items using intuitive CRUD operations for optimal control.

Secure Image Uploads: Safely store product images utilizing Firebase Storage, ensuring data integrity and privacy.

Responsive User Experience: Guarantee a smooth experience across devices with a responsive design that adapts to various screen sizes.

Built for Scalability: Crafted with scalability in mind, enabling future expansion and customization for evolving needs.

Robust Backend Handling: Leverage the power of Node.js and Express.js to create a reliable backend, efficiently managing API requests.
## Fronted

React.js: A JavaScript library for building user interfaces.
Context API: Manage application state efficiently.
Axios: Make HTTP requests to the backend.
Firebase: Handle image storage.
## Backend

Node.js: A runtime environment for running JavaScript on the server.
Express.js: A minimalist web application framework for Node.js.
MongoDB: A NoSQL database for storing data.
JWT: JSON Web Tokens for user authentication.

## Authentication

This project uses JWT-based authentication for user registration and login. Users can create accounts, log in, and access protected routes.

## Database

The application utilizes MongoDB as the database for storing information related to brands, categories, products, and user data.

## Image upload

Product images are securely stored using Firebase Storage. This ensures efficient and secure handling of images associated with your bakery and sweet items.

