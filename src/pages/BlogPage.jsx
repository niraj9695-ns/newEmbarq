import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import heroImg from "../assets/blog/blogbg.webp";
import post1 from "../assets/blog/blogimage1.jpg";
import post2 from "../assets/blog/blogimage2.png";
import post3 from "../assets/blog/blogimage3.png";
import post4 from "../assets/blog/blogimage4.jpg";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  // ✅ Added category field
  const blogPosts = [
    {
      image: post1,
      date: "October 10, 2025",
      title: "5 Ways in which Overlanding has changed me",
      category: "Adventure Diaries",
    },
    {
      image: post2,
      date: "February 6, 2025",
      title: "A Journey Through the Roof of the World",
      category: "Travel",
    },
    {
      image: post3,
      date: "February 3, 2025",
      title: "Ubud and Periyar Have My Love",
      category: "Latest Blogs",
    },
    {
      image: post4,
      date: "September 27, 2024",
      title: "Colours of Kyrgyzstan",
      category: "Travel",
    },
  ];

  const topPosts = [
    {
      image: post1,
      title: "5 Ways in which Overlanding has changed me",
      date: "October 10, 2025",
    },
    {
      image: post2,
      title: "Colours of Kyrgyzstan",
      date: "October 6, 2024",
    },
    {
      image: post3,
      title: "Ubud and Periyar Have My Love",
      date: "January 8, 2025",
    },
  ];

  const categories = [
    "All",
    "Adventure Diaries",
    "Latest Blogs",
    "Travel",
    "Namaste Diem",
  ];

  // ✅ Filtering logic
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <Box sx={{ backgroundColor: "#f3f3f3" }}>
      {/* HERO */}
      <Box
        sx={{
          height: { xs: 300, md: 520 },
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }} />
      </Box>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, pb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 3 }}>
            <Grid
              container
              spacing={3}
              alignItems="stretch"
              justifyContent="center"
            >
              {filteredPosts.map((post, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <Card
                    onClick={() => setSelectedPost(post.title)}
                    sx={{
                      width: "100%",
                      height: 320,
                      borderRadius: "20px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      p: 2,
                      cursor: "pointer",
                      border:
                        selectedPost === post.title ? "2px solid #000" : "none",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.15)",
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      sx={{
                        width: "100%", // ✅ FIXED
                        height: 180,
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                          width: "320px", // ✅ FIXED
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* CONTENT */}
                    <CardContent
                      sx={{
                        p: 1.5,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#9e9e9e",
                            fontSize: "12px",
                            mb: 1,
                          }}
                        >
                          {post.date}
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: 1.4,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {post.title}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* MOBILE SIDEBAR */}
            <Box sx={{ display: { xs: "block", md: "none" }, mt: 5 }}>
              {/* Categories */}
              <Box
                sx={{
                  backgroundColor: "#efe6d8",
                  borderRadius: "16px",
                  p: 3,
                  mb: 4,
                }}
              >
                <Typography sx={{ fontWeight: 600, mb: 2 }}>
                  Pick Top Categories
                </Typography>

                {categories.map((cat, i) => (
                  <Typography
                    key={i}
                    onClick={() => setSelectedCategory(cat)}
                    sx={{
                      mb: 1.2,
                      fontSize: 14,
                      cursor: "pointer",
                      fontWeight: selectedCategory === cat ? 600 : 400,
                      color: selectedCategory === cat ? "#000" : "#555",
                    }}
                  >
                    {cat}
                  </Typography>
                ))}
              </Box>

              {/* Top Posts */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  p: 3,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <Typography sx={{ fontWeight: 600, mb: 3 }}>
                  Top Posts
                </Typography>

                {topPosts.map((post, index) => (
                  <Box
                    key={index}
                    onClick={() => setSelectedPost(post.title)}
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                      alignItems: "center",
                      cursor: "pointer",
                      opacity: selectedPost === post.title ? 1 : 0.7,
                    }}
                  >
                    <Box
                      component="img"
                      src={post.image}
                      alt={post.title}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />

                    <Box>
                      <Typography sx={{ fontSize: 13.5, fontWeight: 500 }}>
                        {post.title}
                      </Typography>

                      <Typography sx={{ fontSize: 12, color: "#9e9e9e" }}>
                        {post.date}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDEBAR */}
          <Box
            sx={{
              flex: 1,
              minWidth: 280,
              display: { xs: "none", md: "block" },
            }}
          >
            {/* Categories */}
            <Box
              sx={{
                backgroundColor: "#efe6d8",
                borderRadius: "16px",
                p: 3,
                mb: 4,
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                Pick Top Categories
              </Typography>

              {categories.map((cat, i) => (
                <Typography
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    mb: 1.2,
                    fontSize: 14,
                    cursor: "pointer",
                    fontWeight: selectedCategory === cat ? 600 : 400,
                    color: selectedCategory === cat ? "#000" : "#555",
                  }}
                >
                  {cat}
                </Typography>
              ))}
            </Box>

            {/* Top Posts */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                p: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 3 }}>Top Posts</Typography>

              {topPosts.map((post, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedPost(post.title)}
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 2,
                    alignItems: "center",
                    cursor: "pointer",
                    opacity: selectedPost === post.title ? 1 : 0.7,
                  }}
                >
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />

                  <Box>
                    <Typography sx={{ fontSize: 13.5, fontWeight: 500 }}>
                      {post.title}
                    </Typography>

                    <Typography sx={{ fontSize: 12, color: "#9e9e9e" }}>
                      {post.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
