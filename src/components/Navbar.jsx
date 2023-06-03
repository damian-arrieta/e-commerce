import CartWidget from "./CartWidget";
import CableIcon from '@mui/icons-material/Cable';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav align-top">
              <NavLink className="nav-link active" aria-current="page" to='/'><CableIcon/></NavLink>
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