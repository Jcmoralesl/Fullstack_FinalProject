import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';

function LoginPage () {

    const {register, handleSubmit, formState: {errors}} = useForm (); 
    
    const {sigin, errors: siginErrors} = useAuth();

    const onSubmit = handleSubmit(data => {
        sigin(data)
    })

    return (
        <div>
            {
                siginErrors.map((error, i) => (
                    <div key={i}> 
                        {error}
                    </div>
                ))
            }

            <h1>Login</h1>

            <form onSubmit= {onSubmit}>
                
                <input type="email" {... register("email", {required: true})} placeholder="Email"/>
                {
                    errors.email && (
                        <p>
                            Email is required 
                        </p>
                    )
                }

                <input type="password" {... register("password", {required: true})} placeholder="Password"/>
                {
                    errors.password && (
                        <p>
                            Password is required 
                        </p>
                    )
                }

                <button type="submit">
                    Login                    
                </button>

            </form>
            <p>
                Dont have an account? <Link to="/register">Sign up</Link>
            </p>
        </div>
    )
}

export default LoginPage