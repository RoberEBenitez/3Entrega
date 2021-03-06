function NavBar() {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BeutyCare</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Principal</a>
          <a class="nav-link" href="#">Productos</a>
          <a class="nav-link" href="#">Otros</a>
        </div>
      </div>
    </div>
    </nav>;
    <CartWidget />
  }
  
  export default NavBar;