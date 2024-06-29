import React from 'react'
import { Col, Row } from 'react-bootstrap';

 const Datescount = ({person}) => {
    return (
        
           
<Row className="justify-content-center">
  <Col sm-8 className="text-center">لديك {person.length} مواعيد</Col>
</Row>
      
    )
}
export default Datescount;