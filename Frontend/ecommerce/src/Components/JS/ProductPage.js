import ProductPageProBlock from "./ProductPageProBlock";
import '../CSS/ProductPage.css'
import { useEffect, useState } from 'react';

const ProductPage = (props) => {
    
    const temp = props.data;
    let [proList_Fashion, setProList_Fashion] = useState();
    let [proList_Mobile, setProList_Mobile] = useState();
    let [proList_Grocery, setProList_Grocery] = useState();
    let [proList_Kitchen, setProList_Kitchen] = useState();


   


    useEffect(() => {
        let t = temp.filter((i) => i.category == "fashion");
        setProList_Fashion(t);
        console.log(t);
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "mobile");
        setProList_Mobile(t);
        console.log(t);
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "grocery");
        setProList_Grocery(t);
        console.log(proList_Grocery);
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "kitchen");
        setProList_Kitchen(t);
        console.log(t);
    }, [])

    

    return (
        <div className="Product_Page">
            <div className="">
                <ProductPageProBlock title="Mobile" data={proList_Mobile} />
            </div>

            <div className="">
                <ProductPageProBlock title="Grocery" data={proList_Grocery} />
            </div>

            <div className="">
                <ProductPageProBlock title="Kitchen" data={proList_Kitchen} />
            </div>

            <div className="">
                <ProductPageProBlock title="Fashion" data={proList_Fashion} />
            </div>

        </div>
    )

}

export default ProductPage;