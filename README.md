# Project_TT

## Mô tả
Project_TT là một hệ thống web fullstack gồm backend (Node.js/Express/Sequelize/MySQL) và frontend (bạn cần bổ sung framework nếu có, ví dụ React/Vue/Angular).

---

## 1. Yêu cầu hệ thống

- Node.js >= 16.x
- MySQL >= 5.7
- (Frontend) npm/yarn

---

## 2. Cài đặt Backend

```bash
cd backend
npm install
```

### Cấu hình môi trường

- Tạo file `.env` trong thư mục `backend`
```bash
PORT=3000
NODE_ENV=development
# Database configuration
DB_NAME=ecommerce_db
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306

# JWT secret key
JWT_ACCESS_TOKEN_SECURE=
JWT_ACCESS_TOKEN_EXPIRATION=
JWT_REFRESH_TOKEN_SECURE=
JWT_REFRESH_TOKEN_EXPIRATION=

#CLOUDINARY key
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
```

### Cấu hình cơ sở dữ liệu

- tạo file config.json trong thư mục backend/src/config

```bash
{
  "development": {
    "username": "your_username",
    "password": "your_pashword",
    "database": "your_databasename",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "your_username",
    "password": "your_pashword",
    "database": "your_databasename",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "your_username",
    "password": "your_pashword",
    "database": "your_databasename",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}

```

### Khởi tạo database

- Tạo cơ sở dữ liệu 
```bash
CREATE DATABASE ecommerce_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

- Di chuyển vào thư mục backend/src
- Chạy migrate để thêm các bảng vào cơ sở dữ liệu và seed để thêm dữ liệu
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Chạy backend

```bash
npm run dev
```

## 3. Cài đặt Frontend

```bash
cd frontend
npm install
```

### Chạy frontend

```bash
npm start
```

---


## 5. Liên hệ

- Tác giả: 
- Email: