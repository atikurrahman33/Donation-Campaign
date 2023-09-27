import { Link } from 'react-router-dom';
import './Carditem.css'


const Cardsitem = ({item}) => {
    const {ID,CategoryBackgroundColor ,TitleTextColor,CategoryTextColor} =item;
    return (
        
      <Link to={`/Donatin/${ID}`}>
        <div className='container'>
           <div className='home-container'>
            <div className='card-container'>
            
            
            
                    <div  className='card'style={{backgroundColor: CategoryBackgroundColor}} >
                <div className='card-img'>
                    <img className='photo' src={item.Image} alt="" />
                     </div>
                     <div className='py-8'>
                        <h2 className='A ' style={{color:TitleTextColor ,backgroundColor:CategoryTextColor}}>{item.Category  }</h2>
                        <p className='B' style={{color:TitleTextColor}}>{item.Title}</p>
                     </div>
                     <div className='info'>
                       
                       
                        </div>
                      


            </div>

           
            </div>
            </div>
            </div>
      </Link>
    )        
    
};

export default Cardsitem;