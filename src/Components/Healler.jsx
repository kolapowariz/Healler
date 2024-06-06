
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'
// import { data } from 'autoprefixer/lib/autoprefixer'
import Navigation from './main/Navigation';


const Healler = () => {
  const [post, setPost] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  // const fetchData = () => {
  //   fetch('https://jsonplaceholder.org/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (Array.isArray(data)) {
  //         console.log('data is array', data);
  //         setPost(data)
  //       } else {
  //         console.log('Data is not an array:', data);
  //       }
  //     })
  //     .catch(error => console.log(error))
  // }




  useEffect(() => {
    const fetchDataWithAxios = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://dummyapi.online/api/social-profiles')
        setPost(response.data)
      } catch(error) {
        console.log(error);
      } finally{
        setIsLoading(false)
      }
    }
    fetchDataWithAxios()
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null;
  }
  if(isLoading){
    return <div>Loading...</div>
  }




  return (
    <div className='mt-2'>
      <Navigation />
      <main className='w-11/12 mx-auto mb-16 '>
            <ul>
              {post.map((posted) => (
                <li key={posted.userId} className='h-auto border mt-4 px-4 py-4 rounded-lg shadow-md'>
                  <img src={posted.profilePic} alt="" className='rounded-full w-10' />
                  <p>{posted.username}</p>
                  <p>{posted.bio}</p>
                </li>
              ))}
            </ul>
      </main>
    </div>
  )
}

export default Healler;