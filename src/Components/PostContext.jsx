import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [posts, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get('https://dummyapi.online/api/social-profiles');
      setPost(response.data);
      setIsLoading(false);
    }

    fetchData();
  }, [])

  return (
    <DataContext.Provider value={{ posts, isLoading }}>
      {children}
    </DataContext.Provider>
  )
}

