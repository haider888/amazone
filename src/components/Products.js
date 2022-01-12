import React,{ useState,useEffect } from 'react'
import './style/product.css'
import { Card, Button } from 'react-bootstrap';
import axios from "axios";


function Products({handleAddProduct}) {
    const [fakeStore, setFakeStore] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setFakeStore(res.data)
        })

    },[])
   

    return (
        <div>
            <div className="productTitle"><h1>Our Products</h1></div>
           
            <div className="products">
            
                    {fakeStore.map((values)=>{
            
                        return(
                            <div className='prolist'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='proImg' src={values.image} />
                        <Card.Body>
                            <Card.Title className='title'>{values.title}</Card.Title>
                            <Card.Text className='desc'>
                                {values.description}
                            </Card.Text>
                            <div className='item-price'>
                                <h3>{values.price}</h3>
                            </div>
                            <Button variant="primary" onClick={()=>handleAddProduct(values)}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                            </div>
                        )
                    })}
                    
                </div>
            
        </div>
    )
}

export default Products
