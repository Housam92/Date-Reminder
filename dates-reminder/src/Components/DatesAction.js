import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

 const DatesAction = ({onDelete,onView}) => {
    return (
        <Row className="justify-content-center my-2">
  <Col sm-8 className="d-flex justify-content-between">
    <Button onClick={onDelete} className="btn-style pr-3">مسح الكل</Button>
    <Button onClick={onView} className="btn-style pl-3">عرض الكل</Button>

  </Col>
</Row>
    )
}
export default DatesAction;