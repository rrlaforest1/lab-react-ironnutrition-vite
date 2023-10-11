import { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
// import foodsJson from "./foods.json";

function App() {
  // const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
