import { Link, NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';
import { useEffect, useState } from 'react';
import loginContextLogin from '../../createContext/createContextLogin';
import { useContext } from 'react';
const Navbar = (props) => {

    const Flag = useContext(loginContextLogin);




    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    useEffect(() => {
        setUser({ ...user, username: localStorage.getItem("username") });
        setUser({ ...user, password: localStorage.getItem("password") });
        console.log(user)


    }, [])

    const [searchInput,setSearchInput]=useState();
    
    const handleInput=(e)=>
    {
        setSearchInput(e.target.value);
        props.fun(searchInput)
    }

    const handleLogout = () => {
        setUser({ ...user, username: '' });
        setUser({ ...user, password: '' });

        //localStorage.clear();
        Flag.toggleFlag();


    }

    return (
        <nav>
            <div className="nav_container">
                <Link to='/'>  
                <div className='logo_container'>
                    <img src='./assest/Logo.png' alt='Logo' />
                </div></Link>
                <div className='search_container'>
                    <Link to={'/search'}>
                        <input type="text" placeholder='Search for products' onChange={handleInput} />
                    </Link>
                    
                </div>
                <div className='list_container'>
                    <ul className='list'>
                        <NavLink to='/' className='nav_link_route' > <li>Home</li></NavLink>
                        <NavLink to='/productpage' className='nav_link_route'>  <li>Product</li></NavLink>


                    </ul>
                </div>
                <div className='login_container'>

                    {
                        Flag.loginFlag == false ?
                            <div className='xyz'>
                                <NavLink to='/signup'> <button className='signup_button' >Sign Up</button></NavLink>
                                <Link to='/log'>  <button className='login_button'>Login</button></Link>
                            </div> :
                            <div className='xyz'>
                                <NavLink to='/cart'> <i class="fa-sharp fa-solid fa-cart-shopping cart" ></i></NavLink>
                                <NavLink to='/myorder' className='nav_link_route' > My Order</NavLink>
                                <NavLink to='/'>  <button className='logout_button' onClick={handleLogout}>Logout</button></NavLink>
                            </div>
                    }


                </div>

            </div>
        </nav>
    )

}
export default Navbar;
