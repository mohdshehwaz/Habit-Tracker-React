import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabits } from '../actions';


const New = (props) => {
    const [habit,setHabit] = useState('');
    const [category,setCategory] = useState('');
    const [fav,setFav] = useState(false);
    const dispatch = useDispatch();
    
// Add a new habit
    const addHabit = (e) => {
        e.preventDefault();
        const today = new Date();
        
        const obj = {
            id:Date.now(),
            habit,
            category,
            fav,
            count:0,
            dates:getDay(today)
        };
        dispatch(addHabits(obj));

        props.addHabit(obj);
        setHabit("");
        setCategory("");
    }
    const getDay = (today) => {
        const dates = [];
        for (let i = 0; i < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        
        let day;
        switch (nextDay.getDay()) {
            case 0: day = 'Sun';
                break;
            case 1: day = 'Mon';
                break;
            case 2: day = 'Tue';
                break;
            case 3: day = 'Wed';
                break;
            case 4: day = 'Thu';
                break;
            case 5: day = 'Fri';
                break;
            case 6: day = 'Sat';
                break;
        }
        const obj = {
            date:nextDay.toLocaleDateString(),
            day,
            complete:"no",
            id:Date.now()

        }
        dates.push(obj);

        }
        return dates;
    }

    return (
        
        <form onSubmit={addHabit} id="dashboard-form-id">
            <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} name="category" placeholder="Enter Category" required />
            <input type="text" onChange={(e) => setHabit(e.target.value)} value={habit} name="habit" placeholder="Enter Habit" required />
            <input type="submit" value="Add" className="login_button" />
        </form>
    
    )
}

export default New