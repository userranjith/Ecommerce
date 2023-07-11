
import '../CSS/Home.css';
import Sliderafternavbar from '../JS/Sliderafternavbar';
import Productslider from '../JS/Productslider';
import { useEffect, useState } from 'react';


const Home = (props) => {
    const temp=props.data;
    const [proList_Fashion, setProList_Fashion] = useState();
    const [proList_Mobile, setProList_Mobile] = useState();
    const [proList_Grocery, setProList_Grocery] = useState();
    const [proList_Kitchen, setProList_Kitchen] = useState();
    
    useEffect(() => {
        let t = temp.filter((i) => i.category == "fashion");
        let  t1=t.slice(0,20);
        setProList_Fashion(t1);
       
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "mobile");
        let  t1=t.slice(0,20);
        setProList_Mobile(t1);
        
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "grocery");
        let  t1=t.slice(0,20);
        setProList_Grocery(t1);
        
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "kitchen");
        let  t1=t.slice(0,20);
        setProList_Kitchen(t1);
        
    }, [])
    

    return (
        <div className="Home_page">
            <div className="Slider_after_nav_container">
                <Sliderafternavbar />
            </div>

            <div className="pro_slider1_container pro_slider_container">
                <Productslider title="Fashion" id="scroll1" data={proList_Fashion} />
            </div>


            <div className="pro_slider2_container pro_slider_container">
                <Productslider title="Mobile" id="scroll2" data={proList_Mobile} />
            </div>

            <div className="pro_slider3_container pro_slider_container">
                <Productslider title="Grocery" id="scroll3" data={proList_Grocery} />
            </div>

            <div className="pro_slider3_container pro_slider_container">
                <Productslider title="Kitchen" id="scroll4" data={proList_Kitchen} />
            </div>


        </div>
    )

}
export default Home;
