import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "./Header";
import Testomonials from "./Testomonials";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Home = () => {
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
        <>
            <Header/>
            <h2 className="m-4 text-center"> Our Products </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '10px' }}>
            {data && data.slice(0,3).map((item) => (
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
            <Testomonials/>
            <FAQ/>
            <Footer/>
        </>
    );
}

export default Home;