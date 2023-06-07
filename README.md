# E-commerce Backend

This is the backend application for an e-commerce website. It provides an API for managing products, categories, and tags. The application is built using Node.js, Express.js, and Sequelize ORM.

## Table of Contents

- Installation
- Usage
- API Endpoints
- Database Schema
- Contributing

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository: git clone <repository-url>
2. Install the dependencies: npm install
3. Set up the database connection in the config/connection.js file.
4. Seed the database with sample data: npm run seed
5. Start the server: npm start

## Usage

After installing and starting the server, you can use a tool like Postman to interact with the API endpoints. The API provides CRUD operations for managing products, categories, and tags. Refer to the API Endpoints section for detailed information on each endpoint.

## API Endpoints

The following API endpoints are available:

- GET /api/categories: Get all categories and their associated products.

- GET /api/categories/:id: Get a specific category by its ID and its associated products.

- POST /api/categories: Create a new category.

- PUT /api/categories/:id: Update a category by its ID.

- DELETE /api/categories/:id: Delete a category by its ID.

- GET /api/products: Get all products and their associated category and tags.

- GET /api/products/:id: Get a specific product by its ID and its associated category and tags.

- POST /api/products: Create a new product.

- PUT /api/products/:id: Update a product by its ID.

- DELETE /api/products/:id: Delete a product by its ID.

- GET /api/tags: Get all tags and their associated products.

- GET /api/tags/:id: Get a specific tag by its ID and its associated products.

- POST /api/tags: Create a new tag.

- PUT /api/tags/:id: Update a tag by its ID.

- DELETE /api/tags/:id: Delete a tag by its ID.

## Database Schema

The database schema consists of the following tables:

- categories: Stores information about the categories.
- products: Stores information about the products.
- tags: Stores information about the tags.
- product_tag: A junction table that associates products with tags.
- Refer to the models directory for the Sequelize models and their relationships.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## Walkthrough Video
[https://drive.google.com/file/d/1FrHDyjb4YFxW2bRfqCu3Su5yeyayoI7k/view]