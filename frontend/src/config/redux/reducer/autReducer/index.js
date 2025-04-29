import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, getUserProfile } from '../../action/authAction';

const initialState = {
  user: {},  // Ensure it's an empty object to avoid undefined issues
  isError: false,
  isSuccess: false,
  isLoading: false,
  loggedIn: false,
  message: "",
  profileFetched: false,
  connections: [],
  connectionRequest: [],
};

const isClient = typeof window !== "undefined";
const token = isClient ? localStorage.getItem('token') : null;

const initialStateWithToken = {
  ...initialState,
  loggedIn: !!token, // If token exists, loggedIn should be true
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateWithToken,
  reducers: {
    reset: () => {
      localStorage.removeItem('token');
      return initialState;
    },
    handleLoginuser: (state) => {
      state.message = "hello"; // Adjust accordingly
    }
  },
  extraReducers: (builder) => {
    builder
      // Login action
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.message = "Logging in...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.loggedIn = true;
        
        // Safely check if action.payload.user exists
        state.user = action.payload?.user || {}; // Default to an empty object if user is undefined
        state.message = "Login successful";

        if (typeof window !== "undefined") {
          localStorage.setItem('token', action.payload?.token);  // Safely set the token
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || "Login failed";
      })
      // Register action
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.message = "Registering...";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.loggedIn = true;
        
        // Safely handle register response
        state.user = action.payload || {};
        state.message = "Registration successful";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || "Registration failed";
      })
      // Fetch profile action
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.message = "Fetching profile...";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profileFetched = true;
      
        state.user = action.payload?.profile?.userId || {};  // ✅ सिर्फ userId को ही user में store करो
        state.profile = action.payload?.profile || {};       // ✅ बाकी प्रोफ़ाइल अलग से रखो
        state.message = "Profile fetched successfully";
      })
      
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.profileFetched = false;
        state.message = action.payload?.message || "Failed to fetch profile";
      });
  }
});

export const { reset, handleLoginuser } = authSlice.actions;
export default authSlice.reducer;
