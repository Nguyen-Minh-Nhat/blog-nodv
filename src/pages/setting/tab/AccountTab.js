import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useId, useState } from "react";
import { useSelector } from "react-redux";
import ModalTrigger from "../../../components/ModalTrigger";
import EmailForm from "../components/EmailForm";
import ProfileForm from "../components/ProfileForm";

const AccountTab = () => {
  const user = useSelector((state) => state.user.data.info);

  const [openName, setOpenName] = useState(false);
  const [Name, setName] = useState(user.username);
  const [Bio, setBio] = useState("");
  const [Gender, setGender] = useState();
  const [openDeactivate, setOpenDeactivate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const id = useId();
  const [img, setImg] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    var url = URL.createObjectURL(file);
    console.log(url);
    setImg(url);
  };
  return (
    <div>
      {" "}
      <div>
        <ModalTrigger
          button={
            <Button className="flex w-full justify-between font-normal normal-case text-black">
              <p>Address email</p> <p>{user.username}</p>
            </Button>
          }
        >
          <EmailForm
            onSubmit={(email) => console.log(email)}
            initialValue={user?.username}
          />
        </ModalTrigger>
      </div>
      {/* info */}
      <div>
        <ModalTrigger
          button={
            <Button className="flex w-full justify-between font-normal normal-case text-black">
              <p>Profile information</p> <p>{user.username}</p>
            </Button>
          }
        >
          <ProfileForm initialValue={user?.username} />
        </ModalTrigger>

        <Button
          className="flex w-full justify-between font-normal normal-case text-black"
          onClick={() => setOpenName(true)}
        >
          <p>Profile information</p> <p>{user.username}</p>
        </Button>
        <Modal
          open={openName}
          onClose={() => {
            setOpenName(false);
            setName(user.username);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="container absolute inset-1/2 flex h-[500px] w-[554px] min-w-fit  translate-x-[-50%] translate-y-[-50%] flex-col justify-around rounded border-none bg-white p-8 shadow-xl">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="mb-5 font-bold"
            >
              Profile information
            </Typography>
            <div>
              <div>
                <label className="text-[13px] text-slate-500">Photo</label>
                <div className="flex min-w-min justify-between py-3.5">
                  <div component="label">
                    <div className="flex items-center justify-center">
                      <label htmlFor={id}>
                        <Avatar sx={{ width: 70, height: 70 }} src={img} />
                      </label>
                      <input
                        type="file"
                        id={id}
                        hidden
                        onChange={handleUpload}
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="px-2.5">
                    <Button
                      variant="text"
                      component="label"
                      className="min-w-min px-0 text-xs font-normal text-lime-600 hover:bg-white"
                    >
                      <p>Upload</p>
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Button
                      variant="text"
                      component="label"
                      className="ml-3 min-w-min px-0 text-xs font-normal text-red-600 hover:bg-white"
                    >
                      Remove
                    </Button>
                    <Typography className="= text-xs text-gray-400">
                      Recommended: Square JPG, PNG, or GIF, at least 1,000
                      pixels per side.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <TextField
              id="standard-helperText"
              label="Name*"
              defaultValue={Name}
              helperText="9/13"
              variant="standard"
            />

            <TextField
              id="standard-helperText"
              label="Bio"
              defaultValue=""
              helperText="0/160"
              variant="standard"
            />
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={true}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <div className="flex justify-end">
              <Button
                variant="outlined"
                className="btn rounded-full normal-case text-lime-600"
                color="success"
                size="medium"
                onClick={() => setOpenName(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className="btn ml-3 rounded-full normal-case"
                size="medium"
                color="success"
                disableElevation
                disabled
              >
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="border-b"></div>
      <div>
        <Button
          className="font-normal normal-case"
          color="error"
          onClick={() => setOpenDeactivate(true)}
        >
          Deactivate account
        </Button>
        <div>
          <Modal
            open={openDeactivate}
            onClose={() => setOpenDeactivate(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
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
                Deactivating your account will remove it from Medium within a
                few minutes. Deactivation will also immediately cancel any
                subscription for Medium Membership, and no money will be
                reimbursed. You can sign back in anytime to reactivate your
                account and restore its content.
              </Typography>

              <div className="flex justify-end">
                <Button
                  variant="outlined"
                  className="btn rounded-full normal-case"
                  size="medium"
                  color="error"
                  onClick={() => setOpenDeactivate(false)}
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
          </Modal>
        </div>
      </div>
      <div>
        <Button
          className="font-normal normal-case"
          color="error"
          onClick={() => setOpenDelete(true)}
        >
          Delete account
        </Button>
        <div>
          <Modal
            open={openDelete}
            onClose={() => setOpenDelete(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
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
                We’re sorry to see you go. Once your account is deleted, all of
                your content will be permanently gone, including your profile,
                stories, publications, notes, and responses. Deleting your
                Medium account will not delete any Stripe account you have
                connected to your Medium account. If you’re not sure about that,
                we suggest you deactivate or contactyourfriends@medium.com
                instead.
              </Typography>
              <Typography variant="body2" gutterBottom>
                If you created a Medium Membership through the Apple App store,
                you must also cancel your subscription via iTunes.
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
                  onClick={() => setOpenDelete(false)}
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
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
