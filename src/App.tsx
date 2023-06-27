import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisible(true)}>
        Click Me!
      </Button>
    </>
  );
}

export default App;
