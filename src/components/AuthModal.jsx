import '../assets/styles/auth-modal.css'

const AuthModal=()=>{
    return(
        <section className="auth__modal">
            <div className="modal__flex">
                  <ul>
                    <li><h4>Login</h4></li>
                    <li><label htmlFor="user__name">User name</label></li>
                    <li><input type="text" id="user__name" placeholder='Enter name ... ' /></li>
                    <li><label htmlFor="user__password">User password</label></li>
                    <li><input type="password" id="user__password" placeholder='Enter password ... '/></li>
                    <li><button>Login</button></li>
                  </ul>
            </div>
        </section>
    )
}
export default AuthModal;