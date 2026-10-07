# Stock Management System

A modern frontend interface for managing products and monitoring inventory levels.

This project is being developed as an enterprise-style Stock Management System frontend using React, TypeScript, and Vite. The current implementation focuses on the **Product Management** module.

---

## Overview

The Stock Management System provides a centralized interface for managing product information and monitoring current stock levels.

The Product module allows users to:

- View products
- Search products
- Filter products by category
- Filter products by stock status
- Filter products by availability
- View product attributes
- Define inventory thresholds
- Add new products
- Edit product information
- Manage product units
- Add dynamic product attributes

The frontend is currently being developed independently of the backend and database layer.

---

## Current Module

### Product Management

The Product module is the core module currently implemented in the application.

Each product contains:

```text
Product
├── ID
├── Name
├── SKU
├── Category
├── Unit
├── Description
├── Attributes
├── Available Quantity
└── Stock Threshold
