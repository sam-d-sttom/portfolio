import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Discover from "./components/Discover";
import { useEffect, useState } from "react";

function App() {

  const [displayDiscover, setDisplayDiscover] = useState(false);
  const [introduction, setIntroduction] = useState(true);

  return (
    <div className=" bg-bg text-primaryTextColor 2xl:p-24 xl:p-24 lg:p-20 lg:flex-row md:p-16 sm:p-14 ssm:p-6 ssm:flex ssm:justify-between ssm:flex-col text-paragraphFontSize leading-normal">

      {
        !introduction && <Header introduction={introduction}/>
      }

      {
        !introduction && <Main introduction={introduction}/>
      }

      <Welcome displayDiscover={displayDiscover} setDisplayDiscover={setDisplayDiscover} introduction={introduction}/>

      {
        displayDiscover && <Discover displayDiscover={displayDiscover} setDisplayDiscover={setDisplayDiscover} setIntroduction={setIntroduction}/>
      }
    </div>
  );
}

export default App;
