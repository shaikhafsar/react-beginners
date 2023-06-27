import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["Tokyo", "Mumbai", "Dubai", "London", "New York"];

  return (
    <ListGroup
      heading="Cities"
      items={items}
      onSelectItem={() => console.log("item selected.")}
    ></ListGroup>
  );
}

export default App;
