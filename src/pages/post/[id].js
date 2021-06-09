import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import {useState} from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket} from "../../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;
function productPage({ data}) {
    const [rating] = useState((
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
      ));

    const [hasPrime] = useState(Math.random() < 0.5)
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        
        dispatch(addToBasket(data));
    }

     console.log(data)
      
    return (
        <div>
            <Header />
            <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <h1 className="text-lg font-bold uppercase">{data.title}</h1>
            <h2 className="text-md cursor-pointer uppercase">Product in {data.category}</h2>
            <Image 
                src={data.image}
                height={450}
                width={450}
                objectFit="contain"
                className=""
            />
            
            <div className="flex">
                {Array(rating).fill().map((_,i) => (
                    <StarIcon className="h-10 text-yellow-500" />
                ))}
            </div>
            <p className="text-md my-2">{data.description}</p>
            <div className="text-lg mb-5">
                <Currency quantity={data.price} currency="USD" />
            </div>
            {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
            <img className="w-14" src="https://links.papareact.com/fdw" alt="" />
            <p className="text-md text-gray-500">FREE Next-day Delivery</p>
            </div>
      )}
            <button onClick={addItemToBasket} className="mt-auto max-w-md button">Add to Basket</button>
           
        </div>
            <Footer />
        </div>
    )
}

 export async function getServerSideProps(context) {
     const res = await fetch(`https://fakestoreapi.com/products/${context.query.id}`)
     const data = await res.json()
     
     return {
         props: {
            data
         }
        
     }
    
   }






export default productPage
