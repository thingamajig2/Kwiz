import "./header.scss";
import logo from '../../logo.png';

const Header = () =>{
    return (
        <div className = 'header'> 
            <img className = 'logo' src = {logo} alt = "logo"/>
        </div>
    );
};
export default Header;