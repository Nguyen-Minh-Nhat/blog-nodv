import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const EmailForm = ({ onSubmit, initialValue, onClose }) => {
  const [email, setEmail] = useState(initialValue);

  const handleSubmit = (e) => {
    onSubmit(email);
    onClose();
  };

  const handleCancel = (e) => {
    onClose();
  };

  return (
    <Box className="absolute inset-1/2 flex h-64 w-[35rem] translate-x-[-50%] translate-y-[-50%] flex-col justify-around rounded border-none bg-white p-8 shadow-xl">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="font-bold"
      >
        Email address
      </Typography>

      <TextField
        id="standard-helperText"
        defaultValue={initialValue}
        helperText="You can sign into NODV with this email address."
        variant="standard"
        className="w-full"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </Box>
  );
};

export default EmailForm;
