import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function NavBar () {

    const {isAuthenticated, logout, user} = useAuth()

    return (
        <nav>
            <Link to=''>
                <h1>Memorium Alert</h1>
            </Link>
            <ul>
                {isAuthenticated ? (
                    <>
                    <li>
                    Welcome {user.username}
                    </li>
                    <li>
                    <Link to='/add-notes'>Add Notes</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={() =>logout}>Logout</Link>
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
    )
}

export default NavBar

