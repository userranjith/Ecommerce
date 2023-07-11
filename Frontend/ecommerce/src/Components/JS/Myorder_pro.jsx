import React from 'react'
import '../CSS/Myorder_pro.css';

const Myorder_pro = (props) => {
  
  
  
  
    return (
        <div className='myorder_product'>
        <div className="product_img"><img src={props.img} alt={props.img} /></div>
        <div className="product_name">{props.name}</div>
        <div className="product_price">{props.newprice}</div>
      </div>
  )
}

export default Myorder_pro
