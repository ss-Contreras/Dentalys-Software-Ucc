import React from "react";
import authService from "./AutenticacionLoginScreen";
// import { useNavigate } from "react-router-dom";



class LoginScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      nickName: "",
      password: "",
      navigateTo: null
    };
  }

  sendLogin = async(event) => {
    event.preventDefault();
    let data = {
      nickName: this.state.nickName,
      password: this.state.password,
      
    };
    try{
        let res = await authService.authenticate(data)
        console.log("res", res.data)
        authService.setLoggedUser(res.data)
        // this.setState(navigate("/"))
    } catch (error){
        console.log(error)
        alert("Error en el login.")
    }
  };

  render() {
    // if(this.state.redirectTo){
    //     return
    //     <Redirect to ={this.state.redirectTo}/>
    // }

    return (
      <div className="container d-flex justify-content-center">
        <div className="card mt-5 w-50">
          <div className="card-body">
            <form onSubmit={this.sendLogin}>
              <div className="form-group">
                <label htmlFor="nickName">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nickName}
                  onChange={(e) => this.setState({ nickName: e.target.value })}
                  id="nickName"
                  placeholder="Usuario"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  id="password"
                  placeholder="Contraseña"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
