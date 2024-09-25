import { Link } from "react-router-dom";
import Carousel from './Carousel.jsx';
import makina from "../assets/irfanmakina/c2.jpg";
import isiklandırma from "../assets/irfanmakina/isiklandirma.jpg";



function Home() {
    return (
        <div>
            <Carousel />
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    {/* Jumbotron Section */}
                    <div className="bg-blue-100 border border-blue-300 rounded-lg p-12 text-center mb-12">
                        <h1 className="text-blue-900 text-5xl font-extrabold mb-6">
                            İrfan Vinç Kiralama
                        </h1>
                        <p className="text-lg text-blue-800 mb-6">
                            24 metre den 50 metreye kadar sepetli platformlarımızla vinç kiralama hizmetleri sunuyoruz.
                            Güvenilir ve profesyonel çözümlerimizle projelerinize destek oluyoruz.
                            İhtiyaçlarınıza uygun vinç ve platform çözümleri ile işlerinizi daha hızlı ve güvenli bir şekilde tamamlamanıza yardımcı oluyoruz.
                        </p>
                        <p className="text-lg text-blue-800 mb-6">
                            Uzun yıllara dayanan deneyimimiz ve modern ekipmanımızla, inşaat, enerji, sanayi ve altyapı projeleriniz için en iyi çözümleri sunuyoruz.
                        </p>
                        <Link to="/about" className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition">
                            Hakkımızda
                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12M9 1l4 4-4 4" />
                            </svg>
                        </Link>
                        <img className="mt-5 rounded-md ring-8 ring-blue-400 mx-auto w-[45rem] h-auto shadow-lg" src={makina} alt="Yandan Görünüm" />
                    </div>

                    {/* Cards Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 shadow-md">
                            <h2 className="text-blue-900 text-4xl font-extrabold mb-4">İletişim</h2>
                            <p className="text-lg text-blue-700 mb-6">
                                Sorularınızı yanıtlamaktan memnuniyet duyarız! Projelerinizle ilgili tüm detaylar ve vinç kiralama ihtiyaçlarınız için uzman ekibimizle iletişime geçin.
                            </p>
                            <p className="text-lg text-blue-700 mb-6">
                                Size en hızlı ve doğru bilgiyle yardımcı olmak için bir telefon kadar uzağınızdayız. Hemen şimdi bize ulaşın, vinç kiralama sürecini birlikte planlayalım!
                            </p>
                            <Link to="/contact" className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center">
                                Detaylı Bilgi
                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 shadow-md">
                            <h2 className="text-blue-900 text-4xl font-extrabold mb-4">Hizmetlerimiz</h2>
                            <p className="text-lg text-blue-700 mb-6">
                                Geniş vinç yelpazemizle her türlü yük taşıma ve kaldırma işlemi için yanınızdayız.
                                Projelerinizin büyüklüğü veya karmaşıklığı ne olursa olsun, İrfan Vinç Kiralama sizin için en uygun vinçleri ve kaldırma çözümlerini sunar.
                            </p>
                            <p className="text-lg text-blue-700 mb-6">
                                Vinç kiralama hizmetlerimiz yalnızca makineleri sağlamaktan ibaret değildir. Uzman operatörlerimiz ve teknik ekibimiz, her aşamada projelerinizi desteklemek için yanınızdadır.
                            </p>
                            <Link to="/products" className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center">
                                Hizmetlerimiz
                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Why Us Section */}
                    <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 shadow-md">
                        <h2 className="text-blue-900 text-4xl font-extrabold mb-4">Neden İrfan Vinç Kiralama?</h2>
                        <p className="text-lg text-blue-700 mb-6">
                            İrfan Vinç Kiralama olarak müşterilerimize en kaliteli ve güvenli vinç kiralama hizmetlerini sunuyoruz.
                            Deneyimli ekibimiz, modern ekipmanlarımız ve müşteri odaklı hizmet anlayışımızla her zaman yanınızdayız.
                        </p>
                        <p className="text-lg text-blue-700 mb-6">
                            Her türlü inşaat, altyapı ve sanayi projesinde ihtiyaç duyduğunuz güvenilir ve güçlü kaldırma çözümlerini sizlere sunuyoruz.
                        </p>
                        <div>
                            <img className="mt-5 rounded-md ring-8 ring-blue-400 mx-auto w-[35rem] h-auto shadow-lg" src={isiklandırma} alt="Makineler" />
                        </div>
                    </div>
                </div>

                {/* Highlighted Branding Section */}
                <div className="bg-blue-600 py-16">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-center">
                        İrfan Vinç Kiralama
                    </h1>
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                        İstanbul'un her noktasına güvenilir vinç kiralama hizmetleri!
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;
