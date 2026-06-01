import React from 'react'
import Greeting from './components/Greeting'
import ProfileCard from './components/ProfileCard'

const App = () => {
  const developers = [
  {
    id:1,
    name: "Adarsh",
    role: "Frontend Developer",
    age: 22
  },
  {
    id:2,
    name: "Rahul",
    role: "Backend Developer",
    age: 24
  },
  {
    id:3,
    name: "Sneha",
    role: "UI Designer",
    age: 21
  },
  {
    id:4,
    name: "Amrita",
    role: "Full Stack",
    age: 31
  }
]
  return (
    <div className='flex flex-col items-center min-h-screen gap-6'>
      <h1 className='text-5xl font-semibold'>
        Our Developer Team
      </h1>

      <div className=' flex flex-wrap gap-4'>
        {developers.map((dev)=>(
          <ProfileCard key={dev.id} {...dev} />
        ))}
      </div>

    </div>
  )
}

export default App