import React, { useEffect, useState } from 'react';
import '../CSS/Main.css';
import Navbar from '../JS/Navbar';
import Home from '../JS/Home';
import ProductPage from './ProductPage';
import {Route, Routes } from 'react-router-dom';
import Log from './Log';
import Signup from './Signup';
import LoginState from '../../createContext/LoginState';
import axios from 'axios';
import Dashboard from './Dashboard';
import Myorder from './Myorder';
import Search from './Search';




const Main = () => {

    const [temp, setTemp] = useState([]);
    const getData = async () => {
        let res = await axios.get("http://localhost:8080/api/showproducts");
        console.log(res);
        setTemp(res.data);      
        
    }
    useEffect(() => {
         getData();
    }, [])

   
    
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("order", JSON.stringify({}));
    return (
        <div className="qwer">
            <LoginState>
                <div className='navcss'>
                    <Navbar />
                </div>

                <Routes>
                    <Route path='/' element={<Home data={temp} />} />
                    <Route path='/productpage' element={<ProductPage data={temp} />} />
                    {/*<Route path='/singleproductpage' element={<SingleProductPage />} />*/}
                    <Route path='/log' element={<Log />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/cart' element={<Dashboard />} />
                    <Route path='/myorder' element={<Myorder />} />
                    <Route path='/search' element={<Search data={temp}/>} />
                </Routes>
            </LoginState>
        </div>
    )

}
export default Main;
