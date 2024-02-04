import Navbar from "./components/Layout/Navbar";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Pages/Error";
import Footer from "./components/Layout/Footer";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import CartPage from "./components/Pages/CartPage";
import Product from "./components/Pages/Product";
import Home from "./components/Pages/Home";
import Single from "./components/Pages/Single";

function App() {
  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <div className="fixed w-full z-10">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home/>
          <Product/>
          </div>
        )
      },
      {
        path: "/Product",
        element: <Product />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/Products/:id",
        element: <Single />
      }
    ]
  }
]);

export default App;
