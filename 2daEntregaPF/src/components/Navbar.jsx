import CartWidget from "./CartWidget";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} alt="pioneer" width="120" height="80" className="navbar-brand p-3"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
              <NavLink className="nav-link" to='/categoria/reproductores' >Reproductores</NavLink>
              <NavLink className="nav-link" to='/categoria/giradiscos' >Giradiscos</NavLink>
              <NavLink className="nav-link" to='/categoria/mesa-de-mezcla' >Mesa de Mezclas</NavLink>
              <NavLink className="nav-link" to='/categoria/accesorios' >Accesorios</NavLink>
            </div>
          </div>
            
          <NavLink className="d-flex flex-row-reverse text-white px-5" to='/cart'>
            <CartWidget />
          </NavLink>
        </div>
      </nav>
    )
}

export default Navbar;