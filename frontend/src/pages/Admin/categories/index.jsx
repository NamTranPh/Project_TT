import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "../../../icons/icons";
import Table from '../categories/table'
import CategoriesCreate from '../categories/create'

const Categories = () => {
  return (
    <div className='p-6'>
      <div className='page-header pb-6'>
        <h5 className='text-xl font-bold text-gray-800'>Danh sách danh mục sản phẩm</h5>
        <p className='text-gray-500'>Danh mục sản phẩm</p>
      </div>

      <div className='page-body flex w-full gap-2'>
        <div className='px-5 py-5 bg-white w-2xl rounded shadow'>
          <CategoriesCreate />
        </div>

        <div className='px-5 py-5 bg-white w-full rounded shadow'>
          <div className='search-box flex justify-end pb-5'>
            <form id='formSearch'>
              <div className='flex'>
                <input
                  id='search'
                  type='text'
                  placeholder='Nhập từ khóa tìm kiếm'
                  className='flex border border-gray-300 rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-blue-500 transition'
                />
                <button type='submit' className="ms-2 px-2 py-1 border border-[#206bc4] text-[#206bc4] rounded bg-transparent hover:bg-[#206bc4] hover:text-white hover:border-0 transition">Tìm kiếm</button>
              </div>
            </form>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Categories;