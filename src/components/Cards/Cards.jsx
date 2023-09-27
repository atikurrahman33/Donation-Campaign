import Cardsitem from "./Cardsitem";


const Cards = ({items}) => {

    console.log(items)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            {
                items?.map(items=> <Cardsitem key={items.ID} item={items}></Cardsitem>)
            }
        </div>
    );
};

export default Cards;