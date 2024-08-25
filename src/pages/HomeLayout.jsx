import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      {/**Whatever is not in outlet, is displayed accross all children paths,
       * make sure you have outlet if something is not displaying
       */}
      <Outlet></Outlet>
    </div>
  )
}

export default HomeLayout
