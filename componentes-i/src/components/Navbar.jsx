function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" to='/'>Home</a>
              <a className="nav-link" to='/categoria/reproductores' >Reproductores</a>
              <a className="nav-link" to='/categoria/giradiscos' >Giradiscos</a>
              <a className="nav-link" to='/categoria/mesa-de-mezcla' >Mesa de Mezclas</a>
              <a className="nav-link" to='/categoria/accesorios' >Accesorios</a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;