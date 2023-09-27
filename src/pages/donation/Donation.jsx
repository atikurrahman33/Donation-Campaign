import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [nodata, setNodata] = useState(false);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("test"));
    if (storedDonations) {
      setDonations(storedDonations);
    } else {
      setNodata("No Donations");
    }
  }, []);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      {nodata ? (
        <p className="h-[80vh] flex justify-center items-center">
          {nodata}
        </p>
      ) : (
        <div>
          <div className="text-center">
            {donations.length >= 4 && !showAll && (
              <button onClick={handleSeeAll} className="bg-red-600 mx-auto mt-4 block">
                See All
              </button>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {showAll
                ? donations.map((card) => (
                    <DonationCard key={card} card={card}></DonationCard>
                  ))
                : donations.slice(0, 4).map((card) => (
                    <DonationCard key={card} card={card}></DonationCard>
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
