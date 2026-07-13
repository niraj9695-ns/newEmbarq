import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./GiftTripForm.css";
import bg from "../../assets/Gift/gifttrip-form-bg.webp";

function GiftTripForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isPhone = (val) => /^[6-9]\d{9}$/.test(val);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!isPhone(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit Indian number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 5) {
      newErrors.message = "Message should be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: `+91${formData.phone}`,
        pageLink: window.location.href,
      };

      const response = await fetch(
        "https://ynqykkim41.execute-api.ap-south-1.amazonaws.com/default/submitLead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create lead");
      }

      try {
        await emailjs.send(
          "service_pvpvpko",
          "template_3y4o1t9",
          {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            user_city: formData.city,
            user_message: formData.message,
          },
          "e1g2avhWWng2DaSoX"
        );
      } catch (emailError) {
        // Lead already created; email failure should not block submission.
      }

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="gifttrip-form"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="gifttrip-form-overlay">
        <h2 className="gifttrip-form-title">
          Buy the perfect gift! Get in touch
        </h2>

        <form
          className="gifttrip-form-container"
          onSubmit={handleSubmit}
        >
          <div className="gifttrip-row">
            <div className="gifttrip-field">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "gifttrip-input-error" : ""}
              />
              {errors.name && (
                <span className="gifttrip-error">{errors.name}</span>
              )}
            </div>

            <div className="gifttrip-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "gifttrip-input-error" : ""}
              />
              {errors.email && (
                <span className="gifttrip-error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="gifttrip-row">
            <div className="gifttrip-field">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "gifttrip-input-error" : ""}
              />
              {errors.phone && (
                <span className="gifttrip-error">{errors.phone}</span>
              )}
            </div>

            <div className="gifttrip-field">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? "gifttrip-input-error" : ""}
              />
              {errors.city && (
                <span className="gifttrip-error">{errors.city}</span>
              )}
            </div>
          </div>

          <div className="gifttrip-field">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "gifttrip-input-error" : ""}
            />
            {errors.message && (
              <span className="gifttrip-error">{errors.message}</span>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default GiftTripForm;
