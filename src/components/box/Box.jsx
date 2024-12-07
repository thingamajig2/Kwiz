import "./box.scss";

const Box = ({ item, handleClick }) => {
  return (
    <>
      {item ? (
        <div className="box">
          <div
            className="boxStructure"
            style={{ backgroundImage: `url("${item.backgroundImage}")` }}
            onClick={handleClick}
          >
            <span> {item.title} </span>
            {item.image && <img src={item.image} alt={item.title} />}
          </div>
          <span>{item.desc}</span>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};

export default Box;
