import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import BgImage from "../../assets/images/expeditionsHero.webp";
import k2k from "../../assets/images/k2k.webp";
import Scotland from "../../assets/images/scotland.webp";
import Romania from "../../assets/images/romania.webp";
import Georgia from "../../assets/images/georgia.webp";
import Skorea from "../../assets/images/skorea.webp";
import Finland from "../../assets/images/finland.webp";

const expeditions = [
  {
    title: "KUTCH TO KIBITHOO",
    subtitle: "Salt flats to North eastern mountains. India at its widest.",
    date: "8th to 28th March 2026",
    image: k2k,
    slug: "k2k2026",
    status: "completed",
  },
  {
    title: "Scotland",
    subtitle: "NC500. Coastlines. Castle country",
    date: "8th to 17th May, 2026",
    image: Scotland,
    slug: "scotland",
    status: "upcoming",
  },
  {
    title: "Romania",
    subtitle: "Carpathian passes. Quiet European charm.",
    date: "20th to 28th June, 2026",
    image: Romania,
    slug: "romania",
    status: "upcoming",
  },
  {
    title: "Georgia",
    subtitle: "Mountain passes. Offbeat routes. Oldest wine making.",
    date: "8th to 16th August, 2026",
    image: Georgia,
    slug: "georgia",
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
  {
    title: "Finland",
    subtitle: "Winter wonderland. Dark skies. Northern lights.",
    date: "5th to 13th December, 2026",
    image: Finland,
    slug: "finland",
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
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
            },
          }}
        >
          <Tab label="Upcoming" />
          <Tab label="Completed" />
        </Tabs>
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
                background: "#f5f1e9",
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
                    sx={{ fontFamily: "Roboto Flex", color: "#000", fontWeight: 600 }}
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
                  sx={{fontFamily: "Roboto Flex", color: "#777", mt: 0.5, mb: 2 }}
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
