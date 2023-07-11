import React from 'react'
import '../CSS/Dashboard_products.css';
const Dashboard_products = (props) => {


  return (
    <div className='dashboard_p'>
      <button className="btn" onClick={()=> props.fun(props.img)}>X</button>
      <div className="product_img"><img src={props.img} alt={props.img} /></div>
      <div className="product_name">{props.name}</div>
      <div className="product_price">{props.newprice}</div>
    </div>
  )
}

export default Dashboard_products;
