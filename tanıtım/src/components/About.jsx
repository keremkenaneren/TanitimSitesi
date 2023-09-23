import community from "../assets/istockphoto-1346125184-612x612.jpg"
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';


function About() {

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex items-center justify-center lg:justify-start">
                    <div className="lg:flex">
                        <div className="lg:w-1/2 pr-6">
                            <div className="text-center">
                                <img className="mx-auto p-4 lg:mx-0 rounded opacity-75 hover:opacity-100 transition" src={community} alt="community" />
                            </div>                        </div>
                        <div className="lg:w-1/2">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><CompassCalibrationIcon/> About Us - Techs</h1>
                            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"><i>Reimagining Technology</i> <br/><br/>
                                Techs is a company that provides innovative solutions in the field of technology. Our vision is to use technology to address the needs of society and the business world while shaping the future together.
                                Techs is a company that provides innovative solutions in the field of technology. Our vision is to use technology
                                to address the needs of society and the business world while shaping the future together.</p>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl">
                    <div className="">
                        <div className="">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Our Values</h1>
                            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                1. Innovation: We constantly enhance our work with creative approaches.
                                <br/>
                                2. Solution-Oriented: We turn challenges into opportunities.
                                <br/>
                                3. Community Contribution: We prioritize our social responsibility.
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl">
                    <div className="">
                        <div className="">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Shaping the Future Together</h1>
                            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                At Techs, we focus on creating a better world using the power of technology. Are you ready to shape the future with us?
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default About ;
