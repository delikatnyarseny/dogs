import emailjs from "emailjs-com";
import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { ValidationError } from "yup";

import { Button } from "@/components/Button";
import { InputField } from "@/components/InputField";
import { RootState, useAppDispatch } from "@/store";
import {
  clearForm,
  FormErrors,
  FormFieldKey,
  setErrors,
  setFieldValue,
} from "@/store/slices/contact-us-form-slice";

import { StyledContactForm } from "./styled";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

type EmailJSDataType = {
  [key: string]: string;
};

export const ContactForm = () => {
  const dispatch = useAppDispatch();
  const { form, errors } = useSelector(
    (state: RootState) => state.contactUsForm
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(setFieldValue({ field: name as FormFieldKey, value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await schema.validate(form, { abortEarly: false });
      dispatch(setErrors({}));

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form as unknown as EmailJSDataType,
          process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY
        )
        .then(
          () => {
            dispatch(clearForm());
          },
          (error) => {
            console.error("Something went wrong", error);
          }
        );
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) newErrors[err.path as FormFieldKey] = err.message;
        });
        dispatch(setErrors(newErrors));
      }
    }
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <InputField
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
        error={errors.firstName}
      />

      <InputField
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        error={errors.lastName}
      />

      <InputField
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        error={errors.email}
      />

      <InputField
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        error={errors.phoneNumber}
      />

      <div className="contact-input__textarea-wrapper">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message goes here..."
          className="contact-input__textarea"
        />

        {errors.message && (
          <p className="contact-input__textarea-error">{errors.message}</p>
        )}
      </div>

      <Button size="lg" className="contact-input__button">
        Submit
      </Button>
    </StyledContactForm>
  );
};
