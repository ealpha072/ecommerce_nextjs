import { StaticImageData } from "next/image";
import Image from "next/image";

export interface IProduct {
    id: string,
    name: string,
    price: number,
    url:string,
    description:string,
    image: StaticImageData
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return(
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <div>
                <Image src={props.product.image} alt={props.product.image.src} />
            </div>
            <div>
                <button>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product