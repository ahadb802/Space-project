import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const resp = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await resp.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return missions;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
    missions: [],
  },
  reducers: {
    // No need for a switch statement in the reducer anymore
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => ({ ...state, loading: true }),
    [fetchMissions.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      missions: action.payload,
    }),
    [fetchMissions.rejected]: (state) => ({ ...state, loading: false, error: true }),
  },
});

// export const { } = missionsSlice.actions;
export default missionsSlice.reducer;
