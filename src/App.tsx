import "./App.scss";
import FirstCard from './Components/FirstCard/FirstCard';
import SecondCard from "./Components/SecondCrad/SecondCard";

export const App = () => {
  return (
    <>
    <div className='headline-front-page'>
      <h1>
        Card Animations By S.E
      </h1>
    </div>
    <div>
      <FirstCard />
      </div>
      <div>
        <SecondCard /> 
      </div>
      <div className="third-section">
        I Called It
      </div>
      </>
    )
};
export default App;
