import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateHabit } from '../actions';

const Details = () => {
  const habits = useSelector((state) => state["habits"]).habits;
  const [habit,setHabit] = useState({});
  const [count,setCount] = useState(0);
  const [check,setCheck] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let id = localStorage.getItem("habitId");
    const obj = habits.find(item => item.id == id);
    setCount(obj.count);
    setHabit(obj);
    setCheck(true);
  
  },[habits]);

  const onCheckIcon = (hId,dId,status) => (e) => {
    e.preventDefault();
    console.log("on circle clicked",status);
    dispatch(updateHabit(hId,dId,status));
  }
  const onCircleIcon = (hId,dId,status) => (e) => {
    e.preventDefault();
    
    console.log("on circle clicked",status);
    dispatch(updateHabit(hId,dId,status));
  }
  const onMinusIcon = (hId,dId,status) => (e) => {
    e.preventDefault();
    console.log("on circle clicked",status);
    dispatch(updateHabit(hId,dId,status));
  }
  
  return (
    
    <div id="details-main">
        
        <h1 style={{color: 'white'}}>Details of a Particular Habit</h1>
        <h1 style={{color: 'white'}}>Name : {habit.habit}</h1>
        <div className="sec-div">
            <div className="cat-div">
                <h4 style={{color: 'yellow'}}>Category : {habit.category}</h4>
                <span style={{color: 'yellow'}}><strong>Count : </strong>{habit.count}/7</span>
            </div>
            <div className="dates-info">
              {console.log("Total habits are in details ",habit)}
                {check ? habit.dates.map((date,index) => (
                  <div className="div-date" key={index}>
                    <div>
                        <p style={{fontWeight: 600}}>{date.day}</p>
                        <p>{ date.date}</p>
                    </div>
                        
                    <div className="dates-icon">
                        {date.complete === "yes"
                            ? <div onClick={onCheckIcon(habit.id,date.date,"no")}><i  className="fa-solid fa-circle-check"></i></div>
                            
                            : date.complete === "no"
                                
                            ?<div onClick={onCircleIcon(habit.id,date.date,"none")}><i   className="fa-solid fa-circle-xmark"></i></div>

                              
                            :<i onClick={onMinusIcon(habit.id,date.date,"yes")} className="fa-solid fa-minus"></i> 
                        }
                    </div>
                  </div>
                )) : null} 
                    
                
            </div>

        </div>
  
    </div>
  )
}

export default Details