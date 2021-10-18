import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false)
  const showCartHandler = () => {
    setcartIsShown(true)
  }
  const hideCartHandler = () => {
    setcartIsShown(false)
  }
  return (
    <>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;