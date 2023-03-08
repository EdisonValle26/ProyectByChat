import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <div className="header">
        <nav className="navbar">
            <a href="#login-section">Home</a>
                <a href="#sobremi">About</a>
                <a href="#slider">Images</a>
                <a href="#contacto">Contact</a>
        </nav>
        <form className="search-bar">
            <input type="text" placeholder="Search..."/>
            <button> <i className="bx bx-search"></i></button>
        </form>
      </div>
        <div className="background"></div>
        <div className="container">
                <div className="item">
                    <div className="divLogo">
                        <div className="logobg"></div>
                        <h2 className="logo">ByChat</h2>
                    </div> 
                    <div className="text-item">
                        <h2>Welcome! <br/> <span>
                            To ByChatl
                        </span></h2>
                        <p>Bychat es una aplicación de mensajería en la web confiable y privada, por lo que puedes usarla para mantenerte en contacto fácilmente con amistades y familiares. Bychat funciona en dispositivos móviles y computadoras, permite un chat de uno a uno y chats en grupo.
                        </p>
                        <div className="social-icon">
                            <a href="https://www.facebook.com/andres.valle.0989/"><i className='bx bxl-facebook' ></i></a>
                            <a href="https://www.linkedin.com/in/andres-valle-ruiz-b42337262/"><i className='bx bxl-linkedin' ></i></a>
                        </div>
                    </div>
                </div>    

                <div id="login-section" className="login-section">
                    <div className="form-box login">
                        <form onSubmit={onLogin}>
                            <h2>Sign In</h2>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-user'></i></span>
                                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required/>
                                <label>UserName</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                                <input type="password" name="secret" onChange={(e) => setSecret(e.target.value)} required/>
                                <label>Password</label>
                            </div>
                            <div className="remember-password">
                                <label> <br/> <input type="checkbox"/>Remember Me</label>
                            </div>
                            <button type="submit" className="btn">Login In</button>
                            <div className="create-account">
                                <p>Create A New Account? <a href="#" className="register-link" 
                                    onClick={function noRefCheck(){
                                        const loginsec = document.querySelector('.login-section');
                                        const registerlink = document.querySelector('.register-link');  
                                        registerlink.addEventListener('click',()=>{
                                            loginsec.classList.add('active')
                                        });
                                    }}>Sign Up</a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="form-box register" >
                        <form onSubmit={onSignup}>
                            <h2>Sign Up</h2>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-user'></i></span>
                                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}required/>
                                <label>Username</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-envelope'></i></span>
                                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required/>
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                                <input type="password" name="secret" onChange={(e) => setSecret(e.target.value)}required/>
                                <label>Password</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-user'></i></span>
                                <input type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)} required/>
                                <label>FirtsName</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><i className='bx bxs-user'></i></span>
                                <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)} required/>
                                <label>LastName</label>
                            </div>
                            <div className="remember-password">
                                <label> <br/> <input type="checkbox"/>I agree with this statment</label>
                            </div>
                            <button type="submit" className="btn">Login In</button>
                            <div className="create-account">
                                <p>Already Have An Account?<a href="#" className="login-link" 
                                onClick={function noRefCheck(){
                                    const loginsec = document.querySelector('.login-section');
                                    const loginlink = document.querySelector('.login-link'); 
                                    loginlink.addEventListener('click',()=>{
                                        loginsec.classList.remove('active')
                                    });
                                }}> Sing In</a></p>
                            </div>
                        </form>
                </div>
            </div> 
        </div>
        <div id="sobremi" className="sobremi">
            <div className="container-section">
                <h2>About</h2>
                <p>Bychat utiliza ChatEngine que hace que la creación del chat sea muy fácil para las personas con un presupuesto limitado. Proporcionam una API Rest para alojar sus chats y usuarios. Otros de los componentes que usaron son NodeJS, Axios, Bootstrap, React, Vite y Express. 
                </p>
            </div>
        </div>

        <div id="slider" className="slider">
            <ul>
                <li >
                    <img className="fdimg1"/>
                </li>
                <li>
                    <img className="fdimg2"/>
                </li>
                <li>
                    <img className="fdimg3"/>
                </li>
            </ul>
        </div>


        <div id="contacto" className="contacto">
            <div className="container-section">
                <h2>CONTACTO</h2>
                <div className="fila">
                    <form action="https://formsubmit.co/andres.valle150@gmail.com" method="POST" className="col">
                            <input type="text" placeholder="Escribe tu nombre" name="name" required/>
                            <input type="text" placeholder="Dirección de correo" name="email" required/>
                            <input type="text" placeholder="Asunto" name="subject" required/>
                            <textarea name="comments" id="" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                            <button type="submit" value="Enviar">
                                Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                                <span className="overlay"></span>
                            </button>
                            <input type="hidden" name="_next" value="http://localhost:5173/"/>
                    </form>
                    <div id="col" className="col">
                        <div className="info">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Cdla. Valle de la Flor Mz. 2573 V. 15
                                </li>
                                <li>
                                    <i className="fa-solid fa-mobile-screen"></i>
                                    Contactame: +593 99 7307 943
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    Email: andres.valle150@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <a href="#login-section" className="arriba">
                <i className="fa-solid fa-angles-up"></i>
            </a>
            <div className="redes">
                <a href="https://www.facebook.com/andres.valle.0989/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/andres-valle-ruiz-b42337262/"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </footer>

    </div>
  );
};

export default AuthPage;
