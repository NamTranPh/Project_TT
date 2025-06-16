import { useState } from 'react';

const Profile = () => {
  const [form, setForm] = useState({
    name: 'Nguyễn Văn A',
    email: 'admin@example.com',
    phone: '0123 456 789',
    address: '123 Đường ABC, Hà Nội',
    role: 'Quản trị viên',
    password: '',
    createdAt: '2024-05-01',
    avatar: 'https://i.pravatar.cc/150?img=3',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

const handleChangeAvatar = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, avatar: imageUrl }));
  }
};

  return (
    <div className="p-6">
      <div className="page-header flex">
        <h5 className="text-xl font-bold text-gray-800 mb-6">Thông tin tài khoản</h5>
      </div>

      <div className="page-body px-5 py-5 bg-white rounded shadow">
        <form className='bg-white' onSubmit={handleSubmit}>
          <div className='p-6 flex justify-between gap-10'>
            {/* Left */}
            <div className='w-[50%] space-y-4 flex flex-col items-center'>
              <div className='w-[200px] h-[200px] border rounded overflow-hidden'>
                <img src={form.avatar} alt='Admin Avatar' className='w-full h-full object-cover' />
              </div>

              <label className="w-full flex flex-col items-center gap-2 cursor-pointer">
                <span className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition">
                  Thay đổi ảnh đại diện
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeAvatar}
                  className="hidden"
                />
              </label>

              <div className='w-full'>
                <label className='block text-sm font-medium text-gray-900'>Chức vụ</label>
                <input type='text' value={form.role} readOnly className='bg-gray-100 border border-gray-300 text-sm rounded-lg w-full p-2' />
              </div>

              <div className='w-full'>
                <label className='block text-sm font-medium text-gray-900'>Ngày đăng ký tài khoản</label>
                <input type='text' value={form.createdAt} readOnly className='bg-gray-100 border border-gray-300 text-sm rounded-lg w-full p-2' />
              </div>
            </div>

            {/* right */}
            <div className='w-[50%] space-y-7'>
              {[
                { label: 'Họ tên', name: 'name', type: 'text', disabled: false },
                { label: 'Email', name: 'email', type: 'email', disabled: false },
                { label: 'Số điện thoại', name: 'phone', type: 'text', disabled: false },
                { label: 'Địa chỉ', name: 'address', type: 'text', disabled: false },
              ].map(({ label, name, type, disabled }) => (
                <div key={name}>
                  <label className='block text-sm font-medium text-gray-900'>{label}</label>
                  <input type={type} name={name} disabled={disabled} value={form[name]} onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2 ${disabled ? 'bg-gray-100' : ''}`} />
                </div>
              ))}
              <div>
                <label className='block text-sm font-medium text-gray-900'>Mật khẩu</label>
                <input type='password' name='password' value={form.password} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2' placeholder='••••••••' />
              </div>

            </div>
          </div>

          <div className='flex justify-end gap-5 px-6'>
            <button type='submit' className='w-[200px] bg-[#0065F8] rounded px-4 py-2 text-white'>Lưu thay đổi</button>
            <button type='button' className='w-[200px] bg-gray-500 rounded px-4 py-2 text-white'>Hủy</button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Profile;
