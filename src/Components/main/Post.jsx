import Navigation from "./Navigation";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Post = () => {
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
    <div className="lg:w-2/3 mx-auto">

      <Navigation />
    <main>
      <h2 className="mt-4 ml-2 text-center text-2xl">Hello post, under maintenance</h2>
    </main>
    </div>
  )
}

export default Post;