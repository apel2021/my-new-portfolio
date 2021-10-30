import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ServiceList from "./components/serviceList/ServiceList";
import Skill from "./components/skills/Skill";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
     
    <div style={{backgroundColor:darkMode? "#222": "white",
    
         color: darkMode && "white"
          }}
          
        > 

      <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ServiceList></ServiceList>
      <Skill></Skill>
      <Contact></Contact>
    </div>
      
  );
  
  
};

export default App;