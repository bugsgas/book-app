import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//layouts

//pages
import Layout from "./layout/Layout";
import Dashboard from "./menu/Dashboard";

import Details from "./menu/Details";
import Brand from "./menu/Brand";
import Nike from "./menu/Brand/Nike";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* //customer */}
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" board element={<Dashboard />} />
        <Route path="brand" board element={<Brand />} />
        <Route path="nike" board element={<Nike />} />
        <Route path="/details/:id" board element={<Details />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
