import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            My Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-between w-100 mb-2 mb-lg-0">
              <li className="nav-item flex-grow-1 text-center">
                <a className="nav-link fs-5 px-3" href="#">
                  Servises
                </a>
              </li>
              <li className="nav-item flex-grow-1 text-center">
                <a className="nav-link fs-5 px-3" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item flex-grow-1 text-center">
                <a className="nav-link fs-5 px-3" href="#">
                  Contact
                </a>
              </li>
              <div className="dropdown">
              <li className="nav-item dropdown flex-grow-1 text-center">
                <a
                  className="nav-link dropdown-toggle fs-5 px-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Certificates
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Competitions
                    </a>
                  </li>
                </ul>
              </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
