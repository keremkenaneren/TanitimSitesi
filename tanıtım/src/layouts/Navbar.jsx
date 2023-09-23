import React from 'react';
import {Link} from "react-router-dom";
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';

function Navbar() {
    return (
        <div>
            <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" v="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Techs</span>
                    </a>
                    <div className="flex items-center">
                        <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline"><CompassCalibrationIcon/></a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl mx-auto px-4 py-3">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 text-sm">
                            <li>
                                <Link to="/" href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" href="#" className="text-gray-900 dark:text-white hover:underline">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" href="#" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                            </li>
                            <li>
                                <Link to="/products" href="#" className="text-gray-900 dark:text-white hover:underline">Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

);
}

export default Navbar;
