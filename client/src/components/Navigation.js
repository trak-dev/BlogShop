import {NavLink} from "react-router-dom" ;

const Navigation = () => {
    return(
<div className="navigation">
<NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink>
<NavLink exact to="/Profil" activeClassName="nav-active">Profil</NavLink>
</div>
    );
} 
export default Navigation ; 