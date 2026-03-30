import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CancelPolicy from "../assets/footer/cancellationpolicy.webp";

export default function PrivacyPolicy() {
  return (
    <Box sx={{ bgcolor: "#f5f7fb", minHeight: "100vh" }}>
      
      {/* BANNER */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 220, md: 320 },
        }}
      >
        <Box
          component="img"
          src={CancelPolicy}
          alt="Privacy Policy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "42px" },
              fontFamily: "Fraunces, serif",
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        
        {/* SECTION */}
        <Typography variant="h6" sx={headingStyle}>
          1. Introduction
        </Typography>
        <Typography sx={textStyle}>
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our website and services.
        </Typography>

        <Typography variant="h6" sx={headingStyle}>
          2. Information We Collect
        </Typography>
        <Box component="ul" sx={listStyle}>
          <li>Name, email address, and contact number</li>
          <li>Booking and travel information</li>
          <li>Payment and billing details</li>
          <li>Device and browser information</li>
        </Box>

        <Typography variant="h6" sx={headingStyle}>
          3. How We Use Your Information
        </Typography>
        <Box component="ul" sx={listStyle}>
          <li>To process trip bookings and payments</li>
          <li>To communicate updates regarding your trip</li>
          <li>To improve our services and website experience</li>
          <li>To provide customer support</li>
        </Box>

        <Typography variant="h6" sx={headingStyle}>
          4. Sharing of Information
        </Typography>
        <Typography sx={textStyle}>
          We do not sell your personal data. Your information may only be
          shared with trusted service providers such as payment gateways,
          travel partners, or legal authorities if required.
        </Typography>

        <Typography variant="h6" sx={headingStyle}>
          5. Data Security
        </Typography>
        <Typography sx={textStyle}>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
        </Typography>

        <Typography variant="h6" sx={headingStyle}>
          6. Cookies
        </Typography>
        <Typography sx={textStyle}>
          Our website may use cookies to improve user experience, analyze
          website traffic, and remember your preferences.
        </Typography>

        <Typography variant="h6" sx={headingStyle}>
          7. Your Rights
        </Typography>
        <Typography sx={textStyle}>
          You have the right to request access, correction, or deletion of
          your personal data by contacting us.
        </Typography>

        <Typography variant="h6" sx={headingStyle}>
          8. Contact Us
        </Typography>
        <Typography sx={textStyle}>
          If you have any questions regarding this Privacy Policy, please
          contact us at <b>enquiries@embarq.in</b>.
        </Typography>

      </Container>
    </Box>
  );
}

const headingStyle = {
  fontWeight: 600,
  mt: 3,
  mb: 1,
  color:'#F6A61D',
  fontSize: { xs: "1rem", md: "2rem" },
};

const textStyle = {
  color: "#444",
  lineHeight: 1.8,
 fontSize: { xs: "0.9rem", md: "1.2rem" },
  mb: 1,
};

const listStyle = {
  pl: 3,
  mb: 1,
  color: "#444",
  lineHeight: 1.8,
 fontSize: { xs: "0.9rem", md: "1.2rem" },
};