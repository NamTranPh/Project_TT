import { useState } from 'react'

const Collapses = () => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false)
  const toggleOpenCollapse = () => {
    setIsOpenCollapse(!isOpenCollapse)
  }
  return (
    <div class="relative block w-full">
      <button type="button"
        class="flex items-center justify-between w-full p-3 font-sans text-xl font-semibold text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 cursor-pointer hover:bg-[#003F62] hover:text-white rounded-[10px]"
        onClick={() => toggleOpenCollapse()}>
        <p class="block mr-auto font-sans text-base antialiased font-normal">
          Categories
        </p>
        <span class={`ml-4 transform transition-all ${isOpenCollapse ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
            stroke="currentColor" aria-hidden="true" class="w-4 h-4 mx-auto transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </button>
      {
        isOpenCollapse &&
        <div class="">
          <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
            <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal">
              <button class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#003F62] hover:text-white">
                Category 1
              </button>
              <div class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#003F62] hover:text-white">
                Category 2
              </div>
            </nav>
          </div>
        </div>
      }
    </div>
  )
}

export default Collapses
