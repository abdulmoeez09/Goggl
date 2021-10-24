import React, { createContext, useContext, useState } from 'react'
const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('Elon Musk')
  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    })
    const data = await response.json()
    console.log(data)
    if (type.includes('/news')) {
      setResults(data.entries)
    } else if (type.includes('/images')) {
      setResults(data.image_results)
    } else {
      setResults(data.results)
    }

    setIsLoading(false)
  }
  return (
    <ResultContext.Provider
      value={{ getResults, results, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => useContext(ResultContext)