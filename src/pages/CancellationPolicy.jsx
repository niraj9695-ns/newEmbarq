import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CancelPolicy from "../assets/footer/cancellationpolicy.webp";

export default function PolicyPage() {
  return (
    <Box sx={{ bgcolor: "#f5f7fb", minHeight: "100vh" }}>
      
      {/* BANNER */}
      <Box sx={{ position: "relative", height: { xs: 220, md: 320 } }}>
        <Box
          component="img"
          src={CancelPolicy}
          alt="Travel Policy"
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
              fontSize: { xs: "26px", md: "42px" },
              fontFamily: "Fraunces, serif",
              textAlign: "center",
              px: 2,
            }}
          >
            Booking & Cancellation Policy
          </Typography>
        </Box>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>

        {/* BOOKING POLICY */}
        <Typography variant="h6" sx={headingStyle}>
          Booking Policy
        </Typography>
        <Box component="ul" sx={listStyle}>
          <li>25% of the trip cost has to be paid to confirm booking.</li>
          <li>
            Remaining 75% amount of the trip cost must be paid on or before
            45 days before the trip begins.
          </li>
        </Box>

        {/* CANCELLATION POLICY */}
        <Typography variant="h6" sx={headingStyle}>
          Cancellation Policy
        </Typography>
        <Box component="ul" sx={listStyle}>
          <li>
            If a trip booking is cancelled 60 days prior to the start date,
            10% of the trip cost will be charged as cancellation fee.
          </li>
          <li>
            If a trip booking is cancelled within 60–45 days prior to start
            date, 25% of the trip cost will be charged as cancellation fee.
          </li>
          <li>
            If a trip booking is cancelled within 45–30 days prior to the
            start date, 50% of the trip cost will be charged as cancellation
            fee.
          </li>
          <li>
            If a trip booking is cancelled within 30 days prior to the start
            date, 100% of the trip cost will be charged as cancellation fee.
          </li>
          <li>
            If the trip is cancelled by Embarq for unavoidable circumstances,
            100% of the trip cost will be refunded.
          </li>
          <li>
            If the trip is cancelled due to any pandemic related reasons at
            any time before the start date, we will attempt to refund as much
            as possible or adjust the amount in the next trip.
          </li>
        </Box>

        {/* CHILD POLICY */}
        <Typography variant="h6" sx={headingStyle}>
          Child Policy
        </Typography>
        <Box component="ul" sx={listStyle}>
          <li>
            Children between the age group of 0 to 4 years are not allowed on
            Embarq trips.
          </li>
          <li>
            Children between the age group of 5 to 10 years get up to 20%
            discount on the trip cost.
          </li>
          <li>
            Travellers will have to bear the cost of a child safety seat (if
            applicable) and the child’s insurance.
          </li>
          <li>
            Children with 11 years of age and above will be charged 100% trip
            cost.
          </li>
          <li>
            Persons below 18 years of age are not allowed to travel on a
            motorcycle on Embarq trips.
          </li>
          <li>
            However, children above five years of age can be a part of an
            Embarq motorcycle trip by travelling in the back-up vehicle.
          </li>
        </Box>

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

const listStyle = {
  pl: 3,
  mb: 1,
  color: "#444",
  lineHeight: 1.8,
 fontSize: { xs: "0.9rem", md: "1.2rem" },
};