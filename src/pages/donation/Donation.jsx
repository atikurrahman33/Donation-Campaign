import { useEffect, useState } from "react";
import Cards from "../../components/cards/cards";
import CardsCars from "../../components/Cards/CardsCars";



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

            <div className="grid grid-cols-2 gap-3">
                {
                    test.map(card=> <CardsCars key={card.ID} card={card}></CardsCars> )
                }
            </div>

        </div> }
        </div>
    );
};

export default Donation;