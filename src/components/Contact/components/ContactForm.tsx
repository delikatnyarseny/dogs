import React, { ChangeEvent, FormEvent, useState } from "react";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { ValidationError } from "yup";

interface FormData {
  [key: string]: string;
}

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

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY!
        )
        .then(
          () => {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              message: "",
            });
          },
          (error) => {
            console.log("Something went wrong", error);
          }
        );
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors: Record<string, string> = {};
        error.inner.forEach((err) => {
          if (err.path) newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName}</p>}

      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      {errors.lastName && <p>{errors.lastName}</p>}

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone number"
      />
      {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message goes here..."
      />
      {errors.message && <p>{errors.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
};
