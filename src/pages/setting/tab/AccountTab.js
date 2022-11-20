import { Button } from "@mui/material";

import { useSelector } from "react-redux";
import ModalTrigger from "../../../components/ModalTrigger";
import EmailForm from "../components/AccountTab/EmailForm";
import ProfileForm from "../components/AccountTab/ProfileForm";
import DeactivateForm from "../components/AccountTab/DeactivateForm";
import DeleteForm from "../components/AccountTab/DeleteForm";

const AccountTab = () => {
  const user = useSelector((state) => state.user.data.info);

  return (
    <div>
      <div>
        <ModalTrigger
          button={
            <Button className=" flex w-full justify-between font-normal normal-case text-black hover:bg-white">
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
            <Button className="flex w-full justify-between font-normal normal-case text-black hover:bg-white">
              <p>Profile information</p> <p>{user.username}</p>
            </Button>
          }
        >
          <ProfileForm initialValue={user} />
        </ModalTrigger>
      </div>
      <div className="border-b"></div>
      <div>
        <ModalTrigger
          button={
            <Button
              className="flex w-full justify-between font-normal normal-case hover:bg-white"
              color="error"
            >
              Deactivate account
            </Button>
          }
        >
          <DeactivateForm></DeactivateForm>
        </ModalTrigger>
      </div>
      <div>
        <ModalTrigger
          button={
            <Button
              className="flex w-full justify-between font-normal normal-case hover:bg-white"
              color="error"
            >
              Delete account
            </Button>
          }
        >
          <DeleteForm></DeleteForm>
        </ModalTrigger>
      </div>
    </div>
  );
};

export default AccountTab;
