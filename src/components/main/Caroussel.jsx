import "./Caroussel.css";
import List from "./List";
import Title from "./Title";

const Caroussel = (props) => {
  return (
    <>
      <section className="carousselCustom">
        <Title categories={props.title.category} />
        <div className="listCustom">
          {props.title.images.map((pictures, index) => {
            return <List key={index} poster={pictures} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Caroussel;
