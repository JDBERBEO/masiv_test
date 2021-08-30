import React from 'react'
import './comic.scss'

export const ComicView = ({comic}) => {
  return (
    <>
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
    </>
  )
}
