import React, { useState } from 'react'
import '../CSS/Myorder.css';

import Myorder_pro from './Myorder_pro';
import { Link } from 'react-router-dom';
const Myorder = () => {

    let [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")));
    let products =order.productList;
    

    //console.log(JSON.stringify(localStorage.getItem('order')))
    //console.log(order)
    return (
        <div className="main_order_container">
            {
                JSON.stringify(order) === '{}' ?
                        <div className='orderempty'>
                            <p>Nothing in order</p>
                            <Link to='/'><button className="continue_shopping">Continue Shopping</button></Link>
                        </div>
                  
                    :
                    <div className='order_container'>

                        <h1>My Order</h1>
                        <div className="orders">
                            {
                                products ?
                                    products.map((i) => <Myorder_pro name={i.name} img={i.img} newprice={i.newprice} />) :
                                    null

                            }
                        </div>
                        <div className="totalbill">
                            <h1>Total</h1>
                            <p><b>{order.totalprice}</b></p>
                        </div>
                    </div>


            }

        </div>

    )
}

export default Myorder
