import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Root from "./components/Root/Root";
import About from "./pages/About/About";
import Community from "./pages/Community/Community";
import { IntersectionProvider } from "./context/IntersectionProvider";
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
    }
  ]
}]);
function App() {

  return (
    <>
      <IntersectionProvider>
        <RouterProvider router={router} />
      </IntersectionProvider>
    </>
  )
}

export default App
