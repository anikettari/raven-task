import './App.css';
import React, { useState } from 'react';
import FormPage from "./components/FormPage"
import FinalPageLayout from "./components/FinalPageLayout"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const[userName,setUserName]= useState("");
  const[userNamePrint,setUserNamePrint]=useState([]);


  const[organisationName,setOrganisationName]=useState("");
  const [organisationNamePrint,setOrganisationNamePrint]=useState([]);


  const[greetingMessage,setGreetingMessage]=useState("");
  const[greetingMessageprint,setGreetingMessagePrint]=useState([]);


  const[thankyouMessage,setThankyouMessage]=useState("");
  const[thankyouMessagePrint,setThankyouMessagePrint]=useState([]);


  const [value, onChange] = useState(new Date());
  const [valueOfDate,setValueOfDate]=useState([]);

  const [nameOfTheProject,setNameOfTheproject]=useState("");
  const[projectNamePrint,setProjectNamePrint]=useState([]);


  const [quantity,setQuantity]=useState('');
  const[quantityPrint,setQuantityPrint]=useState([]);

  const[unitPrice,setUnitPrice]=useState('')
  const[unitPricePrint,setUnitPricePrint]=useState([])

  const[totalPricePrint,setTotalPricePrint]=useState([])

  


  return (
    <div className="App">
     <h1 style={{textAlign:"center"}}>Raven Technology.</h1>

     <FormPage 
     userName={userName}
     setUserName={setUserName}
     userNamePrint={userNamePrint}
     setUserNamePrint={setUserNamePrint}

     organisationName={organisationName}
     setOrganisationName={setOrganisationName}
     organisationNamePrint={organisationNamePrint}
     setOrganisationNamePrint={setOrganisationNamePrint}

     greetingMessage={greetingMessage}
     setGreetingMessage={setGreetingMessage}
     greetingMessageprint={greetingMessageprint}
     setGreetingMessagePrint={setGreetingMessagePrint}

     thankyouMessage={thankyouMessage}
     setThankyouMessage={setThankyouMessage}   
     thankyouMessagePrint={thankyouMessagePrint}
     setThankyouMessagePrint={setThankyouMessagePrint}

     value={value}
     onChange={onChange}

     nameOfTheProject={nameOfTheProject}
     setNameOfTheproject={setNameOfTheproject}
     projectNamePrint={projectNamePrint}
     setProjectNamePrint={setProjectNamePrint}

     quantity={quantity}
     setQuantity={setQuantity}
     quantityPrint={quantityPrint}
     setQuantityPrint={setQuantityPrint}

     unitPrice={unitPrice}
     setUnitPrice={setUnitPrice}
     unitPricePrint={unitPricePrint}
     setUnitPricePrint={setUnitPricePrint}

     totalPricePrint={totalPricePrint}
     setTotalPricePrint={setTotalPricePrint}
   


     />

     <FinalPageLayout
     userNamePrint={userNamePrint}
     setUserNamePrint={setUserNamePrint}

     organisationNamePrint={organisationNamePrint}
     setOrganisationNamePrint={setOrganisationNamePrint}

     greetingMessageprint={greetingMessageprint}
     setGreetingMessagePrint={setGreetingMessagePrint}

     thankyouMessagePrint={thankyouMessagePrint}
     setThankyouMessagePrint={setThankyouMessagePrint}

     value={value}
     onChange={onChange}

     projectNamePrint={projectNamePrint}
     setProjectNamePrint={setProjectNamePrint}

     quantityPrint={ quantityPrint}

     unitPricePrint={unitPricePrint}

     totalPricePrint={totalPricePrint}
  
     
     
     />
     
    </div>
  );
}

export default App;
