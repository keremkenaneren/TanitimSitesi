import { Link } from "react-router-dom";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Navbar() {
    return (
        <div>
            {/* Contact Section */}
            <nav className="bg-gray-100 border-b border-gray-300">
                <div className="flex justify-between items-center p-2 max-w-screen-xl mx-auto">
                    <div className="text-black">
                        <p>
                            <strong>İrfan Vinç Kiralama - İletişim:</strong>{" "}
                            <a
                                href="tel:+905344666200"
                                className="text-blue-500 hover:underline"
                            >
                                +90 534 466 6200
                            </a>
                        </p>
                    </div>
                    <div>
                        <ul className="flex items-center space-x-4 text-black gap-5">
                            <li>
                                <a
                                    href="https://www.instagram.com/irfan_vinckiralama/"
                                    className="text-gray-600 hover:text-blue-500 transition-all"
                                >
                                    <InstagramIcon fontSize="small" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/people/Irfan-Ozturk/pfbid02UidTSWC3KueVkgsvugjjFaTAWmDANkkBJXMbRAJ8nbFh5F1Ez2pZ7j8R73uK9L7l/?ref=xav_ig_profile_web"
                                    className="text-gray-600 hover:text-blue-500 transition-all"
                                >
                                    <FacebookIcon fontSize="small" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Branding Navbar */}
            <nav className="bg-blue-600 border-b border-blue-700">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <span className="text-2xl font-bold text-white hover:text-gray-200 transition-all">
                            İrfan Vinç Kiralama
                        </span>
                    </a>
                    <div className="flex items-center">
                        <a href="#" className="text-white text-lg hover:text-gray-200 transition-all">
                            <PrecisionManufacturingIcon />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Navigation Links */}
            <nav className="bg-gray-100">
                <div className="max-w-screen-xl mx-auto px-4 py-3">
                    <ul className="flex space-x-8 font-medium text-sm">
                        <li>
                            <Link to="/" className="text-gray-900 hover:text-blue-500 transition-all" aria-current="page">Ana Sayfa</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-900 hover:text-blue-500 transition-all">Hakkımızda</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-900 hover:text-blue-500 transition-all">İletişim</Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-gray-900 hover:text-blue-500 transition-all">Hizmetlerimiz</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
