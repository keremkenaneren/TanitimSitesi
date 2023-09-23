import { Data } from "../productDatas/Data.jsx"
import React from "react";
import Card from "./Card.jsx";

function Products() {

    return (
        <div className="bg-white dark:bg-gray-900">
            <br/>
            <div className="text-center">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold m-5" >Products</h1>
            </div>
            <div>
                <div className="flex justify-around items-center ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Data.map((menuItem, key) => (
                            <div key={key}>
                                <Card
                                    name={menuItem.name}
                                    image={menuItem.image}
                                    content={menuItem.content}
                                    price={menuItem.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products ;
