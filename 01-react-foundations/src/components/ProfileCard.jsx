import React from 'react'

const ProfileCard = ({name, role, age}) => {
  return (
    <div className='p-6 border rounded-xl min-w-64 shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300'>

      <div className=' flex flex-col gap-2'>

        <p className='text-2xl font-semibold'>{name}</p>
        <p className='text-gray-500'>{role}</p>
        <p className='text-sm'>{age}</p>
        
      </div>

    </div>
  )
}

export default ProfileCard