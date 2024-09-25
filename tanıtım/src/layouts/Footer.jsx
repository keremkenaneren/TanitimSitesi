import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <footer className="p-4 bg-blue-500 md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center">
                {/* Brand Name */}
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white mb-4">
                    İrfan Vinç Kiralama
                </a>

                {/* Social Media Icons */}
                <ul className="flex justify-center items-center mb-6 space-x-4">
                    <li>
                        <a href="https://www.instagram.com/irfan_vinckiralama/" className="text-white hover:text-yellow-300 transition">
                            <InstagramIcon fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/people/Irfan-Ozturk/pfbid02UidTSWC3KueVkgsvugjjFaTAWmDANkkBJXMbRAJ8nbFh5F1Ez2pZ7j8R73uK9L7l/?ref=xav_ig_profile_web" className="text-white hover:text-yellow-300 transition">
                            <FacebookIcon fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+905344666200" className="text-white hover:text-yellow-300 transition">
                            <WhatsAppIcon fontSize="large" />
                        </a>
                    </li>
                </ul>

                {/* Copyright Text */}
                <span className="text-sm text-white sm:text-center">
                    © <a href="#" className="hover:underline">İrfan Vinç Kiralama™</a>. Her hakkı saklıdır.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
