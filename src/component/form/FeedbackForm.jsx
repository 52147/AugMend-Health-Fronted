// FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    Rating
} from '@mui/material';

export const FeedbackForm = () => {
    const [form, setForm] = useState({
        patientName: '',
        experienceFeedback: '',
        additionalComments: '',
    });
    const [therapySatisfaction, setTherapySatisfaction] = useState(0);
    const [engagementFeedback, setEngagementFeedback] = useState(0);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/feedback', {
                ...form,
                therapySatisfaction,
                engagementFeedback
            });
            console.log('Feedback submitted:', response.data);
            setFeedbackSubmitted(true);
        } catch (error) {
            console.error('Failed to submit feedback:', error);
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
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Patient Feedback Form
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="patientName"
                            label="Patient Name"
                            value={form.patientName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="legend">Satisfaction with Therapy</Typography>
                        <Rating
                            name="therapySatisfaction"
                            value={therapySatisfaction}
                            onChange={(event, newValue) => setTherapySatisfaction(newValue)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
                        <Typography component="legend">Level of Engagement during Therapy</Typography>
                        <Rating
                            name="engagementFeedback"
                            value={engagementFeedback}
                            onChange={(event, newValue) => setEngagementFeedback(newValue)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
