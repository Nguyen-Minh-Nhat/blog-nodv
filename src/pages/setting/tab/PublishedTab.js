import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ModalTrigger from "../../../components/ModalTrigger";
import EmailAddressForm from "../components/PublishedTab/EmailAddressForm";
import CheckboxSetting from "../components/CheckboxSetting";
const PublishedTab = () => {
  const user = useSelector((state) => state.user.data.info);
  return (
    <div>
      <h2 className="font-semibold">Manage publications</h2>
      <CheckboxSetting
        id="note"
        tittle="Allow readers to leave private notes on your stories"
        description=" Private notes are visible to you and (if left in a publication) all
            Editors of the publication."
      ></CheckboxSetting>
      <div className="border-b"></div>
      <CheckboxSetting
        id="email-replies"
        tittle="Allow email replies"
        description="Let readers reply to your stories directly from their email."
      ></CheckboxSetting>
      <div>
        <ModalTrigger
          button={
            <Button className="m-0 flex w-full justify-between p-0 font-normal normal-case text-black hover:bg-white">
              <div className="flex flex-col items-start">
                <p className="font-['A-font'] text-sm">
                  ‘Reply To’ email address
                </p>
                <p className="font-['A-font'] text-[13px]">
                  Shown to your subscribers when they reply.
                </p>
              </div>
              <p className="font-['A-font'] text-sm">{user.username}</p>
            </Button>
          }
        >
          <EmailAddressForm
            onSubmit={(email) => console.log(email)}
            initialValue={user}
          ></EmailAddressForm>
        </ModalTrigger>
      </div>
    </div>
  );
};

export default PublishedTab;
