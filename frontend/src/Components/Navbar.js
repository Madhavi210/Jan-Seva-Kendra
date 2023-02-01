import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {


  // const [service, setService] = useState([]);

  // useEffect(() => {
  //   getServices();
  // }, []);

  // const getServices = async () => {
  //   let result = await fetch('http://localhost:5000/poolclient', {
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   });
  //   console.log(result);
  //   result = await result.json();
  //   // console.log(result.result)
    
  //   setService(result);
  // }

 

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <span className=" fs-3 fw-bold">
            <i className="fas fa-clipboard-list"></i>
            <span> Digital Token Generation</span>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <span class="navbar-text">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-lg-0 ">
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>

                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/services" style={{ textDecoration: "none" }}>
                    Services
                  </Link>
                </li>

                                 

                  {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a className="dropdown-item"><Link to="/services" style={{ textDecoration: "none" }}>
                       Aadhar Card
              </Link></a></li> </ul> */}

                  {/* {
                    console.log(service.result[0])
                  }
                  </ul> */}

                  {/* {
            service.map((item,index)=>{
            //   <ul class="dropdown-menu" aria-labelledby="navbarDropdown">  
            //   <li><a className="dropdown-item"><Link to="/services" style={{ textDecoration: "none" }}>
            //           {item.s_name}
            //         </Link></a></li>
           
            // </ul>

            <ul key={item._id}>
              <li>{item.result.s_name}</li>
            </ul>
            })
          } */}

               
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/Contact" style={{ textDecoration: "none" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
