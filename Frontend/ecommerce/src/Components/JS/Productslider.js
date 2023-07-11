
import Card from '../JS/Card';
import '../CSS/Productslider.css';
import loginContextLogin from '../../createContext/createContextLogin';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const Productslider = (props) => {
    const state=useContext(loginContextLogin);

    const handleNext = () => {
      
        let box = document.getElementById(props.id);
        let w = box.clientWidth;
        box.scrollLeft = box.scrollLeft + (w * 0.6);

    }
    const handlePrevious = () => {
       
        let box = document.getElementById(props.id);
        let w = box.clientWidth;
        box.scrollLeft = box.scrollLeft - (w * 0.6);

    }
    let list=props.data;

    let localStoragecart=[];
    const navigate=useNavigate();
    const handleAddToCart=(i)=>
    {
        if(state.loginFlag==false)
        {
            alert("login to proceed");
            navigate("/log");
            return

        }
        localStoragecart=JSON.parse(localStorage.getItem('cart'));
        localStoragecart.push(i);
        localStorage.setItem("cart", JSON.stringify(localStoragecart));

    }
    //list1.filter((i) => i.name != nm);

    return (
        <div className='slider_container'>
            <h1 className='title_of_slider'>{props.title}</h1>

            <button className='pre_btn' onClick={handlePrevious}><p>&lt;</p></button>
            <button className='next_btn' onClick={handleNext}><p>&gt;</p></button>

            <div className="slider_card_container" id={props.id}>
                {
                    list ?  
                        list.map((i) => <Card fun={handleAddToCart} id={i.id} name={i.name} description={i.description} img={i.img} oldprice={i.oldprice}
                         newprice={i.newprice} category={i.category} rating={i.rating} />)
                        : null
                }

            </div>
        </div>
    )
}
export default Productslider;