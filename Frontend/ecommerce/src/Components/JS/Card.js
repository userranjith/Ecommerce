import { Link } from 'react-router-dom';
import '../CSS/Card.css';



const Card = (props) => {

    const data = {
        "id":props.id,
        "name": props.name,
        "description": props.description,
        "newprice": props.newprice,
        "img":props.img
    }


    return (

        <div className="card_container" >
            <div className="image_section flex">
                <img src={props.img} />
            </div>
            <div className="detail_section flex">
                <div className="detail_section_left flex">
                    <div className="product_name">
                        <p>{props.name}</p>
                    </div>
                    <div className="description">
                        <p>{props.description}</p>
                    </div>
                    <div className="price flex">
                        <div className='price_cut'>
                            <p><del> {props.oldprice} </del></p>
                        </div>
                        <div className='price_final'>
                            <p> {props.newprice} </p>
                        </div>
                    </div>
                </div>
                <div className="detail_section_right flex">
                    <button className='button_view' onClick={() => props.fun(data)}> Add </button>
                </div>
            </div>

        </div>

    );
}

export default Card;
