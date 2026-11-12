import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { EnquiryForm } from "@/components/graduater/enquiry";
afterEach(cleanup);
describe("Enquiry handling", () => {
  it("prepares a local draft without claiming it was submitted", () => {
    render(<EnquiryForm />);
    fireEvent.change(screen.getByLabelText("Full Name *"), { target: { value: "Test Student" } });
    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: "student@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number *"), {
      target: { value: "+91 9876543210" },
    });
    fireEvent.change(screen.getByLabelText("Current Education Level *"), {
      target: { value: "Bachelor's degree" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: /Prepare My Enquiry/ }).closest("form") as HTMLFormElement,
    );
    expect(screen.getByRole("status").textContent).toContain("not submitted");
    expect(screen.getByRole("button", { name: "Download Enquiry Draft" })).toBeDefined();
  });
  it("rejects invalid email and phone input using form validation", () => {
    render(<EnquiryForm />);
    const email = screen.getByLabelText("Email *") as HTMLInputElement;
    const phone = screen.getByLabelText("Phone Number *") as HTMLInputElement;
    fireEvent.change(email, { target: { value: "not-an-email" } });
    fireEvent.change(phone, { target: { value: "abcd" } });
    expect(email.checkValidity()).toBe(false);
    expect(phone.checkValidity()).toBe(false);
  });
});
