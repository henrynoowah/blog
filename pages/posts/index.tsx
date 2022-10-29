import { NextPage } from 'next'
import React from 'react'
import Layouts from '../../layouts/Layouts'

const index: NextPage = () => {
  return (
    <Layouts header>
      <div className="w-full h-full flext justify-center items-center bg-dark">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-primary text-[36px]">Posts</h1>
        </div>
      </div>
    </Layouts>
  )
}

export default index
