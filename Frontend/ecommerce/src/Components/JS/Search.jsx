import React, { useContext, useEffect, useState } from 'react'
import '../CSS/Search.css';
import Card from './Card';
import Navbar from '../JS/Navbar';
import { useNavigate } from 'react-router-dom';
import loginContextLogin from '../../createContext/createContextLogin';
const Search = (props) => {

  const state=useContext(loginContextLogin);

  const [temp, setTemp] = useState(props.data);
  const [searchTemp, setSearchTemp] = useState();

  const [searchData, setSearchData] = useState(props.sdata);
  const getSearchInput = (data) => {
    setSearchData(data);
  }
  useEffect(() => {

    let qwer = temp ? temp.filter((i) => i.description.includes(searchData)) : ""
    setSearchTemp(qwer);
    

  }, [searchData])

  let localStoragecart = [];
  const navigate = useNavigate();

  const handleAddToCart = (i) => {
    if (state.loginFlag == false) {
      alert("login to proceed");
      navigate("/log");
      return

    }
    localStoragecart = JSON.parse(localStorage.getItem('cart'));
    localStoragecart.push(i);
    localStorage.setItem("cart", JSON.stringify(localStoragecart));

  }

  return (
    <div className='search_component'>
      <div className='navcss'>
        <Navbar fun={getSearchInput} />
      </div>
      {
        searchData ?
          searchTemp ?
            searchTemp.map((i) => <Card fun={handleAddToCart} id={i.id} name={i.name} description={i.description} img={i.img} oldprice={i.oldprice} newprice={i.newprice} />)
            : null
          :
          temp ?
            temp.map((i) => <Card fun={handleAddToCart} id={i.id} name={i.name} description={i.description} img={i.img} oldprice={i.oldprice} newprice={i.newprice} />)
            : null
      }
    </div>
  )
}

export default Search
