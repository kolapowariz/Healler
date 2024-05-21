import searchIcon from '/searchSvg.svg'
import postIcon from '/postSvg.svg'
import homeIcon from '/homeSvg.svg'
import stethoIcon from '/doctor.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Healler = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

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

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque doloribus suscipit saepe. Amet provident aspernatur ratione mollitia commodi, minima exercitationem, delectus veritatis dolor hic nihil dolorum, laboriosam vel dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet minus, incidunt iusto in, rem eos totam placeat at, atque nobis. Perspiciatis laboriosam nisi enim illum minus, deleniti facilis beatae.
        </p>
      </main>
    </div>
  )
}

export default Healler;