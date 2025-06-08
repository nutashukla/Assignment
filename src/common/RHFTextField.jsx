import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const RHFTextField = ({
  name,
  control,
  label,
  type = "text",
  multiline = false,
  rows,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          variant="standard"
          fullWidth
          type={type}
          multiline={multiline}
          rows={rows}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          {...rest}
          InputLabelProps={{
            shrink: type === "date" ? true : undefined,
            style: { color: "white" }, 
          }}
          sx={{
            input: { color: "white" },
            textarea: { color: "white" }, 
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "white",
            },
          }}
        />
      )}
    />
  );
};

export default RHFTextField;
