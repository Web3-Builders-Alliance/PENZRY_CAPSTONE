import Button from "../../Components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import useWeb3Auth from "../../hooks/useWeb3Auth";
export default function SigninDashboard() {
  const [login] = useWeb3Auth();
  return (
    <div className=" bg-grey-10  font-outfit h-screen flex justify-center w-screen  items-center  ">
      <Button
        type="primary"
        className="flex items-center gap-2"
        onClick={login}
      >
        <FcGoogle /> Sign in with Google Please
      </Button>
    </div>
  );
}
