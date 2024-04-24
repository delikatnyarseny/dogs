import React, { FC, FormEvent, useCallback, useState } from "react";
import * as yup from "yup";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Button } from "@/ui/Button";
import { InputField } from "@/ui/InputField";
import { Modal } from "@/ui/Modal";
import { TextAreaField } from "@/ui/TextAreaField";

import { BookingCalendar } from "../BookingCalendar";
import { BookingPaymentForm } from "../BookingPaymentForm";
import { StyledBookingForm } from "./styled";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Must be a valid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  creditNumber: yup.string().required("Credit card number is required"),
  creditExpire: yup.string().required("Expiration date is required"),
  creditCvv: yup.string().required("CVV is required"),
  creditName: yup.string().required("Cardholder name is required"),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  choosenTimeslot: string;
  specialRequests: string;
  creditNumber: string;
  creditExpire: string;
  creditCvv: string;
  creditName: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const BookingForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    choosenTimeslot: "",
    specialRequests: "",
    creditNumber: "",
    creditExpire: "",
    creditCvv: "",
    creditName: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isModalOpen, setModalOpen] = useState(false);

  useLockBodyScroll(isModalOpen);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setModalOpen(true);
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

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFormDateChange = (value: string) => {
    setFormData((prev) => ({ ...prev, choosenTimeslot: value }));
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("bookingFormData", JSON.stringify(formData));
    setModalOpen(false); // Optionally close the modal after saving
  };

  return (
    <StyledBookingForm onSubmit={handleSubmit}>
      <div className="booking-form__base-info-wrapper">
        <InputField
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          error={errors.firstName}
        />
        <InputField
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          error={errors.lastName}
        />
        <InputField
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          error={errors.email}
        />
        <InputField
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone number"
          error={errors.phone}
        />
      </div>

      <BookingCalendar handleFormDateChange={handleFormDateChange} className="booking-form__calendar" />

      <TextAreaField
        name="specialRequests"
        value={formData.specialRequests}
        onChange={handleInputChange}
        placeholder="Any special requests for your pet(s)..."
        className="booking-form__textarea"
      />

      <BookingPaymentForm
        className="booking-form__payment-form"
        creditNumber={formData.creditNumber}
        creditExpire={formData.creditExpire}
        creditCvv={formData.creditCvv}
        creditName={formData.creditName}
        errors={{
          creditNumber: errors.creditNumber,
          creditExpire: errors.creditExpire,
          creditCvv: errors.creditCvv,
          creditName: errors.creditName,
        }}
        handleInputChange={handleInputChange}
      />

      <Button type="submit" className="booking-form__button">
        Book Appointment
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div>
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>{`${key}: ${value}`}</div>
          ))}
          <Button onClick={handleSaveToLocalStorage}>Save to Local Storage</Button>
        </div>

        <button onClick={() => setModalOpen(false)}>X</button>
      </Modal>
    </StyledBookingForm>
  );
};

export { BookingForm };
