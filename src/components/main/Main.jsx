import "./Main.css";
import Caroussel from "./Caroussel";

const Main = (props) => {
  console.log(props);
  return (
    <>
      <main className="mainCustom">
        {props.moviesData.map((categories, index) => {
          return <Caroussel key={index} title={categories} />;
        })}
      </main>
    </>
  );
};

export default Main;
