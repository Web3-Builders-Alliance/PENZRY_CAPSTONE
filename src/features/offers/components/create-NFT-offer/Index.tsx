import { useForm } from "react-hook-form";
import FormControl from "../../../../Components/form/FormControl";
import Button from "../../../../Components/ui/Button";

interface formProps {
  nftname: string;
  description: string;
  nftImage: string;
  nftNumber: string;
}

const initialValues = {
  nftname: "",
  description: "",
  nftImage: "",
  nftNumber: "",
};

function CreateNFTOffers() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    defaultValues: initialValues,
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async (data) => {
    // Handle form submission
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl
        formType="input"
        type="text"
        label="Nft Name"
        name="nftname"
        register={register}
        errors={errors}
        placeholder="Enter Offer Name"
      />

      <FormControl
        formType="textarea"
        type="text"
        label="Describe the NFT you are offering and where your users make use of it"
        name="description"
        register={register}
        errors={errors}
        placeholder="Enter the NFT Description"
      />

      <FormControl
        formType="input"
        type="file"
        label="Upload image to use for generating NFT"
        name="nftImage"
        register={register}
        errors={errors}
        placeholder="upload image"
      />

      <FormControl
        formType="input"
        type="number"
        label="Number of NFTs you will like to generate for this offer"
        name="nftNumber"
        register={register}
        errors={errors}
        placeholder="Enter the number of NFTs available for this offer"
        min={1}
      />

      <Button type="primary" className="w-full mt-4 md:mt-5">
        Create Offer
      </Button>
    </form>
  );
}

export default CreateNFTOffers;
