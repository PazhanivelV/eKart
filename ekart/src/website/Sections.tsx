import 'bootstrap/dist/css/bootstrap.min.css';

import laptop from './imgs/Laptop.png';
import headset from './imgs/Headset.png';
import mouse from './imgs/Mouse.png';
import keyboard from './imgs/keyboard.png';

type Product = {
    id: number;
    name: string;
    image: string;
}
function Sections({
  onSelect,
}: props) {

    const products = [
        { id: 1, name: 'Laptop', image: laptop },
        { id: 2, name: 'Headset', image: headset },
        { id: 3, name: "Mouse", image: mouse },
        { id: 4, name: "Keyboard", image: keyboard }
    ] as Product[];

    return (
        <>
            {
                products.map((item) => (
                    <div key={item.id} className='md-1 border border-dark rounded pointer-hand' onClick={() =>
                         onSelect(item)
                    }>
                        <h6>{item.name}</h6>
                        <img style={{ width: '65%', height: '65%' }} src={item.image} alt={item.name} />
                    </div>
                ))
            }
        </>
    )
}
export default Sections;