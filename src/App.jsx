import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
{/*import components from index.js*/}
import {HomeLayout, Landing, Register, Login, DashboardLayout, Error} from './pages/index'


const router = createBrowserRouter([
  /*What to display on the browser depending on path*/
  {
    path: '/',
    element: <HomeLayout/>,
    /**Error page if user looks for nonexistent path */
    errorElement: <Error />,
    children: [
      { 
        /**index page is displayed when we go to parent path */
        index: true,
        element: <Landing />,
      },
      {
        /**the children path's are appended to their parent path */
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'dashboard',
        element: <DashboardLayout/>
      },
    ]
  },
  
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
