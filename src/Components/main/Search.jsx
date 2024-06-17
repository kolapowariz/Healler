import Navigation from "./Navigation";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DataContext } from "../PostContext";
import { useState } from "react";

const Search = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()
  const { posts, isLoading } = useContext(DataContext);
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null;
  }
  if (isLoading) {
    return <div className='text-center text-3xl mt-4'>Loading...</div>
  }

  const filteredPosts = posts.filter(post => post.fullName.toLowerCase().includes(search.toLowerCase()));

  return (

    <div className='mt-2 mx-auto'>
      <label htmlFor="search">
        <input
          id="text"
          name="search"
          type="text"
          required
          placeholder="Search"
          className="block mt-4 mx-auto w-2/3 rounded-3xl bg-gray-200 border-0 py-1.5 px-4 text-gray-900 text-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
      <Navigation />
      <main className='w-11/12 mx-auto mb-16 '>
        <ul>
          {filteredPosts.map((posted) => (
            <li key={posted.userId} className='h-auto border mt-4 px-4 py-4 rounded-lg shadow-md'>
              <p>{posted.fullName}</p>
              <p>{posted.work}</p>
              <p>{posted.username}</p>
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

export default Search;