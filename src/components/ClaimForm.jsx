import {
    Box,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import RHFTextField from "../common/RHFTextField";
import Grid from '@mui/material/Grid';

export default function ClaimForm() {
    const {
        handleSubmit,
        control,
        watch,
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            dob: "",
            jobTitle: "",
            diagnosisDate: "",
            diagnosisType: "",
            story: "",
            agree: false,
            captcha: false,
        },
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Claim submitted successfully!");
    };

    const agree = watch("agree");
    const captcha = watch("captcha");

    return (
        <Paper
            sx={{
                p: 4,
                backgroundColor: "rgba(48, 70, 116, 0.8)",
                borderRadius: 6,
            }}
        >

            <Typography
                mt={3}
                variant="h4"
                color="white"
            >
                Claim Form
            </Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="firstName"
                            control={control}
                            label="First Name *"
                            rules={{ required: "First Name is required" }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="lastName"
                            control={control}
                            label="Last Name *"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="phone"
                            control={control}
                            label="Phone Number *"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="email"
                            control={control}
                            label="Email ID *"
                            type="email"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="dob"
                            control={control}
                            label="Date of Birth *"
                            type="date"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="jobTitle"
                            control={control}
                            label="Job Title *"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="diagnosisDate"
                            control={control}
                            label="Date of Diagnosis *"
                            type="date"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RHFTextField
                            name="diagnosisType"
                            control={control}
                            label="Type of Diagnosis *"
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <RHFTextField
                            name="story"
                            control={control}
                            label="Tell us your story (optional)"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="agree"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel
                                    control={<Checkbox {...field} checked={field.value} color="primary" />}
                                    sx={{ color: "#f9f9f9", alignItems: "flex-start" }}
                                    label={
                                        <Typography variant="body2" sx={{ color: "#f9f9f9" }}>
                                            I agree to the{" "}
                                            <span style={{ textDecoration: "underline", cursor: "pointer", color: "#f5f5f5" }}>
                                                privacy policy
                                            </span>{" "}
                                            and{" "}
                                            <span style={{ textDecoration: "underline", cursor: "pointer", color: "#f5f5f5" }}>
                                                disclaimer
                                            </span>{" "}
                                            and give my express written
                                            consent to be contacted regarding my case options. I understand that I may
                                            be contacted using automatic dialing equipment. Message and data rates
                                            may apply. My consent does not require purchase. This is Legal advertising.
                                        </Typography>
                                    }
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="captcha"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel
                                    control={<Checkbox {...field} checked={field.value} color="primary" />}
                                    label="Please check this box to verify you're a person."
                                    sx={{ color: "#f9f9f9" }}
                                />
                            )}
                        />
                    </Grid>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={!agree || !captcha}
                        sx={{
                            backgroundColor: "#f5e6d8",
                            color: "black",
                            borderRadius: "12px",
                            py: 1.5,
                            fontSize: "1rem",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                            "&:hover": {
                                backgroundColor: "#f2dbc8",
                            },
                        }}
                    >
                        Start your claim now
                    </Button>

                </Grid>
            </Box>
        </Paper>
    );
}
