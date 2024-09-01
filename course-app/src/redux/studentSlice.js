import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    enrolledCourses: [],
};

const studentSlice  = createSlice({
    name : 'enrolledCourse',
    initialState,
    reducers : {
        enrollToCourse(state, action) {
            const newCourse = action.payload;
            console.log(newCourse);
            const existingCourse = state.enrolledCourses.find(item => item.id === newCourse.id);

            if (!existingCourse) {
                state.enrolledCourses.push({ ...newCourse });
            }

            // Logging for debugging purposes
            // console.log("Successfully enrolled to course:", newCourse);
            console.log("Updated enrolledCourses:", state.enrolledCourses);
            console.log("Length enrolledCourses:", state.enrolledCourses.length);
        }
    }
});


export const {enrollToCourse} = studentSlice.actions;
export default studentSlice.reducer;