import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ItemList = ({itemsData}) => {
  return (
    <Row>
        
        {
            itemsData.length >= 1 ? (itemsData.map((item)=>{
                return (<Col sm="12" className='mb-2'>
                <Card key={item.id} className='d-flex flex-row'>
                    <Card.Img className='img-item' variant="top" src={item.imgUrl} />
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-between'>
                            <div className='item-title'>{item.title}</div> 
                            <div className='item-price'>{item.price}</div> 
                            </Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>)

            })) : <h2>لا يوجد بيانات</h2>
        }

        
    </Row>
  )
}

export default ItemList
