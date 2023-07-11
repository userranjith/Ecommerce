import '../CSS/ProductPageProBlock.css';
import Card from './Card';
import loginContextLogin from '../../createContext/createContextLogin';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const ProductPageProBlock = (props) => {
    let list1=props.data;
    const state=useContext(loginContextLogin);
    let localStoragecart=[];
    let navigate=useNavigate();
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
    return (
        <div className="Product_page_pro_block">

            <div className='pro_block'>
                <div className='title_container'><h1>{props.title}</h1></div>
                <div className='cards_block'>
                {
                    list1 ?
                        list1.map((i) => <Card fun={handleAddToCart} id={i.id}  name={i.name} description={i.description} img={i.img} oldprice={i.oldprice} newprice={i.newprice} />)
                        : null
                }
                </div>
            </div>
        </div>
    )
}
export default ProductPageProBlock;