import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const DeleteForm = ({ onClose }) => {
  return (
    <Box className="absolute inset-1/2 flex h-[28rem] w-[35rem] translate-x-[-50%] translate-y-[-50%] flex-col justify-around rounded border-none bg-white p-8 shadow-xl">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="font-bold"
      >
        Delete account
      </Typography>
      <Typography variant="body2" gutterBottom>
        We’re sorry to see you go. Once your account is deleted, all of your
        content will be permanently gone, including your profile, stories,
        publications, notes, and responses. Deleting your Medium account will
        not delete any Stripe account you have connected to your Medium account.
        If you’re not sure about that, we suggest you deactivate or
        contactyourfriends@medium.com instead.
      </Typography>
      <Typography variant="body2" gutterBottom>
        If you created a Medium Membership through the Apple App store, you must
        also cancel your subscription via iTunes.
      </Typography>
      <TextField
        id="standard-helperText"
        label="To confirm deletion, type “delete” below:"
        variant="standard"
      />
      <div className="flex justify-end">
        <Button
          variant="outlined"
          className="btn rounded-full normal-case"
          size="medium"
          color="error"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className="btn ml-3 rounded-full normal-case"
          size="medium"
          color="error"
          disableElevation
        >
          Delete account
        </Button>
      </div>
    </Box>
  );
};
export default DeleteForm;
