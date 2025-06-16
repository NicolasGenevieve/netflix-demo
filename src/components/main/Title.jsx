import "./Title.css";

const Title = (props) => {
  return (
    <>
      <div className="titleCustom">
        <h2>{props.categories}</h2>
      </div>
    </>
  );
};

export default Title;
