import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  choosenTimeslot: string;
  choosenDate: string;
  specialRequests: string;
  creditNumber: string;
  creditExpire: string;
  creditCvv: string;
  creditName: string;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  choosenTimeslot: "",
  choosenDate: "",
  specialRequests: "",
  creditNumber: "",
  creditExpire: "",
  creditCvv: "",
  creditName: "",
};

const bookAppointmentFormSlice = createSlice({
  name: "bookAppointmentForm",
  initialState,
  reducers: {
    setFieldValue(state, action: PayloadAction<{ field: keyof FormState; value: string }>) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setFieldValue } = bookAppointmentFormSlice.actions;

export default bookAppointmentFormSlice.reducer;
