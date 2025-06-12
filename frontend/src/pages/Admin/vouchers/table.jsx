import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import { faEdit, faTrash } from "../../../icons/icons";

const Table = () => {
    const data = [
        {
            id: 1,
            code: "SUMMER2025",
            discount: "20%",
            start: "2025-06-30",
            expiry: "2025-06-30"
        },
        {
            id: 2,
            code: "SUMMER2024",
            discount: "30%",
            start: "2025-06-30",
            expiry: "2024-04-30"
        },
        {
            id: 3,
            code: "SUMMER12025",
            discount: "20%",
            start: "2025-06-30",
            expiry: "2025-06-30"
        },
        {
            id: 4,
            code: "HOTSUMMER2025",
            discount: "50%",
            start: "2025-06-30",
            expiry: "2025-06-13"
        },
    ];

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sorttable: true,
            style: {
                maxWidth: "60px",
            },
        },
        {
            name: "Mã Voucher",
            selector: (row) => row.code,
        },
        {
            name: "Giảm giá",
            selector: (row) => row.discount,
            center: true,
            sortable: true,
        },
        {
            name: "Thời gian bắt đầu",
            selector: (row) => row.start,
            center: true,
            sortable: true,
        },
        {
            name: "Thời gian kết thúc",
            selector: (row) => row.expiry,
            center: true,
            sortable: true,
        },
        {
            name: "",
            cell: (row) => (
                <div className="flex gap-2 justify-center">
                    <Link
                        to={`/admin/voucher/edit?id=${row.id}`}
                        className="px-2 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-300"
                    >
                        <FontAwesomeIcon icon={faEdit} /> Sửa
                    </Link>
                    <Link
                        to={`/admin/voucher/delete?id=${row.id}`}
                        className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-400"
                    >
                        <FontAwesomeIcon icon={faTrash} /> Xóa
                    </Link>
                </div>
            ),
            center: true,
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "#f9fafb",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "14px",
            }
        },
        cells: {
            style: {
                fontSize: "14px",
            },
        },
    };

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
            customStyles={customStyles}
        />
    );

}

export default Table;