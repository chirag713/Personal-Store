import React from 'react'
import Header from '../Components/Header'
import SignForm from '../Components/Signin'

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-10">
        <SignForm />
      </div>
    </div>
  )
}

export default page
