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
import Popular from "./menu/Popular";
import TestLayout from "./layout/testLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* //customer */}
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" board element={<Dashboard />} />
        <Route path="popular" board element={<Popular />} />
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
