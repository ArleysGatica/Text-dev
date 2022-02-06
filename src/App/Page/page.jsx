import React from "react";
import {Sidebar} from "../Components/Sidebar/sidebar";
import {Button} from "../Components/Buttons/button";
import './page.css'

const App =() =>{
  return (
    <>
    <div className = "Page-Container"> 
      <Sidebar>
      <div className="Container-Button">
          <Button />
      </div>
      </Sidebar>

    </div>
    </>
  );
};

export default App;
