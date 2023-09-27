
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ManyItem = () => {

    const[phone, setPhone]=useState()

    const {ID}=useParams();
    console.log(ID);

    const card= useLoaderData();
    console.log(card)
    useEffect(()=>{
        const findCard = card.find(card=>card.ID==ID)
        console.log(findCard)

    },[ID, card])
    return (
        <div>
            Many item
        </div>
    );
};

export default ManyItem;