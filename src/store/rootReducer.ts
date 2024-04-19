import { combineReducers } from "@reduxjs/toolkit";
import bookAppointmentFormReducer from "./slices/book-appointment-form-slice";
import contactUsFormReducer from "./slices/contact-us-slice";

const rootReducer = combineReducers({
  bookAppointmentForm: bookAppointmentFormReducer,
  contactUsForm: contactUsFormReducer,
});

export default rootReducer;
