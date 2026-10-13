import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";

const AdminRoute = () => {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    let checkId = 0;

    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      const currentCheck = ++checkId;

      if (!active) return;

      if (!user) {
        setStatus("signed-out");
        return;
      }

      setStatus("loading");

      try {
        const token = await user.getIdTokenResult();

        if (active && currentCheck === checkId) {
          setStatus(
            token.claims.admin === true ? "allowed" : "forbidden"
          );
        }
      } catch {
        if (active && currentCheck === checkId) {
          setStatus("forbidden");
        }
      }
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  if (status === "loading") {
    return <p>Checking access...</p>;
  }

  if (status === "signed-out") {
    return <Navigate to="/admin/signin" replace />;
  }

  if (status === "forbidden") {
    return <p>You don’t have permission to access this page.</p>;
  }

  return <Outlet />;
};

export default AdminRoute;