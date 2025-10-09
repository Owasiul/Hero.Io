import React from 'react';
import error from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <img src={error} alt="" />
            <Link to='/'>
            <button className="btn my-3 rounded cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;