import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({filterFun, itemsCat, selectedName}) => {
console.log(selectedName);

  return (
    <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center'>

        <button
            onClick={()=>filterFun('الكل')} 
            style={{ border: "1px solid #B45B35" }} 
            className={selectedName == "الكل" ? 'btn selected mx-2':'btn mx-2'}>الكل</button>

      { itemsCat.length >= 1 ? (itemsCat.map((item) =>{

        return(
          <div>
            <button key={item.id}
            onClick={()=>filterFun(item.name)} 
            style={{ border: "1px solid #B45B35" }} 
            className={selectedName == item.name ? 'btn selected mx-2':'btn mx-2'}>{item.name}</button>
          </div>
        )
      })) : <h3>لا يوجد عناصر</h3>}

        
        </Col>
    </Row>
  )
}

export default Category
