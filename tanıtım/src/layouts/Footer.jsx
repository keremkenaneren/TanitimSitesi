import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {

    return (
        <div>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                        Techs
                    </a>
                    <br/>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 "><GitHubIcon/></a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6"><LinkedInIcon/></a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 "><InstagramIcon/></a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 "><TwitterIcon/></a>
                        </li>

                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="#" className="hover:underline">Techs™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </div>
    );
}

export default Footer ;
