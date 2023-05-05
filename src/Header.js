
import Navigation from "./Navigation";

function Header(props) {

    return(
        <div className="header">
            <Navigation />
            {props.myname}
        </div>
    );
}

export default Header;