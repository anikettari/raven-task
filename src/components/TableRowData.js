import React from 'react'
import { Col,Form } from 'react-bootstrap';

function TableRowData() {
    return (
        <div>
        <tr>
      <td>1</td> 
      <td>
      <Form.Group>
      <Form.Control type="text" placeholder="Name of the project" />
      </Form.Group>
      </td>

      <td> 
      <Form>
      <Form.Row className="align-items-center">
        <Col xs="auto" className="my-1">
          <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
            Preference
          </Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="0">Choose...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>

          </Form.Control>
        </Col>
       
     
      </Form.Row>
    </Form>
    </td>
      <td> <Form.Group>
      <Form.Control type="text" placeholder="Price of the Product" />
    </Form.Group></td>
    <td> 
    <Form.Group>
      <Form.Control type="text" />
    </Form.Group></td>
    </tr>
            
        </div>
    )
}

export default TableRowData
