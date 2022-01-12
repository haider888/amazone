import './App.css';
import React,{useState} from 'react'
import Header from './components/Header';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Slider from './components/Slider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [lgShow, setLgShow] = useState(false);
  const [CartItems, setCartItems]=useState([])



  const handleAddProduct=(values)=>{
    
    toast(`Add to Cart :${values.title}
            Price: ${values.price}`
          
      );
    const productExist=CartItems.find((item)=>item.id===values.id)
    if(productExist){
      setCartItems(CartItems.map((item)=>item.id===values.id?
      {...productExist, quantity:productExist.quantity+1}:item));
    }else{
      setCartItems([...CartItems,{...values,quantity:1}]);
    }

  }





  // const handleAddProduct=(values)=>{
  //   toast("Wow so easy!");
  //   const productExist=CartItems.find((item)=>item.id===values.id)
  //   if(productExist){
  //     setCartItems(CartItems.map((item)=>item.id===values.id?
  //     {...productExist, quantity:productExist.quantity+1}:item));
  //   }else{
  //     setCartItems([...CartItems,{...values,quantity:1}]);
  //   }

  // }

  const handleDelete=(id,items)=>{

    toast(`Remove frome The Cart :${items.title}
            Price: ${items.price}`
          
      );
    const myitems=CartItems.filter((elements,i)=>elements.id!==id);
    setCartItems(myitems)

  }

  const handleRemoveProduct =(values)=>{
    const productExist=CartItems.find((item)=>item.id===values.id)
    if(productExist.quantity===1){
      setCartItems(CartItems.filter((item)=>item.id===values.id))

    }else{
      setCartItems(
        CartItems.map((item)=>item.id===values.id?{...productExist, quantity:productExist.quantity-1}:item)
      )
    }

  }

  return(
    <div>
      <Header lgShow={lgShow} setLgShow={setLgShow} CartItems={CartItems} />
      <Slider />
      <Products handleAddProduct={handleAddProduct}/>
      <ToastContainer />
      <Cart lgShow={lgShow} setLgShow={setLgShow} CartItems={CartItems} handleAddProduct={handleAddProduct} handleDelete={handleDelete} handleRemoveProduct={handleRemoveProduct} />
    </div>
  );
}

export default App;
