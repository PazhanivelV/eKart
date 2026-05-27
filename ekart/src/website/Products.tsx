import 'bootstrap/dist/css/bootstrap.min.css';
import laptop1 from './imgs/Products/Laptop/1.jpg';
import laptop2 from './imgs/Products/Laptop/2.jpg';
import laptop3 from './imgs/Products/Laptop/3.jpg';
import laptop4 from './imgs/Products/Laptop/4.png';

import hs1 from './imgs/Products/HeadSet/1.jpg';
import hs2 from './imgs/Products/HeadSet/2.jpg';
import hs3 from './imgs/Products/HeadSet/3.jpg';

import ms1 from './imgs/Products/Mouse/1.jpg';
import ms2 from './imgs/Products/Mouse/2.jpg';

import kb1 from './imgs/Products/Keyboard/1.jpg';

type Product = {
    id: number;
    name: string;
    image: string;
}

type ProductDetails = {
    id: number;
    title: string;
    brand: string;
    price: string;
    image: string;
}

type Props = {
    selectedProduct: Product | null;

};

function Products({ selectedProduct }: Props) {



    if (!selectedProduct) {
        <>
            <p>No Products</p>
        </>

    } else {
        // console.log(selectedProduct);

        let productDetails: ProductDetails[] = [];
        //#region Product Details
        switch (selectedProduct.id) {
            case 1:
                productDetails = [
                    {
                        id: 1,
                        title: 'Dell XPS 15 9560',
                        brand: 'Dell',
                        price: '30000',
                        image: laptop1
                    },
                    {
                        id: 2,
                        title: 'HP Laptop AI 15-fd2001ne Ultra 7-255U',
                        brand: 'HP',
                        price: '33000',
                        image: laptop2
                    },
                    {
                        id: 3,
                        title: 'Apple 2024 MacBook Pro Laptop with M4 Pro',
                        brand: "Apple",
                        price: '50000',
                        image: laptop3
                    },
                    {
                        id: 4,
                        title: 'Acer Aspire Premium 15.6" Laptop',
                        brand: "Acer",
                        price: '40000',
                        image: laptop4
                    }
                ] as ProductDetails[];
                break
            case 2:
                productDetails = [
                    {
                        id: 1,
                        title: 'Sony WH-1000XM5 Noise Cancelling Wireless Headphones',
                        brand: 'Sony',
                        price: '25000',
                        image: hs1
                    },
                    {
                        id: 2,
                        title: 'Noise Airwave Max XR Wireless Over-Ear Headphones',
                        brand: 'Noise',
                        price: '5000',
                        image: hs2
                    },
                    {
                        id: 3,
                        title: 'HP H120 Stereo USB Headset',
                        brand: "HP",
                        price: '2500',
                        image: hs3
                    }
                ] as ProductDetails[];
                break;
            case 3:
                productDetails = [
                    {
                        id: 1,
                        title: 'HP M120 Wireless Mouse',
                        brand: 'HP',
                        price: '500',
                        image: ms1
                    },
                    {
                        id: 2,
                        title: 'Dell MS116 Wired Mouse',
                        brand: 'Dell',
                        price: '700',
                        image: ms2
                    }
                ] as ProductDetails[];
                break;
            case 4:
                productDetails = [
                    {
                        id: 1,
                        title: 'HP K120 Wired Keyboard',
                        brand: 'HP',
                        price: '500',
                        image: kb1
                    }] as ProductDetails[];
                break;
        }
        //#endregion
        return (
            <>
                <div className='row mx-0 p-1'>
                    {
                        productDetails.map((item) => (
                            // <div className="col-12 col-sm-6 col-md-4 col-lg-6 card p-1 m-0">
                            //     <img src={item.image}  className="rounded d-block" alt={item.brand}></img>
                            //     <div className="card-body">
                            //         <div><h6 className="card-title">{item.title}</h6> </div>
                            //         <div>
                            //             <div className='left-0'>
                            //                 <b><p className="card-text">Brand : {item.brand}</p></b>
                            //             </div>
                            //             <div className='right-0'>
                            //                 <b> <p className="card-text">Price : {item.price}</p></b>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>

                            <div className="card" style={{ width: '18rem;' }}>
                                <img src={item.image} className="rounded mx-auto d-block" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"> Brand : {item.brand} </p>
                                    <p className="card-text">  Price र : {item.price} </p>
                                </div>
                            </div>


                        ))
                    }

                </div>



            </>
        )
    }
}

export default Products;