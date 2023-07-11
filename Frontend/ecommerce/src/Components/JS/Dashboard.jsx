import React, { useEffect, useState } from 'react'
import Dashboard_products from './Dashboard_products'

import '../CSS/Dashboard.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const localLogin = JSON.parse(localStorage.getItem('login'));


    let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));


    let [tprice, setTprice] = useState(0);
    let t = 0;
    let navigate = useNavigate();
    useEffect(() => {
        if (cart.length == 0) {
            console.log("list is empty")
        }
        else {
            cart.forEach(i => { t = t + i.newprice })
            setTprice(t);
            console.log(t)

        }
    })

    


    let [name, setName] = useState();
    let [mobile, setMobile] = useState();
    let [address, setAddress] = useState();


    const handleOrder = async () => {
        let productList = [];

        cart.map((i) => {
            productList.push(i.id)
        })
        let a = JSON.stringify(productList)



        let order = {

            "name": name,
            "mobile": mobile,
            "address": address,
            "productsList": a,
            "totalprice": tprice
        }


        let res = await axios.post("http://localhost:8080/api/addorder", order);

        let orderL = {

            "name": name,
            "mobile": mobile,
            "address": address,
            "productList": cart,
            "totalprice": tprice
        }
        localStorage.setItem("order", JSON.stringify(orderL));

        setCart({
            name: '',
            img: '',
            price: ''

        });
        localStorage.setItem("cart", JSON.stringify([]));
        setCart(JSON.parse(localStorage.getItem("cart")));
        navigate('/myorder');
    }


    const remove = (i) => {
        let cart1Temp = cart.filter((item) => item.img != i);
        setCart(cart1Temp);
        localStorage.setItem("cart", JSON.stringify(cart1Temp));
        cart.forEach(i => { t = t + i.newprice })
        setTprice(t);
    }
    return (
        <div className="main_container">
            {
                cart.length != 0 ?
                    <>
                        <div className='dashboard full'>

                            <div className="username">Hello, {localLogin.name}</div>
                            <div className="pro">
                                {
                                    cart.length != 0 ?

                                        cart.map((i) =>

                                            <Dashboard_products fun={remove} name={i.name} img={i.img} newprice={i.newprice} />)
                                        :
                                        null

                                }

                            </div>
                            <div className='total'>
                                <div>Total</div>
                                <div>{tprice}</div>
                            </div>
                            <div className="form_order">
                                <div className="detail_form">
                                    <input className='taking_details' placeholder='Name' type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                                    <input className='taking_details' placeholder='Mobile No.' type="text" name="mobile" id="mobile_number" onChange={(e) => setMobile(e.target.value)} />
                                    <textarea className='taking_details' placeholder='Address' onChange={(e) => setAddress(e.target.value)} name="address" id="address" ></textarea >
                                    <button className='order_btn' onClick={handleOrder}>Order</button>
                                </div>
                                <div className="order_btn_container">

                                </div>
                            </div>

                        </div>
                    </> :
                    <div className='dashboard emppty'>
                        <p>Cart is empty</p>
                        <Link to='/'><button className="continue_shopping">Continue Shopping</button></Link>
                    </div>
            }
        </div>








    )
}

export default Dashboard
