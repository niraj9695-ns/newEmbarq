import React, { useState,useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
  Select,
  MenuItem,FormControl, FormHelperText
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import formBg from "../assets/Gift/gifttrip-form-bg.webp";

export default function EnquiryPopup({ open, handleClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    expedition: "",
    message: ""
  });
  const [successMsg, setSuccessMsg] = useState("");
const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
const validate = () => {
  let newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (form.name.length < 3) {
    newErrors.name = "Minimum 3 characters required";
  }

  if (!form.email) {
    newErrors.email = "Email is required";
  } else if (!isEmail(form.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!form.phone) {
    newErrors.phone = "Phone is required";
  } else if (!isPhone(form.phone)) {
    newErrors.phone = "Enter valid 10-digit Indian number";
  }

  if (!form.city.trim()) {
    newErrors.city = "City is required";
  }

  if (!form.expedition) {
    newErrors.expedition = "Please select expedition";
  }

  if (!form.message.trim()) {
    newErrors.message = "Message cannot be empty";
  } else if (form.message.length < 5) {
    newErrors.message = "Message should be at least 5 characters";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isPhone = (val) => /^[6-9]\d{9}$/.test(val);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const res = await emailjs.send(
      "service_pvpvpko",
      "template_0wgx4p2",
      {
        user_name: form.name,
        user_email: form.email,
        user_phone: form.phone,
        user_city: form.city,
        user_expedition: form.expedition,
        user_message: form.message
      },
      "e1g2avhWWng2DaSoX"
    );

    if (res.status === 200) {
      setSuccessMsg("Successfully sent your enquiry!");

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        expedition: "",
        message: ""
      });

      setErrors({});

      // show message for a moment before closing
      setTimeout(() => {
        setSuccessMsg("");
        handleClose();
      }, 1500);
    }
  } catch (err) {
    console.error(err);
    setSuccessMsg("Failed to send. Please try again.");
  }

  setLoading(false);
};
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1.5,
          background: "transparent",
          boxShadow: "none",
          maxHeight: "95vh"
        }
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          maxHeight: "95vh",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxHeight: "95vh",
            overflowY: "auto",
            backgroundImage: `url(${formBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 5,
            px: 4,
            py: 4
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(2px)"
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#fff"
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 6,
                right: 6,
                color: "#fff",
                p: 0.5
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                fontWeight: 600,
                lineHeight: 1.1,
                mb: 1.5
              }}
            >
              Start Your<br />Journey with<br />Embarq
            </Typography>

            <Typography sx={{ fontWeight: 600, fontSize: "1rem", mb: 0.5 }}>
              Ready to take the road less travelled?
            </Typography>

            <Typography
              sx={{
                fontSize: "0.85rem",
                opacity: 0.9,
                mb: 1.5,
                lineHeight: 1.2
              }}
            >
              Share your details below and our team will get in touch to guide
              you through availability, next steps, and booking confirmation.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              
              {/* Row 1: Name */}
             <TextField
  fullWidth
  name="name"
  placeholder="Enter your Name"
  value={form.name}
  onChange={handleChange}
  error={!!errors.name}
  helperText={errors.name}
  sx={{ ...inputStyles, mb: 1 }}
/>

              {/* Row 2: Email + Phone */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={1} mb={1}>
                <TextField
  fullWidth
  name="email"
  placeholder="Email Address"
  value={form.email}
  onChange={handleChange}
  error={!!errors.email}
  helperText={errors.email}
  sx={inputStyles}
/>
               <TextField
  fullWidth
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
  error={!!errors.phone}
  helperText={errors.phone}
  sx={inputStyles}
/>
              </Stack>

              {/* Row 3: Expedition + City */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={1} mb={1}>
              <FormControl
  fullWidth
  error={!!errors.expedition}
  sx={{ mb: 1 }}
>
  <Select
    name="expedition"
    value={form.expedition}
    onChange={handleChange}
    displayEmpty
    renderValue={(selected) => {
      if (!selected) {
        return (
          <span style={{ color: "rgba(0,0,0,0.5)" }}>
            Choose Expedition
          </span>
        );
      }
      return selected;
    }}
    sx={{
      ...selectStyles,

      // 🔴 Highlight border on error (since you removed default outline)
      ...(errors.expedition && {
        boxShadow: "0 0 0 1px red"
      })
    }}
    MenuProps={{
      disablePortal: true,
      PaperProps: {
        sx: {
          maxHeight: 200
        }
      },
      MenuListProps: {
        sx: {
          maxHeight: 200,
          overflowY: "auto"
        },
        onWheel: (e) => e.stopPropagation(),
        onTouchMove: (e) => e.stopPropagation()
      }
    }}
  >
    <MenuItem value="" disabled>
      Choose Expedition
    </MenuItem>
    <MenuItem value="Scotland">Scotland</MenuItem>
    <MenuItem value="Romania">Romania</MenuItem>
    <MenuItem value="Georgia">Georgia</MenuItem>
    <MenuItem value="South Korea">South Korea</MenuItem>
    <MenuItem value="Finland">Finland</MenuItem>
  </Select>

  {/* ✅ Error message */}
  <FormHelperText
    sx={{
      color: "#ff6b6b",
      fontSize: "0.7rem",
      mt: "4px",
      ml: "14px"
    }}
  >
    {errors.expedition}
  </FormHelperText>
</FormControl>
                <TextField
  fullWidth
  name="city"
  placeholder="Your City"
  value={form.city}
  onChange={handleChange}
  error={!!errors.city}
  helperText={errors.city}
  sx={inputStyles}
/>
              </Stack>

              {/* Row 4: Message */}
             <TextField
  fullWidth
  multiline
  rows={3}
  name="message"
  placeholder="Your Message"
  value={form.message}
  onChange={handleChange}
  error={!!errors.message}
  helperText={errors.message}
  sx={{ ...inputStyles, mb: 1 }}
/>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                fullWidth
                sx={{
                  py: 1,
                  borderRadius: "30px",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  background: "#f2ad3d",
                  color: "#fff",
                  "&:hover": { background: "#e49a25" }
                }}
              >
                {loading ? "Sending..." : "SUBMIT"}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

/* Input Style */
const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    background: "rgba(255,255,255,0.9)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    "& fieldset": { border: "none" }
  },
  "& .MuiInputBase-input": {
    fontSize: "0.75rem",
    padding: "10px 14px"
  }
};

/* Select Style */
const selectStyles = {
  borderRadius: "30px",
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  fontSize: "0.75rem",
  height: "40px",
  textAlign: "left",
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
  "& .MuiSelect-select": {
    padding: "10px 14px"
  }
};