import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetail : {
  }
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserDetails : (state, action) => {
        state.userDetail = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer