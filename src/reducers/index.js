import { ADD_HABIT,DELETE_HABIT,UPDATE_HABIT } from "../actions";

const initialHabitState = {
    habits : []
};
const habits = (state = initialHabitState,action) => {
    switch(action.type){
        case ADD_HABIT:
            
            return {
                habits:[
                    ...state.habits,
                    action.habit
                ]
            }
            
        case DELETE_HABIT:
            const obj = state.habits.filter(habit => habit.id != action.id);
            
            return {
                habits:obj
            };
        case UPDATE_HABIT:

            const habits = state.habits.map(habit => {

                if(habit.id === action.hId){
                    let count =habit.count;
                    const dates = habit.dates.map(item => {
                        if(item.date === action.dId){
                            
                            
                            if(action.status == "yes"){
                                count += 1;
                            }
                            else{
                                if(count >0 && action.status == 'no' ){
                                    count -= 1;
                                }
                                
                            }


                            return {...item,complete:action.status}
                        }
                        return item;
                    });
                    habit = {...habit,dates,count};
                    return habit;
                }
                return habit;
            });
            // let habit = state.habits.find(habit => habit.id === action.hId);
            
            // console.log("find habit in reducer",habit);
            // const dates = habit.dates.map(item => {
            //     if(item.date === action.dId){
            //         return {...item,complete:action.status}
            //     }
            //     return item;
            // });
            // habit = {...habit,dates};
            return {
                habits:habits
            }

            console.log("find habit in reducer",habits);
            
        
        default:
            return state
    }
    return state;
}
export default habits;
