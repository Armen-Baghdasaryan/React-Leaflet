import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pointsFrom: [],
    pointsTo: [],
};

const selectedPoints = createSlice({
    name: "selecdetPoints",
    initialState,
    reducers: {
        createPoints: (state, action) => {
            state.pointsFrom = action.payload.pointA.point
            state.pointsTo = action.payload.pointB.point
        },

        editPointsFrom: (state, action) => {
            state.pointsFrom = action.payload
        },

        editPointsTo: (state, action) => {
            state.pointsTo = action.payload
        }
    },
});

export const { createPoints, editPointsFrom, editPointsTo } = selectedPoints.actions;

export default selectedPoints.reducer;
