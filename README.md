# ProjectTT
ProjectTT

# Cài đặt
# NPM
npm install

# Lệnnh tải biểu đồ
npm install recharts

# Tải fontawesome
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core

# Tai Datatable
npm install react-data-table-component


# Hướng dẫn cài đặt Database cho Backend

## 1. Cài đặt các package cần thiết

```bash
cd backend
npm install
```

## 2. Cấu hình biến môi trường

```bash
cp .env.example .env
```

## 3.Edit .env with your database credentials:

```bash
PORT=3000
DB_NAME=ecommerce_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
```

## 4. Run migrations:

```bash
npx sequelize-cli db:migrate
```

## 5. Verify tables in the database:

```bash
SHOW TABLES;
```

---

**Chúc bạn thành công!**