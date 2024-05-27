import searchIcon from '/searchSvg.svg'
import postIcon from '/postSvg.svg'
import homeIcon from '/homeSvg.svg'
import stethoIcon from '/doctor.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'
// import { data } from 'autoprefixer/lib/autoprefixer'



const Healler = () => {
  const [post, setPost] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
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


  const fetchDataWithAxios = () => {
    axios.get('https://dummyapi.online/api/social-profiles')
      .then(response => setPost(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    // fetchData()
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




  return (
    <div className='mt-2'>
      <header className='bg-white fixed w-full bottom-0 '>
        <nav className=''>
          <ul className='flex justify-around items-center text-gray-500 mt-2'>
            <li><Link><img src={searchIcon} alt="Search" className='mx-auto' /> <span>Search</span></Link> </li>
            <li><Link> <img src={postIcon} alt="Post" className='mx-auto' /><span>Post</span></Link></li>
            <li><Link><img src={homeIcon} alt="Healler" className='mx-auto' /><span>Home</span></Link></li>
            <li><Link><img src={stethoIcon} alt="Stetho" className='mx-auto' /><span>Consultation</span></Link></li>
          </ul>
        </nav>
      </header>
      <main className='w-11/12 mx-auto mb-16 '>
        <div >
          {post ? <div>
            <ul>
              {post.map((posted) => (
                <li key={posted.userId} className='h-auto border mt-4'>
                  <p>{posted.username}</p>
                  <p>{posted.bio}</p>
                  <img src={posted.profilePic} alt="" className='rounded-full w-28' />
                </li>
              ))}
            </ul>
          </div> : <div>Loading...</div>}
        </div>
      </main>
    </div>
  )
}

export default Healler;