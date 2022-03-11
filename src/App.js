import React from 'react';
import PersonCard from "./PersonCard";

function App(){
  return(
    <div>
      <PersonCard firstname="Pedro" lastname="Vasquez" age = {28} haircolor="marrón"/>
      <PersonCard firstname="Ariel" lastname="Sagasti" age = {25} haircolor="amarillo"/>
    </div>
  )
}
  
export default App;


