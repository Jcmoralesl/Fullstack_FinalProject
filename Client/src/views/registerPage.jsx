import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage () {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate ("/notes");
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className="bg-blue-800 max-w-md p-10 rounded-md ">
            {
                registerErrors.map((error, i) => (
                    <div key={i}> 
                        {error}
                    </div>
                ))
            }
            <form onSubmit= {onSubmit}>
                <h1 className="text-white text-xl font-bold my-2">Register</h1>
                <input type="text" {...register("username", {required: true})} placeholder="Username"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"/>
                {
                    errors.username && (
                        <p>
                            Username is required 
                        </p>
                    )
                }

                <input type="email" {... register("email", {required: true})} placeholder="Email"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"/>
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

                <button className="bg-blue-300 hover:bg-gray-100 text-blue-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4" type="submit">
                    Register                    
                </button>

            </form>
            <p className="text-white">
                Already have an account? <Link className="bg-blue-500 hover:bg-gray-400 text-white py-2 px-4 rounded mx-2" to="/login">Login</Link>
            </p>
        </div>
        </div>
    )
}

export default RegisterPage