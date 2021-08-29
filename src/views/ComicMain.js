import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import './comic.css'


export const ComicMain = () => {
  const [comic, setComic] = useState([])

  useEffect(() => {
    const getComic = async() => {
      try {
        const { data } = await axios({
          method: 'GET',
          baseURL: 'https://xkcd-api.ridvanaltun.vercel.app',
          url: '/api/comics/latest',
        })
        setComic(comic)
        console.log('comic', comic)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    getComic()
  }, [])
    return (
        <div className='container'>
            <h1>Comic Title</h1>
              <div className='card'>
              </div>
              <div className='starsContainer'>
                <FaStar className='star'/>
                <FaStar className='star'/>
                <FaStar className='star'/>
                <FaStar className='star'/>
                <FaRegStar className='star'/>
              </div>
        </div>
    )
}
