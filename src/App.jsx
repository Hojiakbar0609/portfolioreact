import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Contact, HomeLayout, Landing, Work } from './pages'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing/>
        },
        {
          path: "about",
          element: <About />,
          errorElement: <Error/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "work",
          element: <Work/>
        }
      ],
    },
    
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App