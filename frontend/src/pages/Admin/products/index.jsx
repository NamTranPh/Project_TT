import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="p-4">
            <h1>Trang sản phẩm</h1>

            <Link to="/admin/product/create" >
                Thêm sản phẩm
            </Link>
        </div>
    );
};

export default Product;