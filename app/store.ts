import {
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

interface CalcState {
  value: number,
  theme: number
}

const initialState: CalcState = {
  value: 0,
  theme: 1
}

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

const store = configureStore({
  reducer: {
    calc: calcSlice.reducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store

