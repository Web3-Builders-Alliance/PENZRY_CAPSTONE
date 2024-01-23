import { RiWallet3Line } from "react-icons/ri";
import Button from "../../../../Components/ui/Button";

const CreateTokenOffer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-6/12 mx-auto">
      <div className="p-3 rounded-full flex items-center justify-center border-[1.5px] border-grey-20">
        <RiWallet3Line className="text-grey-30 text-[28px]" />
      </div>
      <p className="text-grey-90 text-body-lg font-medium text-center mt-5">
        We are building
      </p>
      <p className="text-grey-40 text-body-md text-center mt-2">
        We are releasing this feature in the next 24 hours as something good is
        cooking
      </p>
      <Button type="secondary" className="mt-5 !font-semibold">
        Coming Soon
      </Button>
    </div>
  );
};

export default CreateTokenOffer;
