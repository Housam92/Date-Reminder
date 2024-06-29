import { Button, Container, Row,Col } from "react-bootstrap";
import person from './Data'
import Datescount from "./Components/Datescount";
import DatesAction from "./Components/DatesAction";
import Dateslist from "./Components/Dateslist";
import { useState } from "react";

function App() {

  const[persondata,Setpersondata]=useState(person)
  const onDelete=()=>{
    Setpersondata([])
  }
    const onView=()=>{
      Setpersondata(person)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">

<Datescount person={persondata}/>
<Dateslist person={persondata}/>
<DatesAction onDelete={onDelete} onView={onView}/>

      </Container>
    </div>
  );
}

export default App;
