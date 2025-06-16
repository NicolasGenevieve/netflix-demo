import "./List.css";
import Poster from "./Poster";

const List = (props) => {
  return (
    <>
      <Poster imageUrl={props.poster} />
    </>
  );
};

export default List;
