import { GlobeAltIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Footer() {
    return (
        <div className="flex flex-col justify-center space-x-3 mb-4 text-sm text-white bg-amazon_blue-light p-1 py-2">
            <div className="flex mt-5 text:xs">
            <div className="mx-w-3l mx-auto py-6">
            <h3 className="font-bold">Get To Know Us</h3>
            <p>Careers</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            </div>
            <div className="mx-w-3l  mx-auto py-6" >
            <h3 className="font-bold">Make Money with US</h3>
            <p>Sell on Amazon</p>
            <p>Sell your Services onAmazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell your apps on Amazon</p>
            <p>Become an Affilate</p>
            <p>Advertise your Products</p>
            <p>Self-Publish with Us</p>
            </div>
            <div className="hidden md:inline mx-w-3l  mx-auto py-6">
            <h3 className="font-bold">Amazon Payment Products</h3>
            <p>Amazon Rewards Visa Signature Cards </p>
            <p>Amazon.com Store Card</p>
            <p>Amazon.com Corporate Credit Line</p>
            <p>Shop with Points</p>
            <p>Credit Card Marketplace</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
            </div>
            <div className=" hidden lg:inline mx-w-3l  mx-auto py-6">
            <h3 className="font-bold">Amazon Payment Products</h3>
            <p>Amazon Rewards Visa Signature Cards </p>
            <p>Amazon.com Store Card</p>
            <p>Amazon.com Corporate Credit Line</p>
            <p>Shop with Points</p>
            <p>Credit Card Marketplace</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
            </div>
            </div>
            
            <div className="flex justify-center space-x-3 mt-5">
            <Image 
                src='https://links.papareact.com/f90'
                width={100}
                height={40}
                objectFit="contain"
                className=''
            />
            <div className="flex border border-gray-400">
            <div><GlobeAltIcon  className="h-6 mr-1 mt-1 text-blue-400" /></div>
            <div className="mt-1 mr-1"><p>English</p></div>
            </div>
            
            </div>
            
        </div>
        
    )
}

export default Footer
