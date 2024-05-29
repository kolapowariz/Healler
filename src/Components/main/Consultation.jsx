import Navigation from "./Navigation"
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Consultation = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(() => {
    if(!isAuthenticated){
      navigate('/signin')
    }
  }, [isAuthenticated, navigate])

  if(!isAuthenticated){
    return null;
  }
  return (
    <main>
      <Navigation />
      <h2>Hello consultation</h2>
    </main>
  )
}

export default Consultation;