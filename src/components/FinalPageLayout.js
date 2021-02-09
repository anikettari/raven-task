import React from 'react'
import { Table,Row,Col } from 'react-bootstrap';
import UserNameComp from "./UserNameComp";
import CompanyNameComp from "./CompanyNameComp";
import GreetingMessagecomp from './GreetingMessagecomp';
import ThankyouMessageComp from "./ThankyouMessageComp";

import { Button } from 'react-bootstrap';
import NameOfOrganisation from './NameOfOrganisation';
import QuantityComp from './QuantityComp';
import UnitPriceComp from './UnitPriceComp';
import TotalPriceComp from './TotalPriceComp';


const FinalPageLayout=({userNamePrint,organisationNamePrint,greetingMessageprint,thankyouMessagePrint,projectNamePrint, setProjectNamePrint,quantityPrint, unitPricePrint,totalPricePrint})=> {
    return (

         

        <div className="FinalPageStyling p-5 mt-5" >
        <Row>
    <Col lg={6}>
        <h4 >Raven Technolabs</h4>
        <p>Office-802,Rajhans Tower,</p> 
        <p>B/H Shreyash Trade Center,</p>   
        <p>Varaccha Road,Surat-395006</p>  
        <br></br>
        
        <p> +918469536960</p>
        <p>raventechnolabs@gmail.com</p>
        </Col>

        <Col lg={6}>
        <h4>INVOICE</h4>
        <p>  Date 
        
        </p>
        <h6>  
        {
            userNamePrint.map(userNamePr=>(
                <UserNameComp text={userNamePr.text} />
            ))
         } 
            
            </h6>
        <h6>{
            organisationNamePrint.map(organisationNamePr=>(
                <CompanyNameComp op={organisationNamePr.op} />
            ))
         } </h6>
        </Col>
        </Row>
        
       
      
       <div>
       
       <div style={{ borderTop: "1px solid grey " }}></div>
       
        <Row>
        
        
        <Col className="p-5">
        
        {
            greetingMessageprint.map(greetingMessagepr=>(
                <GreetingMessagecomp greet={greetingMessagepr.greet} />
            ))
         }
        </Col>
        </Row>
     </div>
     <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item Description</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>
      {
        projectNamePrint.map(projectNamePri=>(
            <NameOfOrganisation projectName={projectNamePri.projectName} />
        ))
     }
     </td>
      <td> 
      {
        quantityPrint.map(quantityPri=>(
            <QuantityComp quantitynum={quantityPri.quantitynum} />
        ))
     }
     </td>
      <td>
      {
        unitPricePrint.map( unitPricePri=>(
            <UnitPriceComp uprice={unitPricePri.uprice} />
        ))
        }
      
      
      </td>
      <td>{
        totalPricePrint.map( totalPricePri=>(
            <TotalPriceComp totalPrice={ totalPricePri.totalPrice} />
        ))
        }</td>
    </tr>
    
  </tbody>
</Table>
<p>{
  thankyouMessagePrint.map(thankyouMessagePri=>(
      <ThankyouMessageComp ty={thankyouMessagePri.ty} />
  ))
} </p>

<Button>print</Button>

   
            
        </div>
    )
}

export default FinalPageLayout
