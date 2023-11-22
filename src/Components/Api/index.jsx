import { useEffect, useState } from "react";

const Plant = () => {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-9SZlU7BIbsFvaBW1hrHDV8rqi8C3cSfGYqyGlhd-HJ-LndLo3Sqj6pA-Fg29jcFNiHYEuqSA1eQesqHD9yVsl2QzTBQ8jEElEGF6aZsvCNoWd7eHs&utm_content=231361624&utm_source=hs_automation"
    )
      .then((response) => response.json())
      .then((data) => setPlant(data));
  }, []);
  console.log(plant);
};
export default Plant;
