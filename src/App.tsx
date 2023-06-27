import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Mumbai", "Tokyo", "Dubai", "Frankfurt", "London", "New York"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
