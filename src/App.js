import Header from "./components/Header";
import Main from "./components/Main";
// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";

function App() {
  return (
    <div className=" bg-bg text-primaryTextColor 2xl:p-24 xl:p-24 lg:p-20 lg:flex-row md:p-16 sm:p-14 ssm:p-6 ssm:flex ssm:justify-between ssm:flex-col">
      <Header />
      <Main />
        
    </div>
  );
}

export default App;
