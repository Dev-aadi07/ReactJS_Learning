import React from 'react'

const Navbar = () => {
  const navLink = "hover:text-gray-500 transition duration-200"
  const navItems = ["Home", "About", "Projects", "Contact"]

  return (
    <div className='flex flex-wrap justify-between px-6 py-6 items-center w-full border-b'>
      <div className='font-semibold text-xl'>DevTeam</div>

      <div className='flex flex-wrap items-center gap-4'>
        {navItems.map((item)=>(
          <a key={item} href="#" className={navLink}> 
            {item}
          </a>
        ))}
      </div>

    </div>
  )
}

export default Navbar