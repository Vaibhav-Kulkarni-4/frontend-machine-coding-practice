import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import UsersTable from "./components/Table";
import Timer from "./components/Timer";
import CityDropdown from "./components/Dropdown";
import FileSystem from "./components/FileSystem";
// import Context from "./components/Context";
import ToDo from "./components/ToDo";
import OTPInput from "./components/OTPInput";
import ProgressBar from "./components/ProgressBar";
import AutoCompleteSearchBox from "./components/AutocompleteSearchBar";
import Pagination from "./components/Pagination";
import PingPongTimer from "./components/PingPontTimer";

import { CounterContext } from "./context/CounterContext";

function App() {
  const counterContext = useContext(CounterContext);
  return (
    // Step 3: Wrap the component tree with the ContextProvider
    <CounterContext.Provider value={counterContext}>
      <div>
        <Header propName={"Mac"} />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <ImageSlider />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <UsersTable />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <Timer />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <CityDropdown />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <FileSystem />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        {/* <Context />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr> */}
        <ToDo />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <OTPInput />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <ProgressBar progress={20} />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <AutoCompleteSearchBox />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <Pagination />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
        <PingPongTimer />
        <hr className="h-px my-8 border-0 bg-gray-700"></hr>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
