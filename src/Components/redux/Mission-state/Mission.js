import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const resp = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await resp.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    joined: false,
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
    toggleJoin: (state, action) => {
      const missionId = action.payload;
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) {
          return mission;
        }
        return { ...mission, joined: true };
      });
      return {
        ...state,
        missions: [...newMissions],
      };
    },
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

export const { toggleJoin } = missionsSlice.actions;
export default missionsSlice.reducer;
