import havalıfoto from "../assets/irfanmakina/havalifoto.jpg";
import irfanabi from "../assets/irfanmakina/irfanabi.jpg";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="lg:flex items-center justify-center lg:justify-start">
                        {/* Image Section */}
                        <div className="lg:w-1/2 pr-6">
                            <div className="text-center">
                                <img
                                    className="mx-auto p-4 lg:mx-0 rounded-lg shadow-lg transition"
                                    src={havalıfoto}
                                    alt="İrfan Vinç Kiralama'nın modern vinçleri"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-1/2">
                            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                                <PrecisionManufacturingIcon /> İrfan Vinç Kiralama - Vinç Kiralama
                            </h1>
                            <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl">
                                <i>Güvenle Yükseklere</i>
                                <br />
                                <br />
                                İrfan Vinç Kiralama, inşaat ve endüstri projeleri için güvenilir vinç kiralama hizmetleri sunar. Yüksek standartlarda sunduğumuz hizmetlerle, projelerinizin sorunsuz ve güvenli bir şekilde tamamlanmasını sağlıyoruz. Modern ekipmanlarımız ve deneyimli ekibimizle her türlü ihtiyaca uygun çözümler sunmaktayız.
                            </p>
                            <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl">
                                <strong>Müşteri Memnuniyeti</strong>: Müşterilerimizin memnuniyeti önceliğimizdir. İhtiyaçlarınıza en iyi şekilde yanıt verebilmek için sürekli olarak hizmet kalitemizi artırıyoruz. Size en uygun çözümleri sunmak için her zaman buradayız.
                            </p>
                        </div>
                    </div>

                    <div className="lg:flex items-center justify-center lg:justify-start mt-16">
                        {/* Text Section */}
                        <div className="lg:w-1/2">
                            <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">
                                Neden İrfan Vinç Kiralama?
                            </h2>
                            <ul className="mb-6 text-lg font-normal text-gray-800 lg:text-xl space-y-4">
                                <li><strong>1. Güvenlik Önceliği</strong>: Vinçlerimiz düzenli bakım ve denetimlerden geçmektedir. Projelerinizin güvenliğini sağlamak için tüm güvenlik standartlarına uygun olarak çalışırız.</li>
                                <li><strong>2. Deneyimli Ekip</strong>: Operatörlerimiz, vinçlerin güvenli ve verimli kullanımını sağlar. Eğitimli ve deneyimli ekip üyelerimiz, olası sorunları hızlıca çözme becerisine sahiptir.</li>
                                <li><strong>3. Esnek Kiralama Seçenekleri</strong>: Projelerinizin ihtiyaçlarına göre kısa ve uzun dönem kiralama seçenekleri sunarız.</li>
                                <li><strong>4. Geniş Ekipman Yelpazesi</strong>: Her türlü proje için farklı vinç seçenekleri sunuyoruz. İhtiyacınıza en uygun ekipmanı seçmeniz için size yardımcı oluyoruz.</li>
                                <li><strong>5. Hızlı Destek ve Bakım</strong>: Olası sorunlar için hızlı destek ve bakım hizmetleri sunarak projelerinizin kesintisiz devam etmesini sağlıyoruz.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-1/2 ml-2 pr-6 mt-8 lg:mt-0">
                            <div className="text-center">
                                <img
                                    className="mx-auto p-4 lg:mx-0 rounded-lg shadow-lg transition"
                                    src={irfanabi}
                                    alt="İrfan Vinç Kiralama'nın vinç hizmetleri"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                    <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">Geleceğe Birlikte Yükselin</h2>
                    <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl">
                        İrfan Vinç Kiralama olarak, teknolojiyi ve yenilikçi çözümleri kullanarak işlerinizi bir adım öteye taşıyoruz. Güvenli ve etkili vinç kiralama hizmetlerimizle projelerinizi başarıyla tamamlamanızı sağlıyoruz.
                        <br /><br />
                        <strong>Bize Katılın</strong>: Ekibimizle tanışın, sizin için en uygun çözümleri sunalım ve projelerinizi güvenle bir sonraki seviyeye taşıyalım. Sorularınız ve ihtiyaçlarınız için bizimle iletişime geçin!
                    </p>
                    <Link to="/contact" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
                        Bizimle İletişime Geçin
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default About;
