import ListGroup from "./components/ListGroup";
import "./App.css";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const items = ["Tokyo", "Mumbai", "Dubai", "London", "New York"];

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => console.log("item selected.")}
      ></ListGroup>

      <Button color="success" onClick={() => console.log()}>
        Click Me!
      </Button>

      <Like onClick={() => console.log("Clicked.")}></Like>

      <NavBar cartItemsCount={cartItems.length}></NavBar>

      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </>
  );
}

export default App;
