import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function LoginPage () {

    const {register, handleSubmit, formState: {errors}} = useForm (); 
    
    const {sigin, errors: siginErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate()
    const onSubmit = handleSubmit(data => {
        sigin(data)
    })


    useEffect(() => {
        if(isAuthenticated) navigate('/notes')
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-blue-800 max-w-md w-full p-10 rounded-md'>
            {
                siginErrors.map((error, i) => (
                    <div key={i}> 
                        {error}
                    </div>
                ))
            }

            <h1 className='text-xl m-0 text-center text-white'>Login</h1>

            <form onSubmit= {onSubmit}>
                
                <input type="email" {... register("email", {required: true})} placeholder="Email"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-3"/>
                {
                    errors.email && (
                        <p>
                            Email is required 
                        </p>
                    )
                }

                <input type="password" {... register("password", {required: true})} placeholder="Password"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"/>
                {
                    errors.password && (
                        <p>
                            Password is required 
                        </p>
                    )
                }

                <button className="bg-blue-300 hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4" type="submit">
                    Login                    
                </button>

            </form>
            <p className='text-white'>
                Dont have an account? <Link class="bg-blue-500 hover:bg-gray-400 text-white py-2 px-4 rounded mx-2" to="/register">Sign up</Link>
            </p>
            </div>
        </div>
    )
}

export default LoginPage