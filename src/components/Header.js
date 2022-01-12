import React from 'react'
import './style/Header.css'
import { GoSearch } from 'react-icons/go';
import { FiShoppingCart } from 'react-icons/fi';
import { Carousel,Button } from 'react-bootstrap';




const Header = ({lgShow, setLgShow,CartItems}) => {

    console.log('CartItems',CartItems)
    
   
    return (
        <>
            <main >
                <header className="myheader">


                    <div className="nav-bar">
                        <div className="logo">
                            <img src="logo.png" alt="logo" />
                        </div>

                        <div className="searchbar">
                            <form action="">
                                <div className="search">
                                    <input type="text" className='myinput' />
                                    <button className='serachbtn'> <GoSearch className="searchicon"></GoSearch></button>
                                    
                                </div>
                            </form>
                        </div>

                        <div className="cart">
                        <a className='carticon' onClick={() => setLgShow(true)}>
                        <FiShoppingCart className='carticon'/>
                        <span className='quantity'>{CartItems?.length===0? "": CartItems?.length}</span>
                         </a>
                        
                        </div>
                    </div>




                    


                </header>



                





            </main>
        </>
    )
}

export default Header
