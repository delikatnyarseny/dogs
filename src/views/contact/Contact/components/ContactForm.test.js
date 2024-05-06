import { fireEvent, render, waitFor } from "@testing-library/react";
import emailjs from "emailjs-com";
import React from "react";

import { StylesProvider } from "@/styles/StylesProvider";

import { ContactForm } from "./ContactForm";

jest.mock("emailjs-com", () => ({
  send: jest.fn().mockResolvedValueOnce({ status: 200 }),
}));

describe("ContactForm component", () => {
  it("submits the form with valid data", async () => {
    const { getByPlaceholderText, getByText } = render(
      <StylesProvider>
        <ContactForm />
      </StylesProvider>,
    );

    // Fill in form fields
    fireEvent.change(getByPlaceholderText("First Name"), { target: { value: "John" } });
    fireEvent.change(getByPlaceholderText("Last Name"), { target: { value: "Doe" } });
    fireEvent.change(getByPlaceholderText("Email"), { target: { value: "john@example.com" } });
    fireEvent.change(getByPlaceholderText("Phone Number"), { target: { value: "123456789" } });
    fireEvent.change(getByPlaceholderText("Your message goes here ..."), { target: { value: "Test message" } });

    // Submit the form
    fireEvent.click(getByText("Submit"));

    // Assert that the emailjs send method was called with the correct parameters
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phoneNumber: "123456789",
          message: "Test message",
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY,
      );
    });
  });

  it("displays validation errors for invalid data", async () => {
    const { getByText } = render(
      <StylesProvider>
        <ContactForm />
      </StylesProvider>,
    );

    fireEvent.click(getByText("Submit"));

    await waitFor(() => {
      expect(getByText("First name is required")).toBeInTheDocument();
      expect(getByText("Last name is required")).toBeInTheDocument();
      expect(getByText("Email is required")).toBeInTheDocument();
      expect(getByText("Phone number is required")).toBeInTheDocument();
      expect(getByText("Message is required")).toBeInTheDocument();
    });
  });
});
