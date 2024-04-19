import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export type FormFieldKey = keyof FormValues;

export type FormErrors = Partial<Record<FormFieldKey, string>>;

interface FormState {
  form: FormValues;
  errors: FormErrors;
}

const initialState: FormState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  },
  errors: {},
};

const formSlice = createSlice({
  name: "contactUsForm",
  initialState,
  reducers: {
    setFieldValue(
      state,
      action: PayloadAction<{ field: keyof FormValues; value: string }>
    ) {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    setErrors(state, action: PayloadAction<FormErrors>) {
      state.errors = action.payload;
    },
    clearForm() {
      return { ...initialState, errors: {} };
    },
  },
});

export const { setFieldValue, clearForm, setErrors } = formSlice.actions;

export default formSlice.reducer;
