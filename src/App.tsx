import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import UsersTable from "./components/Table";

function App() {
  return (
    <div>
      {/* <Header propName={'Mac'}/> */}
      <ImageSlider></ImageSlider>
      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
      <UsersTable></UsersTable>
    </div>
  );
}

export default App;
