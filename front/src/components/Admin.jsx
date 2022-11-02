import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import instance from "../utils/instanceHttp";

export const Admin = (props) => {
    const {isConnected, setIsAdmin} = props;
    const navigate = useNavigate();

    // TODO Réduire la fonction avec le seul navigate
    useEffect(() => {
        instance
          .get("/admin")
          .then((res) => {
            setIsAdmin(true)
          })
          .catch(err => {
            setIsAdmin(false);
            navigate('/');
          })
      }, [isConnected])

    return(
        <div>
            <p>Admin</p>

            <Outlet />
        </div>
    )
}