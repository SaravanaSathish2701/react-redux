import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import { productStore } from "./Utils/features.jsx/ProductsStore";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Provider store={productStore}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
};

export default App;
