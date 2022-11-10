import React from "react";
import authService from "./AutenticacionLoginScreen";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "",
      password: "",
      navigateTo: null,
    };
  }

  sendLogin = async (event) => {
    event.preventDefault();
    let data = {
      nickName: this.state.nickName,
      password: this.state.password,
    };
    try {
      let res = await authService.authenticate(data);
      console.log("res", res.data);
      authService.setLoggedUser(res.data);
      // this.setState(navigate("/"))
    } catch (error) {
      console.log(error);
      alert("Error en el login.");
    }
  };

  render() {
    // if(this.state.redirectTo){
    //     return
    //     <Redirect to ={this.state.redirectTo}/>
    // }

    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-secondary text-white">
                <div className="card-body p-5 text-center">
                  <form onSubmit={this.sendLogin}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">
                        Iniciar sesion
                      </h2>
                      <p className="text-white-50 mb-5">Bienvenido!</p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.nickName}
                          onChange={(e) =>
                            this.setState({ nickName: e.target.value })
                          }
                          id="nickName"
                          placeholder="Usuario"
                        />
                        <label className="form-label" for="typeEmailX">
                          Usuario
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          className="form-control"
                          value={this.state.password}
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                          id="password"
                          placeholder="Contraseña"
                        />
                        <label className="form-label" for="typePasswordX">
                          Contraseña
                        </label>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Olvide mi contraseña
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        name="bottonConfirm"
                        id="bottonConfirm"
                      >
                        Iniciar sesion
                      </button>

                      {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
               </div> */}
                    </div>
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                    {/* <div>
                  <p className="mb-0">
                    No tienes cuenta?{" "}
                    <a href="#!" className="text-white-50 fw-bold">
                      Registar
                    </a>
                  </p>
                </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // <div className="container d-flex justify-content-center">
      //   <div className="card mt-5 w-50">
      //     <div className="card-body">
      //       <form onSubmit={this.sendLogin}>
      //         <div className="form-group">
      //           <label htmlFor="nickName">Usuario</label>
      //           <input
      //             type="text"
      //             className="form-control"
      //             value={this.state.nickName}
      //             onChange={(e) => this.setState({ nickName: e.target.value })}
      //             id="nickName"
      //             placeholder="Usuario"
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="password">Contraseña</label>
      //           <input
      //             type="password"
      //             className="form-control"
      //             value={this.state.password}
      //             onChange={(e) => this.setState({ password: e.target.value })}
      //             id="password"
      //             placeholder="Contraseña"
      //           />
      //         </div>
      //         <button type="submit" className="btn btn-primary">
      //           Entrar
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default LoginScreen;
