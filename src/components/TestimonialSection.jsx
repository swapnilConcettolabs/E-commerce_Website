import React, { useState } from 'react'
import '../index.css'
import people from '../data/testimonial_data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


export const TestimonialSection = () => {
    
    const [index,setIndex] = useState(0)

    const {text,image,job,name} = people[index]
    
    const checkNumber = (number) => {
        if( number > people.length-1){
            return 0
        }
        if(number <0){
            return people.length-1
        }
        return number
    }


    const prevPerson = () => {
        setIndex((index)=>{
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    

    const nextPerson = () => {
        setIndex((index)=>{
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='btn-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
        </article>

    )
}
