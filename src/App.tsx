import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Root from "./components/Root/Root";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Community from "./pages/Community/Community";
const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
  children: [
    {
      index: true,
      element: <Home/>
    },
    {
      path: "/comunidad",
      element: <Community/>
    },
    {
      path: "/nosotros",
      element: <About/>
    },
    {
      path: "/contacto",
      element: <Contact/>
    }
  ]
}]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
