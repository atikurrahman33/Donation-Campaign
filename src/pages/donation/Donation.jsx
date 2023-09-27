import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";





const Donation = () => {
    const [test,setTest]=useState([]);
    const[nodata,setNodata]=useState(false)

useEffect(()=>{
    const donation= JSON.parse(localStorage.getItem('test'))
    if(donation){
        setTest(donation)
    }
    else{
        setNodata("No Donation")
    }

},[])

console.log(test)
    return (
        <div>
        {nodata ? <p className="h-[80vh] flex justify-center items-center">{nodata} </p> : <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    test.map(card=> <DonationCard key={card.id} card={card}></DonationCard> )
                }
            </div>

        </div> }
        </div>
    );
};

export default Donation;