import havalıfoto from "../assets/irfanmakina/havalifoto.jpg";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="lg:flex items-center justify-center lg:justify-start">
                    {/* Text Section */}
                    <div className="lg:w-1/2">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl flex items-center">
                            <PrecisionManufacturingIcon className="mr-2" /> Bizimle İletişime Geçin
                        </h1>
                        <p className="text-lg font-normal text-gray-500 lg:text-xl mb-6">
                            İrfan Vinç Kiralama olarak vinç kiralama ihtiyaçlarınızı karşılamak için buradayız. Sorularınız, talepleriniz veya herhangi bir konuda bizimle iletişime geçmekten çekinmeyin. Size en hızlı şekilde yardımcı olmak için buradayız.
                        </p>
                        {/* Contact Info Section */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8 shadow-md">
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">İletişim Bilgilerimiz</h2>
                            <div className="text-lg text-gray-600 mb-4">
                                <p><strong>Telefon:</strong> <a href="tel:+905344666200" className="text-blue-500 hover:underline">+90 534 466 62 00</a></p>
                                <p><strong>E-posta:</strong> <a href="mailto:irfan1867@gmail.com" className="text-blue-500 hover:underline">irfan1867@gmail.com</a></p>
                            </div>
                            <p className="text-lg text-gray-600">
                                Daha fazla bilgi için bizi arayabilir veya e-posta gönderebilirsiniz. Size en iyi hizmeti sunmak için buradayız.
                            </p>
                        </div>
                        {/* Social Media Links */}
                        <div className="mb-8">
                            <ul className="flex justify-center gap-5 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                                <li className="bg-[#E1306C] p-4 rounded-full">
                                    <a
                                        href="https://www.instagram.com/irfan_vinckiralama/"
                                        className="text-white hover:underline"
                                    >
                                        <InstagramIcon fontSize="large" />
                                    </a>
                                </li>
                                <li className="bg-[#1877F2] p-4 rounded-full">
                                    <a
                                        href="https://www.facebook.com/people/Irfan-Ozturk/pfbid02UidTSWC3KueVkgsvugjjFaTAWmDANkkBJXMbRAJ8nbFh5F1Ez2pZ7j8R73uK9L7l/?ref=xav_ig_profile_web"
                                        className="text-white hover:underline"
                                    >
                                        <FacebookIcon fontSize="large" />
                                    </a>
                                </li>
                                <li className="bg-[#25D366] p-4 rounded-full">
                                    <a
                                        href="https://wa.me/+905344666200"
                                        className="text-white hover:underline"
                                    >
                                        <WhatsAppIcon fontSize="large" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 lg:pl-8">
                        <div className="text-center">
                            <img
                                className="mx-auto p-4 lg:mx-0 rounded-lg shadow-lg transition"
                                src={havalıfoto}
                                alt="İrfan Vinç Kiralama Kartvizit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
