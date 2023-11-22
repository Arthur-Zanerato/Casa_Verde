import { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import NewsLetter from "./Components/NewsLetter";
import Products from "./Components/OurPlants";

function App() {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/lucianosants/cd3c8761fad5d441185cfa7365553e4b/raw/"
    )
      .then((response) => response.json())
      .then((data) => {
        setPlant(data);
      });
  }, []);

  return (
    <>
      <Menu />
      <NewsLetter />
      <Products catalog={plant} />
    </>
  );
}

export default App;
