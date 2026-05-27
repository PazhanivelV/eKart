import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Sections from './Sections';
import Products from './Products';

import { useState } from "react";

type Product = {
    id: number;
    name: string;
    image: string;
}

function Home() {
    const [
        selectedProduct,
        setSelectedProduct,
    ] = useState<Product | null>(
        null
    );

    return (
        <>
            <div id='divHeader' className='divHeader'>
                <div >
                    <h1>eKart</h1>
                </div>
                <div>
                    <Navbar></Navbar>
                </div>
            </div>

            <div id='divMain'>
               
                 
                        <div id='Product'>
                            <div id='divSidebar' className='sideNav mx-0 p-1 d-flex align-content-top flex-wrap '>
                                <Sections onSelect={setSelectedProduct}></Sections>
                            </div>
                            <div id='divContent' className='mainContent '>
                                <Products selectedProduct={selectedProduct}></Products>
                            </div>
                        </div>
                   

                        <div id='Common'>
                        </div>
                   
            </div >
            <div id='divFooter'><h5 style={{ padding: '8px' }}>Powered by Guvi</h5></div>
        </>
    )
}
export default Home;