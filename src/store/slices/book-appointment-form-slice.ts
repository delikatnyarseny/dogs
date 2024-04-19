import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timeslot: string;
  choosenDate: Date | null;
  specialRequests: string;
  creditCard: {
    number: string;
    expire: string;
    cvv: string;
    name: string;
  };
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  timeslot: "",
  choosenDate: null,
  specialRequests: "",
  creditCard: {
    number: "",
    expire: "",
    cvv: "",
    name: "",
  },
};

const bookAppointmentFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setTimeslot(state, action: PayloadAction<string>) {
      state.timeslot = action.payload;
    },
    setChoosenDate(state, action: PayloadAction<Date>) {
      state.choosenDate = action.payload;
    },
    setSpecialRequests(state, action: PayloadAction<string>) {
      state.specialRequests = action.payload;
    },
    setCreditCard(
      state,
      action: PayloadAction<{
        number: string;
        expire: string;
        cvv: string;
        name: string;
      }>
    ) {
      state.creditCard = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setTimeslot,
  setChoosenDate,
  setSpecialRequests,
  setCreditCard,
} = bookAppointmentFormSlice.actions;

export default bookAppointmentFormSlice.reducer;
