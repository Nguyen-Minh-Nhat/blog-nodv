import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const DeactivateForm = ({ onClose }) => {
  return (
    <Box className="absolute inset-1/2 flex h-64 w-[35rem] translate-x-[-50%] translate-y-[-50%] flex-col   justify-around rounded border-none bg-white p-8    shadow-xl">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="font-bold"
      >
        Deactivate account
      </Typography>
      <Typography variant="body2" gutterBottom>
        Deactivating your account will remove it from Medium within a few
        minutes. Deactivation will also immediately cancel any subscription for
        Medium Membership, and no money will be reimbursed. You can sign back in
        anytime to reactivate your account and restore its content.
      </Typography>

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
          Deactivate account
        </Button>
      </div>
    </Box>
  );
};
export default DeactivateForm;
