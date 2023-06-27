import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="success" onClick={() => console.log("Button clicked.")}>
        Click Me!
      </Button>
    </div>
  );
}

export default App;
