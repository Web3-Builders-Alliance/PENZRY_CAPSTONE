import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PersistLogin() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState<boolean>(true);
  useEffect(() => {
    if (!auth.authToken) {
      setIsloading(true);
      navigate("/");
      return;
    }
    setIsloading(false);
  }, [auth.authToken, navigate]);

  return <>{isloading ? <p>loading....</p> : <Outlet />}</>;
}

export default PersistLogin;
