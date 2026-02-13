import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ClickSpark from "./components/ClickSpark";
import DetailProducts from "./pages/DetailProducts";
function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: ":detailId", element: <DetailProducts /> },
      ],
    },
  ]);
  return (
    <>
      <ClickSpark>
        <RouterProvider router={router}></RouterProvider>
      </ClickSpark>
    </>
  );
}

export default App;
