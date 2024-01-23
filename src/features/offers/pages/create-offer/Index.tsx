import { useState } from "react";
import CreateNFTOffers from "../../components/create-NFT-offer/Index";
import CreateTokenOffer from "../../components/create-token-offer/Index";

const CreateOffers = () => {
  const [isActiveNft, setIsActiveNft] = useState(true);
  const [isActiveToken, setIsActiveToken] = useState(false);
  return (
    <div className=" bg-white w-full px-6 py-9 md:px-12 md:py-14 shadow-sm">
      <h3 className="text-primary text-headline-sm">Create Offers</h3>
      <p className="text-grey-40 md:text-body-md text-body-sm mb-4 mt-1">
        Create amazing offers for which you could attach to any feedback in
        other to reward users for given you feedback on that unique product.
      </p>
      <div className="pt-1 border-b border-grey-20 flex gap-3 mb-5">
        <button
          className={
            "px-3 md:px-6 py-2 md:py-3 transition-all duration-500 text-body-sm font-outfit md:text-body-md text-center " +
            (isActiveNft
              ? " text-primary border-b-2 border-primary font-semibold md:font-semibold "
              : " text-grey-30 font-semibold md:font-semibold")
          }
          onClick={() => {
            setIsActiveNft(true);
            setIsActiveToken(false);
          }}
        >
          NFT Offer
        </button>
        <button
          className={
            "px-3 md:px-6 py-2 md:py-3 transition-all duration-500 text-body-sm font-outfit md:text-body-md text-center " +
            (isActiveToken
              ? " text-primary border-b-2 border-primary font-semibold md:font-semibold "
              : " text-grey-30 font-semibold md:font-semibold")
          }
          onClick={() => {
            setIsActiveNft(false);
            setIsActiveToken(true);
          }}
        >
          Token Offer
        </button>
      </div>
      {isActiveNft && <CreateNFTOffers />}
      {isActiveToken && <CreateTokenOffer />}
    </div>
  );
};

export default CreateOffers;
