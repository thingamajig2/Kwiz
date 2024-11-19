import Box from "../box/Box";
import "./home.scss";
import { useCallback, useState } from "react";
import { subData } from "../../subData";
import { infoData } from "../../items";
import SubMap from "../subMap/SubMap";

const Home = () => {
  const [subCat, setSubCat] = useState("");

  const dataForMap = subCat
    ? subData.filter((item) => item.category === subCat)
    : infoData;

  const handleClick = (category) => {
    setSubCat(category);
  };

  const back = useCallback(() => {
    setSubCat("");
  }, []);

  return (
    <div className="home">
      {subCat ? (
        <>
          <div className="backButton" onClick={back}>
            <img src="https://cdn-icons-png.flaticon.com/512/9426/9426973.png" alt="back" />
            Back
          </div>
          <SubMap category={subCat} />
        </>
      ) : (
        <div className="categories">
          {dataForMap.map((item, index) => (
            <Box
              title={item.title}
              image={item.image}
              backgroundImage={item.backgroundImage}
              key={Math.random() * index}
              handleClick={() => handleClick(item.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;