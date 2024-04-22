import emailjs from "emailjs-com";
import React, { ChangeEvent, FormEvent, useState } from "react";
import * as yup from "yup";

import { Button } from "@/ui/Button";
import { InputField } from "@/ui/InputField";
import { TextAreaField } from "@/ui/TextAreaField";

import { StyledContactForm } from "./styled";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email must be a valid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

interface FormErrors {
  [key: string]: string | undefined;
}

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
export const ContactForm = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await schema.validate(form, { abortEarly: false });
      setErrors({});

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form,
          process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY,
        )
        .then(
          () => {
            setForm(initialFormState);
          },
          (error) => {
            console.error("Something went wrong", error);
          },
        );
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors = err.inner.reduce((acc: FormErrors, error) => {
          if (error.path) {
            acc[error.path] = error.message;
          }
          return acc;
        }, {});
        setErrors(newErrors);
      }
    }
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <InputField
        name="firstName"
        value={form.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
        error={errors.firstName}
      />

      <InputField
        name="lastName"
        value={form.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
        error={errors.lastName}
      />

      <InputField
        name="email"
        value={form.email}
        onChange={handleInputChange}
        placeholder="Email"
        error={errors.email}
      />

      <InputField
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone Number"
        error={errors.phoneNumber}
      />

      <TextAreaField
        name="message"
        value={form.message}
        onChange={handleInputChange}
        placeholder="Your message goes here ..."
        className="contact-textarea"
        error={errors.message}
      />

      <Button size="lg" className="contact-input__button">
        Submit
      </Button>
    </StyledContactForm>
  );
};
