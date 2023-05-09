
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsDetails from "./Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path:"/news/:id",
    element: <NewsDetails />
  },
])
function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
