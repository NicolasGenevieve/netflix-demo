import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./assets/data.json";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main moviesData={data} />
    </>
  );
}

export default App;
