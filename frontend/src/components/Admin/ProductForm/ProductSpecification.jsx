import React, { useState, useEffect } from 'react'

const specTemplates = {
  Laptop: [
    { key: 'CPU', value: '' },
    { key: 'RAM', value: '' },
    { key: 'Ổ cứng', value: '' },
    { key: 'Màn hình', value: '' },
    { key: 'Card đồ họa', value: '' }
  ],
  'Headphone': [
    { key: 'Loại kết nối', value: '' },
    { key: 'Thời lượng pin', value: '' },
    { key: 'Bluetooth', value: '' },
    { key: 'Microphone', value: '' }
  ]
  // Thêm nhiều loại khác nếu cần
}
const ProductCpecification = ({ category }) => {
  const [specs, setSpecs] = useState([])

  useEffect(() => {
    // Khi chọn loại, tự động load template tương ứng
    if (category && specTemplates[category]) {
      setSpecs(specTemplates[category])
    } else {
      setSpecs([])
    }
  }, [category])

  const handleSpecChange = (index, field, value) => {
    const newSpecs = [...specs]
    newSpecs[index][field] = value
    setSpecs(newSpecs)
  }

  const addSpec = () => setSpecs([...specs, { key: '', value: '' }])
  const removeSpec = (index) => {
    const newSpecs = [...specs]
    newSpecs.splice(index, 1)
    setSpecs(newSpecs)
  }

  return (
    <div className='z-10 shadow my-2 p-4 rounded'>
      <p className='block mb-2 text-sm font-medium text-gray-900'>Thông số kĩ thuật</p>
      {specs.map((spec, index) => (
        <div key={index} className='flex flex-row  justify-between my-2'>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            placeholder="Tên thông số"
            value={spec.key}
            onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
          />
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
            placeholder="Giá trị"
            value={spec.value}
            onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
          />
          <button
            type="button"
            className='bg-red-600 text-white px-4 py-2 border-red-600 rounded cursor-pointer'
            onClick={() => removeSpec(index)}>
              Xoá
          </button>
        </div>
      ))}
      <button type="button" className='bg-[#003F62] rounded px-4 py-2 text-white cursor-pointer' onClick={addSpec}>+ Thêm thông số</button>
    </div>
  )
}

export default ProductCpecification
