import React from 'react';
import errorpic from '../../images/404.png';
import { Link } from 'react-router-dom';
import '../../assets/Styles/NotFound/NotFound.css';


const NotFound = () => {
    return (
        <div className="notfound">

            <div>
                <img className="w-25" src={errorpic} alt="" />
                <h1>Oops! Page Not Found</h1>
                <h3>It seems that the page you are looking for no longer exists!</h3>
            </div>
            <Link to="/login">
                <button>Go Back</button>
            </Link>
        </div>

    );
};

export default NotFound;