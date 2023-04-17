
import New from './New';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteHabit } from '../actions';

function Home(props) {
  // const [allHabit,setAllHabit] = useState([]);
  const allHabit = useSelector((state) => state["habits"]).habits;
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const addHabit = (habit) => {
    // setAllHabit((prevHabit => [...prevHabit,habit]));

  }
  const onDetails = (id) => (e) => {
    // e.preventDefault();
    
    localStorage.setItem("habitId",id);
    navigate('/details');
  }
  const deleteSingleHabit = (id) => (e) => {
    // e.preventDefault();
   
    dispatch(deleteHabit(id));
  }

  return (
    <div className="App">
      
      <div id="dashboard-id">
        
        <h1>Track Your Habits</h1>
        <New addHabit={addHabit} />
        <div id="total-habits">
          
          {allHabit.map((habit,index) => (
            <div key={index} className="habit">
                  <h1>{habit.habit}</h1>
                  <div className="habit-details">
                      <h4>Category : { habit.category}</h4>
                      <span><strong>Count : </strong>{habit.count}/7</span>
                      <button className='details-link' onClick={deleteSingleHabit(habit.id)}>Delete</button>
                      <button className="details-link" onClick={onDetails(habit.id)}>Details</button>
                  </div>
              </div>
          ))}
             
        </div>
    
      </div>
      
    </div>
  );
}

export default Home;
