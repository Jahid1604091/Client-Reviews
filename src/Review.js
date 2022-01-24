import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  const checkNumber = (n) =>{
    if(n > people.length - 1){
      return 0
    }
    if(n<0){
      return people.length - 1
    }

    return n
  }
  const nextPerson = () =>{
    setIndex((idx)=>{
      return checkNumber(idx + 1)
    })
  }

  const prevPerson = () =>{
    setIndex((idx)=>{
      return checkNumber(idx - 1)
    })
  }

  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * people.length)
    //random number may be repeatative
    if(randomNumber === index){
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
      <button className="prev-btn" onClick={nextPerson}><FaChevronRight/></button>
    </div>
     <button className="random-btn" onClick={randomPerson}>surprise me</button>
  </article>
};

export default Review;
