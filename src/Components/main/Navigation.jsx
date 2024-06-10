import searchIcon from '/searchSvg.svg'
import postIcon from '/postSvg.svg'
import homeIcon from '/homeSvg.svg'
import stethoIcon from '/doctor.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navigation = () => {
  const location = useLocation();
  return (
    <header className='bg-white fixed w-full bottom-0 '>
      <nav className=''>
        <ul className='flex justify-around items-center text-gray-500 mt-2'>
          <li><NavLink to='/search' className={location.pathname === '/search' ? 'text-teal-500' : ''}><img src={searchIcon} alt="Search" className='mx-auto' /> <span>Search</span></NavLink> </li>
          <li><NavLink to='/post' className={location.pathname === '/post' ? 'text-teal-500' : ''}> <img src={postIcon} alt="Post" className='mx-auto' /><span>Post</span></NavLink></li>
          <li><NavLink to='/home' className={location.pathname === '/home' ? 'text-teal-500' : ''}><img src={homeIcon} alt="Healler" className='mx-auto' /><span>Home</span></NavLink></li>
          <li><NavLink to='/consultation' className={location.pathname === '/consultation' ? 'text-teal-500' : ''}><img src={stethoIcon} alt="Stetho" className='mx-auto' /><span>Consultation</span></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation