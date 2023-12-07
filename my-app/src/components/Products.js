import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "./Header";
import Footer from "./Footer";

const Products = () =>{
    const [data, setdata] = useState([]);

    useEffect(() => {
        const prodData = async () => {
            try {
                const res = await axios.get('https://api.escuelajs.co/api/v1/products');
                setdata(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        prodData()
    }, [])
    return (
        <div>
            <Header/>
            <h3 className="text-center"> Our Products</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '10px' }}>
                {data && data.slice(0,9).map((item) => (
                    <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={`${item.images && item.images[0]}`} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-price">${item.price}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
                ))}
            </div>
            <Footer/>
        </div>
        

    )
}

export default Products;