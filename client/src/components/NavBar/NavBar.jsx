import "./NavBar.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { AuthContext } from "../../utils/authContext/AuthContext";
import { logout } from "../../utils/authContext/AuthActions"
function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [movie, setMovie] = useState({});
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/movies/random`, {
                });
                setMovie(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie()
    }, [])

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to="/" className="link">
                        <div className="movieIcon">
                            <MovieFilterIcon />
                        </div>
                    </Link>
                    <Link to="/" className="link">
                        <span>HOME</span>
                    </Link>

                    <Link to="/categories" className="link">
                        <span>CATEGORIES</span>
                    </Link>
                    <Link to={"/moviedetail"} state={{ movie: movie }} className='link'>
                        <span>RANDOM</span>
                    </Link>
                </div>
                <div className="right">
                    <Link to="/grid" className="link">
                        <SearchIcon className="icon Search" />
                    </Link>
                    <LogoutIcon className='icon' />
                    <Link onClick={() => dispatch(logout())} to="/login" className="link">
                        <span >LOG OUT</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar