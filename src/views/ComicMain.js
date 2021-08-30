import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import Rating from '@material-ui/lab/Rating'
import './comic.scss'
import { Loading } from '../components/loading/Loading'
import { Error } from '../components/error/Error'


export const ComicMain = () => {
  const [comic, setComic] = useState(null)
  const [value, setValue] = useState(1)
  const [state, setstate] = useState({
    loading: false,
    error: false,
  })

  useEffect(() => {
    const getComic = async() => {
      try {
        setstate({ loading: true })
        const { data } = await axios({
          method: 'GET',
          baseURL: process.env.REACT_APP_BASE_URL,
          url: '/',
        })
        setComic(data)
        setstate({loading: false})
      } catch (error) {
        setstate({
          loading: false,
          error: true
        })
      }
    }
    getComic()
  }, [])

  if (state.loading) return <Loading />
  if (state.error) return <Error />

    return (
      <div className='container'>
        
        {!!comic && 
        <>
        <h1>{comic.title}</h1>
        <div className='card'>
          <img src={comic.img} alt='random comic'/>
        </div>
        </>
        }
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
