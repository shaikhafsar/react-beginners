import ListGroup from "./components/ListGroup";
import "./App.css";
import Button from "./components/Button/Button";
import Like from "./components/Like";

function App() {
  const items = ["Tokyo", "Mumbai", "Dubai", "London", "New York"];

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
    </>
  );
}

export default App;
