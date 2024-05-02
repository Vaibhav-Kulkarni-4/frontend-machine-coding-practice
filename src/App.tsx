import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import UsersTable from "./components/Table";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      {/* <Header propName={'Mac'}/> */}
      <ImageSlider></ImageSlider>
      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
      <UsersTable></UsersTable>
      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
      <Timer></Timer>
      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
    </div>
  );
}

export default App;
