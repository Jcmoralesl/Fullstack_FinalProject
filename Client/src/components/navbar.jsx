import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function NavBar () {

    const {isAuthenticated, logout, user} = useAuth();

    return (
        <nav className="bg-blue-500 my-1 flex justify-between py-5 px-10 rounded-lg"> 
            <Link to='/'>
                <h1 className="text-2xl font-bold text-white">Memorium Alert</h1>
            </Link>
            <ul className="flex gap-x-9">
                {isAuthenticated ? (
                    <>
                        <li className="font-medium">
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to='/add-notes'
                            className="bg-teal-500 px-4 py-1 rounded-sm text-black">Add Notes</Link>
                        </li>
                        <li className="font-medium">
                            <Link to='/' onClick={()=>{
                            logout();}}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'
                            className="bg-teal-500 px-4 py-1 rounded-sm text-black">Login</Link>
                        </li>
                        <li>
                            <Link to='/register'
                            className="bg-teal-500 px-4 py-1 rounded-sm text-black">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;

