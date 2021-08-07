const Nav = () => {
    return ( 
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-5 pl-5">
        <div className="cont cont1">
          <p className="h2 text-primary space" href="1">Poderío UI</p>
          <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent"
              ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mr-5">
                  <li className="nav-item active mx-3">
                      <a className="nav-link" href="2">Home ></a>
                  </li>
                  <li className="nav-item mx-3">
                      <a className="nav-link" href="3">Link ></a>
                  </li>
                  <li className="nav-item mx-3">
                      <a className="nav-link" href="4">Link ></a>
                  </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 mr-5">
                  <button className="btn btn-primary my-2 my-sm-0" type="submit">Comprar <i className="fas fa-arrow-right"></i></button>
                </form>
              </div>
              </div>
            </nav>
           

     );
}
 
export default Nav;