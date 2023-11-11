# Overview

This simple web app is a bare-bones ecommerce storefront.

My purpose for writing this software is to practice creating MERN applications. This is my first time creating one, so everything is pretty straightforward and uncomplicated.

[Software Demo Video](https://youtu.be/OssJor1vdOk)

# Web Pages

This React app has two pages or "Routes": the product list, and the user's cart. The app has a navbar, allowing users to go between the product list and their cart. This component uses the NavLink element to transfer between the two. Each product component also uses "useNavigate", a react-router hook that acts like Link. When an item is added to cart, the user is sent to their cart using this hook.

# Development Environment

This software was coded entirely in Visual Studio Code.

It was developed in the MERN stack: MongoDb for the database, Express.js for the API, React for the front-end, and Node.JS for the back-end.

The back-end uses the following Node packages: 
* cors
* dotenv
* express
* mongodb

The front-end uses the following additional packages:
* react-router-dom
* bootstrap

# Useful Websites

* [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [MongoDb Mern Stack Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

# Future Work

* When a item is added to cart, check if that productId is already in the cart. If so, update the quantity of that one instead of creating a new document.
* Price functionality in cart, including subtotal and total.
* Secure login for users.