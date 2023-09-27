// CardsCars.jsx
import React from 'react';
import './Cardscard.css';
import { json } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const CardsCars = ({ card }) => {
    const{ID}=card
    const handleDonate=()=>{

        const addDonationArray=[];


        const donation= JSON.parse(localStorage.getItem('test'))
        if(!donation){
            addDonationArray.push(card)
            localStorage.setItem('test',JSON.stringify(addDonationArray))
            toast('Donation Completed')
        }
        else{

            const isexit=donation.find(card=> card.ID==ID)

            if(!isexit){
                addDonationArray.push(...donation,card)
                localStorage.setItem('test',JSON.stringify(addDonationArray))
                toast('Donation Completed')


            }
           else{
            toast('Already donated')
           }
        }
        
     
        
    }

  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <div className="home-container">
          <div className="card-container">
            <div className="cards">
              <div className="card-content">
                <div className="card-img">
                  {/* Image with black overlay at the bottom */}
                  <div className="image-overlay"></div>
                  <img className="photo" src={card.Image} alt="" />
                  <div className="button-overlay">
                    <button onClick={handleDonate} style={{ backgroundColor: card.TitleTextColor }}>
                      Donate {card.Price}
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  {/* Title and Description */}
                  <p className="B">{card.Title}</p>
                  <h2 className="A">{card.Description}</h2>
                  {/* Donate Button */}
                  <ToastContainer />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};



export default CardsCars;
