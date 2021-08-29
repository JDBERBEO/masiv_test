import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import Rating from '@material-ui/lab/Rating'
import './comic.css'


export const ComicMain = () => {
  const [comic, setComic] = useState([])
  const [value, setValue] = useState(2)

  console.log('value', value)
  useEffect(() => {
    const getComic = async() => {
      try {
        const { data } = await axios({
          method: 'GET',
          baseURL: 'https://xkcd.com',
          url: '/614/info.0.json',
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
              <div>
                <h2>Rate this comic strip here!</h2>
              </div>
              <div className='starsContainer'>
              <Rating
                name='rating'
                value={value}
                size="large"
                icon={<FaStar className='star' />}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
              />
              </div>
        </div>
    )
}
