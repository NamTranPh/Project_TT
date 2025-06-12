const Form = () => {
  return (
    <form className='space-y-4 '>
      <div>
        < div className='mb-3' >
          <label htmlFor='short-title' className='block text-sm font-medium text-gray-700 mb-1'>
            Tiêu đề ngắn
          </label>
          <input
            id='short-title'
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100'
          />
        </div >

        <div className='mb-3' >
          <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1'>
            Tiêu đề
          </label>
          <input
            id='title'
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100'
          />
        </div>

        < div className='mb-3' >
          <label htmlFor='url' className='block text-sm font-medium text-gray-700 mb-1'>
            Đường dẫn
          </label>
          <input
            id='url'
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100'
          />
        </div >

        < div className='mb-3' >
          <label htmlFor='short-title' className='block text-sm font-medium text-gray-700 mb-1'>
            ?
          </label>
          <input
            id='?'
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100'
          />
        </div >

        < div className='pt-2 flex justify-end' >
          <button
            type='submit'
            className='px-4 bg-[#0065F8] hover:bg-[#0052cc] text-white py-2 rounded font-semibold transition'
          >
            Đăng
          </button>
        </div >
      </div>
    </form>
  );
};

export default Form;
