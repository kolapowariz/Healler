
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './Navigation';
import { DataContext } from '../PostContext';


const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { posts, isLoading } = useContext(DataContext)

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
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return <div className='text-center text-3xl mt-4'>Loading...</div>
  }




  return (
    <div className='mt-2 mx-auto'>
      <Navigation />
      <main className='w-11/12 mx-auto mb-16 '>
        <ul>
          {posts.map((posted) => (
            <li key={posted.userId} className='h-auto border mt-4 px-4 py-4 rounded-lg shadow-md'>
              <div className='flex '>

                <img src={posted.profilePic} className='rounded-full w-12 h-12' />
                <p className='pl-2'>{posted.fullName}</p>
                <p className='pl-1'>@{posted.username}</p>
              </div>
              <p>{posted.work}</p>
              <p>{posted.birthDate}</p>
              <p>{posted.email}</p>
              <p>{posted.followersCount}</p>
              <p>{posted.followingCount}</p>
              <p>{posted.gender}</p>
              <p>{posted.hobbies}</p>
              <p>{posted.joinedDate}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home;