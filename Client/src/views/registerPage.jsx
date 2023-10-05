import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            {
                registerErrors.map((error, i) => (
                    <div key={i}> 
                        {error}
                    </div>
                ))
            }
            <form onSubmit= {onSubmit}>
                <input type="text" {...register("username", {required: true})} placeholder="Username"/>
                {
                    errors.username && (
                        <p>
                            Username is required 
                        </p>
                    )
                }

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
                    Register                    
                </button>

            </form>


        </div>
    )
}

export default RegisterPage