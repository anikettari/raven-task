import React, { useState } from 'react';
import { Button,Col,Form,Table } from 'react-bootstrap';

import TableRowData from "./TableRowData"


const FormPage =({
    userName,
    setUserName,
    userNamePrint,
    setUserNamePrint,
    organisationName,
    setOrganisationName,
    organisationNamePrint,
    setOrganisationNamePrint,
    greetingMessage,
    setGreetingMessage,
    greetingMessageprint,
    setGreetingMessagePrint,
    thankyouMessage,
    setThankyouMessage, 
    thankyouMessagePrint, 
    setThankyouMessagePrint,
    nameOfTheProject,
    setNameOfTheproject,
    projectNamePrint,
    setProjectNamePrint,
    quantity,
    setQuantity,
    quantityPrint,
    setQuantityPrint,
    unitPrice,
    setUnitPrice,
    unitPricePrint,
    setUnitPricePrint,
    totalPricePrint,
    setTotalPricePrint,
})=> {

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userName);
        console.log(organisationName);
        console.log(greetingMessage);
        console.log(thankyouMessage);
        console.log(nameOfTheProject)
        console.log(quantity);


        setUserNamePrint(
            [...userNamePrint,{text:userName,id:Math.random()*1000} ]
        );
        setOrganisationNamePrint(
            [...organisationNamePrint,{op:organisationName,id:Math.random()*1000} ]
        );
        setGreetingMessagePrint(
            [...greetingMessageprint,{greet:greetingMessage,id:Math.random()*1000} ]
        );
        setThankyouMessagePrint(
            [... thankyouMessagePrint,{ty:thankyouMessage,id:Math.random()*1000} ]
        );

       

      setProjectNamePrint(
        [...  projectNamePrint,{projectName:nameOfTheProject,id:Math.random()*1000} ]
        
    );

    setQuantityPrint(
      [...   quantityPrint,{quantitynum:quantity,id:Math.random()*1000} ]
      
  );


  setUnitPricePrint(
    [...  unitPricePrint,{uprice:unitPrice,id:Math.random()*1000} ]
    
);

setTotalPricePrint(
  [...   totalPricePrint,{totalPrice:total,id:Math.random()*1000} ]
  
);




        setUserName("");
        setOrganisationName("");
        setGreetingMessage("");
        setThankyouMessage("");
        setNameOfTheproject("");
        setQuantity("");
        setUnitPrice("");
        setTotal("");
        

    }
    const[total,setTotal]=useState(unitPrice)

    const calculate = () =>{
      setTotal(quantity*unitPrice);
    }
   

    return (
        <div className="p-5">
        <Form>
        
  

  <Form.Group >
    <Form.Label>Customer Name</Form.Label>
    <Form.Control placeholder="Customer Name" type='text' value={userName} onChange={(e)=> setUserName(e.target.value)} />
  </Form.Group>

  <Form.Group >
    <Form.Label>Organisation Name</Form.Label>
    <Form.Control placeholder="Organisation Name"  type='text' value={organisationName} onChange={(e)=> setOrganisationName(e.target.value)} />
  </Form.Group>
  <div className='pt-3 pb-3'>
  
  </div>
 

  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Greeting Message for the Organisation</Form.Label>
  <Form.Control as="textarea" rows={5} type='text' value={greetingMessage} onChange={(e)=> setGreetingMessage(e.target.value)} />
</Form.Group>

  <Form.Row>
   
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item Description</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td> 
      <td>
      <Form.Group>
      <Form.Control type="text" placeholder="Name of the project"  value={ nameOfTheProject} onChange={(e)=> setNameOfTheproject(e.target.value)}/>
      </Form.Group>
      </td>
      <td>
      <Form.Group>
      <Form.Control type="text" placeholder="Quantity"  value={ quantity} onChange={(e)=> setQuantity(e.target.value)}/>
      </Form.Group>
      </td>

     
      <td> <Form.Group>
      <Form.Control type="text" placeholder="Price of the Product"  value={ unitPrice} onChange={(e)=> setUnitPrice(e.target.value)}/>
    </Form.Group></td>
    <td> 
    {total}
    </td>
    <td>
    <Button onClick={calculate}>+</Button>
    </td>
    </tr>
    
   
    <tr>
    <td  colSpan="4">SUBTOTAL:</td>
    <td></td>
    </tr>

    <tr>
    <td colSpan="4">TOTAL:</td>
    <td>{total}</td>
   
    </tr>


  </tbody>
</Table>
  </Form.Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Thankyou Message For the Organisation</Form.Label>
  <Form.Control as="textarea" rows={2}  type='text' value={thankyouMessage} onChange={(e)=> setThankyouMessage(e.target.value)}/>
</Form.Group>
  

  

  <Button variant="primary" type="submit"  onClick={handleSubmit}>
    Submit
  </Button>
</Form>




            
        </div>
    )
}

export default FormPage;
