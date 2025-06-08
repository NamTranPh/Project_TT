CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- 1. Bảng người dùng (User)
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    phone_number VARCHAR(10),
    password VARCHAR(100),
    email VARCHAR(100),
    address TEXT,
    image_url TEXT,
    status TINYINT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 2. Bảng quản trị viên (Admin)
CREATE TABLE admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    password VARCHAR(100),
    role VARCHAR(50),
    status TINYINT,
    created_at DATETIME,
    updated_at DATETIME
);


-- 3. Bảng sản phẩm (Product)
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2),
    stock_quantity INT,
    status TINYINT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 4. Bảng danh mục (Category)
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    status TINYINT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 5. Bảng phân loại sản phẩm (ProductCategory)
CREATE TABLE product_category (
    product_id INT,
    category_id INT,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

-- 6. Bảng ảnh sản phẩm (ProductImage)
CREATE TABLE product_image (
    product_id INT,
    is_thumbnail TINYINT,
    image_url TEXT,
    PRIMARY KEY (product_id, image_url(255)),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

-- 7. Bảng đánh giá (Comment)
CREATE TABLE comment (
    user_id INT,
    product_id INT,
    content TEXT,
    status TINYINT,
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

-- 8. Bảng danh sách yêu thích (Listing)
CREATE TABLE rating (
    user_id INT,
    product_id INT,
    number_star TINYINT,
    PRIMARY KEY (user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

-- 9. Bảng đơn hàng (Order)
CREATE TABLE `order` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    payment_status TINYINT,
    shipping_address TEXT,
    order_status TINYINT,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 10. Bảng chi tiết đơn hàng (OrderDetail)
CREATE TABLE order_detail (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES `order`(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

-- 11. Bảng thông báo (Notification)
CREATE TABLE `notification` (
    id_user INT,
    title VARCHAR(255),
    message TEXT,
    is_read TINYINT,
    created_at DATETIME,
    PRIMARY KEY (id_user, title),
    FOREIGN KEY (id_user) REFERENCES `User`(id)
);

-- 12. Bảng mã giảm giá (Voucher)
CREATE TABLE voucher (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(50),
    discount_type VARCHAR(20),
    discount_value DECIMAL(10,2),
    min_order_value DECIMAL(10,2),
    start_date DATE,
    end_date DATE,
    quantity INT,
    status TINYINT
);

-- 13. Bảng mã giảm giá theo sản phẩm (ProductVoucher)
CREATE TABLE product_voucher (
    voucher_id INT,
    product_id INT,
    PRIMARY KEY (voucher_id, product_id),
    FOREIGN KEY (voucher_id) REFERENCES voucher(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

-- 14. Bảng mã giảm giá theo đơn hàng (OrderVoucher)
CREATE TABLE order_voucher (
    order_id INT,
    voucher_id INT,
    PRIMARY KEY (order_id, voucher_id),
    FOREIGN KEY (order_id) REFERENCES `order`(id),
    FOREIGN KEY (voucher_id) REFERENCES voucher(id)
);