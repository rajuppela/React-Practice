import './App.css';
import ButtonComponent from './components/classComponents/buttonComponents/buttonComponent';
import ImgComponent from './components/classComponents/images/image';
import { CustomImage } from './components/functionalComponents/Images/customImage';
import CustomButton from './components/functionalComponents/buttonComponents/customButton';
function App() {
  return (
    <div className="App">
      <CustomButton/>
      <CustomImage/>
      <ButtonComponent/>
      <ImgComponent/>
    </div>
  );
}

export default App;
