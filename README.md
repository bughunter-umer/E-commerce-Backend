ecommerce-backend/
│── src/

│   ├── config/

│   │   └── db.js

│   │        # Handles Sequelize connection to PostgreSQL.

│   │        # Reads DB credentials from .env (DB_NAME, DB_USER, DB_PASS, etc.)

│   │        # Exports a Sequelize instance used by all models.


│   │
│   ├── models/

│   │   └── User.js

│   │        # Defines User schema with fields:

│   │        # name, email, password, role ("user" | "admin")

│   │        # Includes validations like unique email, password hash.

│   │
│   │   └── Product.js

│   │        # Defines Product schema with fields:

│   │        # name, description, price, stock, categoryId

│   │        # Can have relations with Category (if you add it).

│   │
│   │   └── Order.js

│   │        # Defines Order schema with fields:

│   │        # userId (FK), totalAmount, status ("pending", "shipped", "delivered")

│   │        # Associations: Order belongsTo User, hasMany Products (through OrderItems).

│   │
│   ├── controllers/

│   │   └── authController.js

│   │        # Handles user registration, login, and JWT token generation.

│   │
│   │   └── userController.js

│   │        # Handles user CRUD (get all users, get profile, delete user).

│   │
│   │   └── productController.js

│   │        # Handles CRUD operations for products.

│   │        # Only admins can create, update, delete.

│   │
│   │   └── orderController.js

│   │        # Handles order creation by users and order management by admin.

│   │
│   ├── routes/

│   │   └── authRoutes.js

│   │        # Routes for /api/auth → register, login.
│   │
│   │   └── userRoutes.js

│   │        # Routes for /api/users → list users, get by ID, delete.
│   │
│   │   └── productRoutes.js

│   │        # Routes for /api/products → CRUD products.
│   │
│   │   └── orderRoutes.js

│   │        # Routes for /api/orders → create order, get my orders, list all orders.
│   │
│   ├── middleware/

│   │   └── authMiddleware.js

│   │        # Middleware for verifying JWT tokens (protecting routes).
│   │
│   │   └── roleMiddleware.js

│   │        # Middleware to restrict access to admin-only routes.
│   │
│   └── server.js

│        # Entry point of the application.

│        # Loads express, middleware, routes, and starts server on PORT.
│
├── package.json

│   # Lists dependencies like express, sequelize, pg, bcrypt, jsonwebtoken, etc.

│   # Includes scripts (start, dev).
│
├── .env

│   # Stores environment variables (PORT, DB credentials, JWT_SECRET).

│   # Example:

│   # PORT=5000

│   # DB_NAME=ecommerce_db

│   # DB_USER=postgres

│   # DB_PASSWORD=yourpassword

│   # DB_HOST=localhost

│   # DB_DIALECT=postgres

│   # JWT_SECRET=supersecretkey
│
└── README.md

    # Documentation for the project.

    # Includes setup, usage, and API endpoints.



    ## AWANUMER FROM ABBOTTABAD KPK PAKISTAN.
Es module commomjs