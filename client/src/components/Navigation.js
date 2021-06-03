import {NavLink} from "react-router-dom" ;

const Navigation = () => {
    return(
<div className="navigation">
<NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink>
<NavLink exact to="/Profil" activeClassName="nav-active">Profil</NavLink>
<NavLink exact to="/Form" activeClassName="nav-active">Connexion</NavLink>
</div>
    );
} 
export default Navigation ; 