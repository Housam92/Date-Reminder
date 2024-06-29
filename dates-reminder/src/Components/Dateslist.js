import React from 'react'
import { Col, Row } from 'react-bootstrap';

 const Dateslist = ({person}) => {
    return (
        <Row className="justify-content-center my-2">
  <Col sm-8>
    <div className="rectangle p-3">
      {person.length ? (person.map((item)=>{

        return (
        <div key={item.id} className="d-flex border-bottom mx-3 pb-3">
        <img className="img-avatar mb-2" src="person.jpg" alt="person"></img>
        <div className="px-3"><p className=""> {item.name}</p>
        <p className="fs-6 fw-normal">{item.date}</p>
        </div>
        </div>
        )
      })):<h2 className='text-center mt-5'>لا يوجد مواعيد متاحه</h2>}
      
    </div>
  </Col>
</Row>
    )
}
export default Dateslist;