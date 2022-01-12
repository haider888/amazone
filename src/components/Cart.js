import React from 'react'
import { Modal } from 'react-bootstrap';
import './style/Cart.css'
import Header from './Header';

function Cart({ lgShow, setLgShow, CartItems ,handleAddProduct,handleRemoveProduct,handleDelete}) {

    const totalPrice=CartItems.reduce((price, item)=> Math.round(price+item.quantity*item.price) ,0);
    return (
        <>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Header />
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className='cartTitle'>
                        Shopping CART
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="cart-item-container">
                        {CartItems.map((items) => (

                            <div className="item-info" key={items.id}>

                                <div className="product-img">
                                    <img src={items.image} alt="img" className='pro-img' />
                                </div>
                                <div className="product-title">
                                    <h6>{items.title}</h6>
                                </div>
                                <div className="add-minus-quantity">
                                   <button  onClick={()=>handleAddProduct(items)}><i class="fas fa-plus add" ></i></button>
                                    <input type="text" value={items.quantity}  />
                                    <button onClick={()=>handleRemoveProduct(items)}><i class="fas fa-minus minus" ></i></button>
                                    
                                </div>
                                <div className="price">
                                   
                                    <h5>{items.quantity}*${items.price}</h5>
                                    
                                </div>
                                <div className="remove-item">
                                    <button onClick={()=>handleDelete(items.id,items)}><i class="fas fa-trash remove"></i></button>

                                </div>
                                <hr/>
                            </div>
                            


                        ))}
                        








                        <div className="cart-total">

                            <h3>Cart Total:${totalPrice}</h3>
                        </div>
                    </div>


                </Modal.Body>
            </Modal>


        </>
    )
}

export default Cart
