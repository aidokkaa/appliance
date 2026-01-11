import React, { useState, useRef, useEffect } from "react";
import "../pages/reqPage.css";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { problemsByService } from "../data/problemsByService";
import Header from "../components/header/Header";

const applianceOptions = [
  "Refrigerators",
  "Washing Machines",
  "Dishwashers",
  "Microwaves",
  "Dryers",
  "Ice Machines",
  "Ovens",
  "Cooktops",
  "Vent Hoods",
  "Stoves / Ranges",
  "Warmer Drawers",
  "Garbage Disposals",
  "Freezers",
];

export default function RequestPage() {
  const location = useLocation();
  const formRef = useRef();
  const statusRef = useRef(null); 

  const selectedService = location.state?.serviceTitle || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
    appliance: selectedService,
    problems: "",
    details: "",
  });

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({
        ...prev,
        appliance: selectedService,
        problems: "",
      }));
    }
  }, [selectedService]);

  const problemsList = problemsByService[form.appliance] || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "appliance" ? { problems: "" } : {}),
    }));
  };

  const scrollToStatus = () => {
    if (statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!form.firstName || !form.address || !form.zipCode || !form.phoneNumber) {
      setSubmitStatus("required");
      setTimeout(scrollToStatus, 50); 
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
      .then(() => {
        setSubmitStatus("success");
        setIsSubmitting(false);

        setForm({
          firstName: "",
          address: "",
          zipCode: "",
          phoneNumber: "",
          appliance: selectedService,
          problems: "",
          details: "",
        });

        setTimeout(scrollToStatus, 50); 
      })
      .catch(() => {
        setSubmitStatus("error");
        setIsSubmitting(false);
        setTimeout(scrollToStatus, 50);
      });
  };

  return (
    <>
      <Header />

      <section className="req-wrapper">
        <div className="req-box">
          <div className="req-box-bg">
            <h2 className="req-title">Request a Service</h2>
            <p className="req-sub">
              Fill out the form and our technician will contact you shortly
            </p>
            {submitStatus === "success" && (
              <div ref={statusRef} className="req-msg req-msg--success">
                Thank you! We will contact you within 30 minutes.
              </div>
            )}

            {submitStatus === "error" && (
              <div ref={statusRef} className="req-msg req-msg--error">
                Something went wrong. Please try again.
              </div>
            )}

            {submitStatus === "required" && (
              <div ref={statusRef} className="req-msg req-msg--warning">
                Please fill all required fields.
              </div>
            )}

            <form ref={formRef} className="req-form" onSubmit={handleSubmit}>
              <div className="req-field">
                <label>Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="req-field">
                <label>Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Main St"
                />
              </div>

              <div className="req-row">
                <div className="req-field">
                  <label>ZIP</label>
                  <input
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    placeholder="60616"
                  />
                </div>

                <div className="req-field">
                  <label>Phone</label>
                  <input
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 (773) 000-0000"
                  />
                </div>
              </div>

              <div className="req-field">
                <label>Appliance Type</label>

                {selectedService ? (
                  <input
                    name="appliance"
                    value={form.appliance}
                    readOnly
                    placeholder="Selected from services"
                    className="req-appliance req-appliance--locked"
                  />
                ) : (
                  <select
                    name="appliance"
                    value={form.appliance}
                    onChange={handleChange}
                  >
                    <option value="">Select appliance</option>
                    {applianceOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              </div>

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

              <div className="req-field">
                <label>
                  Additional details{" "}
                  <span className="req-optional">(optional)</span>
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
