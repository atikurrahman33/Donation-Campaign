
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardsCars from '../../components/Cards/CardsCars';

const ManyItem = () => {

    const[card, setcart]=useState({});

    const {ID}=useParams();
    

    const cards= useLoaderData();
    
    useEffect(()=>{
        const findCard = cards.find((card)=>card.ID==ID)
        setcart(findCard)

    },[ID, cards])
    return (
       <div>
        <CardsCars card={card}></CardsCars>
       </div>
    );
};

export default ManyItem;