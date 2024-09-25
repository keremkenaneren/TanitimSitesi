// import havalıfoto from "../assets/irfanmakina/havalıfoto.jpg";
import is3 from "../assets/irfanmakina/c1.jpg"
import is4 from "../assets/irfanmakina/c2.jpg"
import is1 from "../assets/irfanmakina/c3.jpg"



function Products() {
    return (
        <div className="bg-white">
            <br />
            <div className="text-center">
                <h1 className="text-gray-900 text-5xl font-extrabold mt-5 mb-4">Hizmetlerimiz</h1>
            </div>

            <div className="px-4 mx-auto max-w-screen-xl lg:py-16">
                {/* Jumbotron Section */}
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-12 text-center mb-12">
                    <h1 className="text-blue-900 text-5xl font-extrabold mb-6">İhtiyacınıza Uygun Vinç ve Platform Çözümleri</h1>
                    <p className="text-xl text-blue-700 mb-6">
                        İrfan Vinç Kiralama olarak, projelerinizin ihtiyaçlarına uygun geniş vinç seçenekleri sunuyoruz. Sepetli platformlarımız 24 metreden 50 metreye kadar, çeşitli kapasitelerdeki vinçlerimiz ise çeşitli ihtiyaçlarınıza hizmet etmektedir. İstanbul'un her köşesine güvenle hizmet sağlıyoruz.
                    </p>
                    <p className="text-lg text-blue-700 mb-6">
                        Her proje farklıdır ve biz her türlü inşaat, bakım veya taşıma projesinde ihtiyaçlarınızı karşılayacak esnek çözümler sunuyoruz. Küçük bir bakım işi veya büyük bir inşaat projesi olsun, uzman ekibimiz her zaman yanınızda.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col md:flex-row md:justify-center gap-4">
                        <a href="tel:+905344666200" className="bg-blue-700 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all text-center">
                            Bizi Arayın
                        </a>
                        <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all text-center">
                            Teklif Al
                        </a>
                    </div>

                    {/* Technical Specifications Table */}
                    <div className="mt-12 overflow-x-auto">
                        <table className="min-w-full bg-blue-50 border border-blue-200 text-left text-blue-800">
                            <thead>
                                <tr className="bg-blue-200">
                                    <th className="py-3 px-4 text-lg font-semibold">Vinç Tipi</th>
                                    <th className="py-3 px-4 text-lg font-semibold">Kapasite</th>
                                    <th className="py-3 px-4 text-lg font-semibold">Erişim Mesafesi</th>
                                    <th className="py-3 px-4 text-lg font-semibold">Özellikler</th>
                                    <th className="py-3 px-4 text-lg font-semibold">Kullanım Alanları</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-4">Sepetli Platform</td>
                                    <td className="py-3 px-4">24-50 metre</td>
                                    <td className="py-3 px-4">360 derece dönebilme</td>
                                    <td className="py-3 px-4">Dar alanlarda kullanım, güvenli çalışma ortamı</td>
                                    <td className="py-3 px-4">Bina temizliği, dış cephe bakımı, reklam panoları montajı</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4">Çeşitli Vinçler</td>
                                    <td className="py-3 px-4">Farklı Kapasiteler</td>
                                    <td className="py-3 px-4">Geniş bom erişimi</td>
                                    <td className="py-3 px-4">Yüksek kaldırma kapasitesi, hızlı kurulum</td>
                                    <td className="py-3 px-4">Endüstriyel tesis kurulumları, büyük montaj işlemleri, konteyner taşımacılığı</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-lg text-blue-700 mt-8">
                        Projelerinizin ihtiyaçlarına göre en uygun vinç ve platform çözümlerini öğrenmek için hemen bizimle iletişime geçin!
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 mb-5">
                    <div className="flex flex-col md:flex-row gap-10 mb-10">
                        <div>
                            <img className="mt-5 rounded-md ring-8 ring-blue-400 mx-auto w-full md:w-[25rem] h-auto" src={is3} alt="Kurtarma vinci" />
                        </div>
                        <div>
                            <img className="mt-5 rounded-md ring-8 ring-blue-400 mx-auto w-full md:w-[25rem] h-auto" src={is1} alt="İlan vinci" />
                        </div>
                        <div>
                            <img className="mt-5 rounded-md ring-8 ring-blue-400 mx-auto w-full md:w-[25rem] h-auto" src={is4} alt="Yandan görünüm vinci" />
                        </div>
                    </div>

                    <h2 className="text-blue-900 text-4xl font-extrabold mb-4">İrfan Vinç Kiralama - Güvenilir Vinç Kiralama Hizmeti</h2>
                    <p className="text-lg font-normal text-blue-700 mb-6">
                        İnşaat projelerinden bakım çalışmalarına, İrfan Vinç Kiralama olarak profesyonel vinç kiralama hizmetlerimizle her türlü ihtiyacınıza cevap veriyoruz. Güvenilir operatörlerimiz ve geniş vinç yelpazemizle projelerinizde güvenliği ve verimliliği artırıyoruz.
                    </p>
                    <h3 className="text-blue-900 text-2xl font-bold mb-3">Neden İrfan Vinç Kiralama?</h3>
                    <ul className="list-disc list-inside text-blue-700 mb-6">
                        <li>Deneyimli ve sertifikalı operatörler</li>
                        <li>Sepetli vinçler dahil, farklı kapasitelerde modern vinç seçenekleri</li>
                        <li>Esnek kiralama koşulları ve rekabetçi fiyatlar</li>
                        <li>Hızlı teslimat ve operasyonel destek</li>
                        <li>İstanbul'un her tarafına geniş hizmet ağı</li>
                    </ul>
                    <h3 className="text-blue-900 text-2xl font-bold mb-3">Hangi Alanlarda Hizmet Veriyoruz?</h3>
                    <ul className="list-disc list-inside text-blue-700 mb-6">
                        <li>İnşaat ve altyapı projeleri</li>
                        <li>Sanayi tesisleri ve fabrika bakımları</li>
                        <li>Ağır yük taşıma ve montaj işlemleri</li>
                        <li>Sepetli vinçlerle yüksek yapılarda erişim ve bakım çalışmaları</li>
                        <li>Yüksek erişim gerektiren reklam ve tabela montajları</li>
                        <li>Rüzgar enerjisi projelerinde türbin bakımları</li>
                    </ul>
                    <p className="text-lg font-normal text-blue-700 mb-4">
                        Hemen bizimle iletişime geçerek, vinç ve platform ihtiyaçlarınız için en uygun çözümleri sunalım.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Products;
