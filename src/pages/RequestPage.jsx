import React, { useState, useRef } from "react";
import "../pages/reqPage.css";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { problemsByService } from "../data/problemsByService";
import Header from "../components/header/Header";

export default function RequestPage() {
  const location = useLocation();
  const formRef = useRef();

  const selectedService = location.state?.serviceTitle || "";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
    appliance: selectedService,
    problems: "",
    details: "",
  });

  const problemsList = problemsByService[form.appliance] || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.address || !form.zipCode || !form.phoneNumber) {
      alert("Please fill required fields");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_5isfl8b",    
        "template_1eihquu",    
        formRef.current,
        { publicKey: "JJsLQIXT5guokDKSf" }
        
      )
      .then(
        () => {
          alert("Thank you! We will contact you within 30 minutes!");
          // Сброс формы
          setForm({
            firstName: "",
            address: "",
            zipCode: "",
            phoneNumber: "",
            appliance: selectedService,
            problems: "",
            details: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
    <Header></Header>
    <section className="req-wrapper">
      <div className="req-box">
        <div className="req-box-bg">

          <h2 className="req-title">Request a Service</h2>
          <p className="req-sub">
            Fill out the form and our technician will contact you shortly
          </p>

          <form ref={formRef} className="req-form" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="req-field">
              <label>Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Address */}
            <div className="req-field">
              <label>Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main St"
                required
              />
            </div>

            {/* ZIP + Phone */}
            <div className="req-row">
              <div className="req-field">
                <label>ZIP</label>
                <input
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  placeholder="60616"
                  required
                />
              </div>

              <div className="req-field">
                <label>Phone</label>
                <input
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (773) 000-0000"
                  required
                />
              </div>
            </div>

            {/* Appliance */}
            <div className="req-field">
              <label>Appliance Type</label>
              <input
                name="appliance"
                value={form.appliance}
                readOnly
                className="req-appliance"
              />
            </div>

            {/* Problem list */}
            {problemsList.length > 0 && (
              <div className="req-field">
                <label>Problem Type</label>
                <select
                  name="problems"
                  value={form.problems}
                  onChange={handleChange}
                >
                  <option value="">Select a problem</option>
                  {problemsList.map((problem) => (
                    <option key={problem} value={problem}>
                      {problem}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Optional details */}
            <div className="req-field">
              <label>
                Additional details <span className="req-optional">(optional)</span>
              </label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Describe the issue if needed…"
                rows="3"
              />
            </div>

            <p className="req-trust">
              ✔ Licensed technicians • ✔ Same-day service • ✔ No hidden fees
            </p>

            <button
              className="req-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>

            <p className="req-note">
              We respect your privacy. Your information is never shared.
            </p>

          </form>
        </div>
      </div>
    </section>
    </>
  );
}
