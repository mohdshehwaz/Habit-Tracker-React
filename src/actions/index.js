export const ADD_HABIT = 'ADD_HABIT';
export const UPDATE_HABIT = 'UPDATE_HABIT';
export const HABIT_DETAILS = 'HABIT_DETAILS';
export const DELETE_HABIT = 'HABIT_DELETE';

export const  addHabits = (habit) => {
    return {
        type:ADD_HABIT,
        habit
    }
}
export const deleteHabit = (id) => {
    return {
        type:DELETE_HABIT,
        id
    }
}
export const updateHabit = (hId,dId,status) => {
    return {
        type:UPDATE_HABIT,
        hId,
        dId,
        status
    }
}

