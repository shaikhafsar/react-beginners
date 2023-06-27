import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["Tokyo", "Mumbai", "Dubai", "London", "New York"];

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => console.log("item selected.")}
      ></ListGroup>
    </div>
  );
}

export default App;
