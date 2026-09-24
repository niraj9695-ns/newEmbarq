import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import BgImage from "../../assets/images/expeditionsHero.webp";
// import k2k from "../../assets/images/k2k.webp";
import Scotland from "../../assets/expedition/Scotland.webp";
// import Georgia from "../../assets/images/georgia.webp";
import k2kk from "../../assets/expedition/kashmirtok.webp";
import Romania from "../../assets/images/romania.webp";
import punjabandhimachal from "../../assets/expedition/Punjab.webp";
import kyrgyzstan from "../../assets/expedition/kyrgyzsnow.webp";
import mizoram from "../../assets/expedition/mizoram.webp";
import newzealand from "../../assets/expedition/newzealand.webp";
import Skorea from "../../assets/images/skorea.webp";
import Finland from "../../assets/images/finland.webp";

import dubai from "../../assets/expedition/dubai.webp";

const expeditions = [
  // {
  //   title: "KUTCH TO KIBITHOO",
  //   subtitle: "Salt flats to North eastern mountains. India at its widest.",
  //   date: "8th to 28th March 2026",
  //   image: k2k,
  //   slug: "k2k2026",
  //   status: "completed",
  // },
  // {
  //   title: "Scotland",
  //   subtitle: "NC500. Coastlines. Castle country",
  //   date: "8th to 17th May, 2026",
  //   image: Scotland,
  //   slug: "scotland",
  //   status: "upcoming",
  // },
  //{
  //   title: "Georgia",
  //   subtitle: "Mountain passes. Offbeat routes. Oldest wine making.",
  //   date: "8th to 16th August, 2026",
  //   image: Georgia,
  //   slug: "georgia",
  //   status: "upcoming",
  // },
    {
    title: "Dubai Weekend Drive",
    subtitle: "A weekend of discovery and adventure.",
    date: "31st October to 1st November, 2026",
    image: dubai,
    slug: "dubaiweekenddrive",
    status: "upcoming",
  },
  {
    title: "Kashmir to Kanyakumari",
    subtitle: "One nation. Endless landscapes.",
    date: "7th March to 19th March, 2027",
    image: k2kk,
    slug: "kashmirtokanyakumari",
    status: "upcoming",
  },
  // {
  //   title: "Romania",
  //   subtitle: "Carpathian passes. Quiet European charm.",
  //   date: "20th to 28th June, 2026",
  //   image: Romania,
  //   slug: "romania",
  //   status: "upcoming",
  // },
  // {
  //   title: "Punjab & Himachal",
  //   subtitle: "Himalayan roads. Soulful escapes.",
  //   date: "4th September – 9th September 2026",
  //   image: punjabandhimachal,
  //   slug: "punjabandhimachal",
  //   status: "upcoming",
  // },
  {
    title: "Kyrgyzstan ",
    subtitle: "Mountain landscapes, alpine lakes.",
    date: "19th December to 26th December, 2026",
    image: kyrgyzstan,
    slug: "kyrgyzstansnowdrive",
    status: "upcoming",
  },
  {
    title: "Mizoram",
    subtitle: "Misty mountains. Hidden horizons.",
    date: "10th October – 18th October 2026",
    image: mizoram,
    slug: "mizoram",
    status: "upcoming",
  },
  {
    title: "New Zealand",
    subtitle: "Glacial roads. Untamed beauty.",
    date: "20th December 2026 to 1st January 2027",
    image: newzealand,
    slug: "newzealand",
    status: "upcoming",
  },
  {
    title: "South Korea",
    subtitle: "Perfect roads. Mountain curves. Coastal light.",
    date: "21st to 29th November, 2026",
    image: Skorea,
    slug: "southkorea",
    status: "upcoming",
  },
  // {
  //   title: "Finland",
  //   subtitle: "Winter wonderland. Dark skies. Northern lights.",
  //   date: "5th to 13th December, 2026",
  //   image: Finland,
  //   slug: "finland",
  //   status: "upcoming",
  // },

  {
    title: "Scotland",
    subtitle: "NC500. Coastlines. Castle country",
    date: "1st to  9th May, 2027",
    image: Scotland,
    slug: "scotlandnorthcoast500",
    status: "upcoming",
  },
];

export default function ExpeditionsPage() {
  const [tab, setTab] = useState(0);

  const filteredData = expeditions.filter((exp) =>
    tab === 0 ? exp.status === "upcoming" : exp.status === "completed",
  );

  return (
    <Box sx={{ background: "#e6dccb", minHeight: "100vh", pb: 8 }}>
      {/* Hero */}
      <Box
        sx={{
          height: "500px",
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Tabs */}
      <Box sx={{ px: { xs: 2, md: 6 }, mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            fontFamily: "Roboto Flex",
          }}
        >
          {/* Upcoming */}
          <Typography
            onClick={() => setTab(0)}
            sx={{
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: 500,
              color: tab === 0 ? "#f4a825" : "#000",
              transition: "color 0.2s ease",
            }}
          >
            Upcoming
          </Typography>

          {/* Divider */}
          <Typography sx={{ color: "#999", fontSize: "20px" }}>|</Typography>

          {/* Completed */}
          <Typography
            onClick={() => setTab(1)}
            sx={{
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: 500,
              color: tab === 1 ? "#f4a825" : "#000",
              transition: "color 0.2s ease",
            }}
          >
            Completed
          </Typography>
        </Box>
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={4}
        sx={{ px: { xs: 2, md: 6 }, mt: 2 }}
        justifyContent="center"
      >
        {filteredData.map((exp, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                borderRadius: "20px",
                background: "#ffffff",
                p: 1.5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* Image */}
              <Box sx={{ borderRadius: "16px", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={exp.image}
                  alt={exp.title}
                />
              </Box>

              <CardContent sx={{ px: 1, pt: 2 }}>
                {/* Date + Status inline */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Roboto Flex",
                      color: "#000",
                      fontWeight: 600,
                    }}
                  >
                    {exp.date}
                  </Typography>

                  <Box
                    sx={{
                      fontFamily: "Roboto Flex",
                      bgcolor: "#000",
                      color: "#fff",
                      fontSize: "10px",
                      p: 1,
                      borderRadius: "15px",
                      textTransform: "capitalize",
                    }}
                  >
                    {exp.status}
                  </Box>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Fraunces",
                    color: "#F6B43F",
                    fontWeight: 700,
                    mt: 1,
                    letterSpacing: "0.5px",
                  }}
                >
                  {exp.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Roboto Flex",
                    color: "#777",
                    mt: 0.5,
                    mb: 2,
                  }}
                >
                  {exp.subtitle}
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  component={Link}
                  to={`/expedition/${exp.slug}`}
                  sx={{
                    fontFamily: "Roboto Flex",
                    borderRadius: "30px",
                    textTransform: "none",
                    background: "#f4a825",
                    px: 2.5,
                    "&:hover": {
                      background: "#e6951f",
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
