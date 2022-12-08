import CartWidget from "./CartWidget";

function Navbar() {
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./logo.png" alt="" width="90" height="30" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Reproductores</a>
              <a className="nav-link" href="#">Giradiscos</a>
              <a className="nav-link" href="#">Mesa de Mezclas</a>
              <a className="nav-link" href="#">Accesorios</a>
            </div>
          </div>
          <div className="d-flex flex-row-reverse text-white px-5">
            <CartWidget />
          </div>
        </div>
      </nav>
      </>
    )
}

export default Navbar;