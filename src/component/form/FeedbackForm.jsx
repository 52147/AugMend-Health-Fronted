import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Rating,
  MenuItem,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

export const FeedbackForm = () => {
  const [form, setForm] = useState({
    patientName: "",
    email: "",
    age: "",
    maritalStatus: "",
    otherMaritalStatus: "",
    seenTherapist: "",
    takingMedications: "",
    experienceFeedback: "",
    additionalComments: "",
  });
  const [errors, setErrors] = useState({});
  const [therapySatisfaction, setTherapySatisfaction] = useState(0);
  const [engagementFeedback, setEngagementFeedback] = useState(0);
  const [medications, setMedications] = useState([""]);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Validate inputs
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "patientName":
        if (value.length < 3 || value.length > 50) {
          errorMsg = "Patient Name must be between 3 and 50 characters";
        }
        break;
      case "email":
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
          errorMsg = "Invalid email address";
        }
        break;
      case "age":
        if (value < 1 || value > 120) {
          errorMsg = "Age must be between 1 and 120";
        }
        break;
      case "maritalStatus":
        if (!["Single", "Married", "Widowed", "Other"].includes(value)) {
          errorMsg = "Invalid marital status";
        }
        break;
      case "otherMaritalStatus":
        if (form.maritalStatus === "Other" && value.trim() === "") {
          errorMsg = "Please specify your marital status";
        }
        break;
      case "seenTherapist":
        if (!["Yes", "No"].includes(value)) {
          errorMsg = "Invalid response for seeing a therapist";
        }
        break;
      case "takingMedications":
        if (!["Yes", "No"].includes(value)) {
          errorMsg = "Invalid response for taking medications";
        }
        break;
      case "experienceFeedback":
        if (value.length < 10) {
          errorMsg = "Experience Feedback must be at least 10 characters";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    validateField(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleMedicationChange = (index, value) => {
    const updatedMedications = [...medications];
    updatedMedications[index] = value;
    setMedications(updatedMedications);
  };

  const addMedicationInput = () => {
    setMedications([...medications, ""]);
  };

  const removeMedicationInput = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform all validations
    const validations = Object.keys(form).map((field) =>
      validateField(field, form[field])
    );
    const allValid = validations.every(Boolean);

    if (allValid) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/feedback",
          {
            ...form,
            therapySatisfaction,
            engagementFeedback,
            medications: form.takingMedications === "Yes" ? medications : [],
          }
        );
        console.log("Feedback submitted:", response.data);
        setFeedbackSubmitted(true);
      } catch (error) {
        console.error("Failed to submit feedback:", error);
      }
    }
  };

  if (feedbackSubmitted) {
    return (
      <Typography variant="h5" align="center">
        Thank you for your feedback!
      </Typography>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Patient Feedback Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={!!errors.patientName}
              helperText={errors.patientName}
              name="patientName"
              label="Patient Name"
              value={form.patientName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!errors.email}
              helperText={errors.email}
              name="email"
              label="Email"
              value={form.email}
              onChange={handleChange}
              type="email"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!errors.age}
              helperText={errors.age}
              name="age"
              label="Age"
              value={form.age}
              onChange={handleChange}
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                error={!!errors.maritalStatus}
                helperText={errors.maritalStatus}
                select
                name="maritalStatus"
                label="Which of the following best describes your marital status?"
                value={form.maritalStatus}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select...</MenuItem>
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
          {form.maritalStatus === "Other" && (
            <Grid item xs={12}>
              <TextField
                error={!!errors.otherMaritalStatus}
                helperText={errors.otherMaritalStatus}
                name="otherMaritalStatus"
                label="Please specify..."
                value={form.otherMaritalStatus}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Have you ever seen a therapist for mental health issues?
              </FormLabel>
              <RadioGroup
                name="seenTherapist"
                value={form.seenTherapist}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are you taking any medications?
              </FormLabel>
              <RadioGroup
                name="takingMedications"
                value={form.takingMedications}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {form.takingMedications === "Yes" && (
            <Grid item xs={12}>
              <Typography>Medication Details</Typography>
              {medications.map((med, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mt: 1 }}
                >
                  <TextField
                    label={`Medication ${index + 1}`}
                    value={med}
                    onChange={(e) =>
                      handleMedicationChange(index, e.target.value)
                    }
                    fullWidth
                  />
                  <Button
                    type="button"
                    color="error"
                    onClick={() => removeMedicationInput(index)}
                    sx={{ ml: 2 }}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
              <Button
                type="button"
                variant="contained"
                onClick={addMedicationInput}
                sx={{ mt: 1 }}
              >
                Add a new medication
              </Button>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography component="legend">
              Satisfaction with Therapy
            </Typography>
            <Rating
              name="therapySatisfaction"
              value={therapySatisfaction}
              onChange={(event, newValue) => setTherapySatisfaction(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!errors.experienceFeedback}
              helperText={errors.experienceFeedback}
              name="experienceFeedback"
              label="Describe your experience during the therapy session"
              value={form.experienceFeedback}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="legend">
              Level of Engagement during Therapy
            </Typography>
            <Rating
              name="engagementFeedback"
              value={engagementFeedback}
              onChange={(event, newValue) => setEngagementFeedback(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!errors.additionalComments}
              helperText={errors.additionalComments}
              name="additionalComments"
              label="Additional Comments"
              value={form.additionalComments}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit Feedback
        </Button>
      </Box>
    </Container>
  );
};
