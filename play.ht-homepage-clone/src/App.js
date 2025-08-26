import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/1_Header/Header";
import Title from "./myComponents/2_Title/Title";
import Input from "./myComponents/3_Input/Input";
import Users from "./myComponents/4_Users/Users";
import Voice_generator from "./myComponents/5_Voice_generator/Voice_generator";
import Feature from "./myComponents/6_Feature/Feature";
import Feature_2 from "./myComponents/7_Feature_2/Feature_2 ";
import Leading from "./myComponents/8_Leading/Leading";
import Voices from "./myComponents/9_Voices/Voices";
import Synthesis from "./myComponents/10_Synthesis/Synthesis";
import Work from "./myComponents/11_Work/Work";
import About from "./myComponents/12_About/About";
import Fotter from "./myComponents/13_Fotter/Fotter";
import Model from "./myComponents/14_Model/Model";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Input />
      <Users />
      <Voice_generator />
      <Feature />
      <Feature_2 />
      <Leading />
      <Voices />
      <Synthesis />
      <Work />
      <About />
      <Fotter />
      <Model />
    </div>
  );
}

export default App;
