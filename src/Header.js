
import Navigation from "./Navigation";
import Slider from './Slider'

function Header(props) {
    return(
        <div className="header">
            <Navigation />
            <Slider />
        </div>
    );
}

export default Header;