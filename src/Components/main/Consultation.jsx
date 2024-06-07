import Navigation from "./Navigation"
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DataContext } from "../PostContext";

const Consultation = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const { posts, isLoading} = useContext(DataContext)
  const navigate = useNavigate()
  useEffect(() => {
    if(!isAuthenticated){
      navigate('/signin')
    }
  }, [isAuthenticated, navigate])

  if(!isAuthenticated){
    return null;
  }

  if(isLoading){
    return <div className='text-center text-3xl mt-4'>Loading...</div>
  }

  return (
    <div className='mt-2  mx-auto'>
      <Navigation />
      <main className='w-11/12 mx-auto mb-16 '>
        <ul>
          {posts.map((posted) => (
            <li key={posted.userId} className='h-auto border mt-4 px-4 py-4 rounded-lg shadow-md text-sm'>
              <p>{posted.fullName}</p>
              <p>{posted.work}</p>
              <p>{posted.username}</p>
              <p>{posted.birthDate}</p>
              <p>{posted.email}</p>
              <p>{posted.followersCount}</p>
              <p>{posted.followingCount}</p>
              <p>{posted.gender}</p>
              <p>{posted.joinedDate}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Consultation;