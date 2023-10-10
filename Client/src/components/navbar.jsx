import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function NavBar () {

    const {isAuthenticated, logout, user} = useAuth();

    return (
        <nav className="bg-blue-500 my-1 flex justify-between py-5 px-10 rounded-lg"> 
            <Link to='/'>
                <h1 className="text-2xl font-bold">Memorium Alert</h1>
            </Link>
            <ul className="flex gap-x-10">
                {isAuthenticated ? (
                    <>
                        <li>
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to='/add-notes'>Add Notes</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={()=>{
                            logout();}}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;

