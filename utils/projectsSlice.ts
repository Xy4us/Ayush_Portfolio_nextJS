import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectsState {
  projects: Project[] | null;
}

const initialState: ProjectsState = {
  projects: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { addProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
