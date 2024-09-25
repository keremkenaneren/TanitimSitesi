import cam from "../assets/irfanmakina/c1.jpg";
import is3 from "../assets/irfanmakina/c2.jpg";
import is4 from "../assets/irfanmakina/c3.jpg";

const images = [cam, is3, is4];

const ImageGroup = () => {
    return (
        <div className="m-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                        <img
                            src={image}
                            className="w-full h-64 object-cover"
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGroup;
