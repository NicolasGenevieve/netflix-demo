import "./Poster.css";

const Poster = (props) => {
  return (
    <div className="posterCustom">
      <img src={props.imageUrl} alt="films" />
    </div>
  );
};

export default Poster;
