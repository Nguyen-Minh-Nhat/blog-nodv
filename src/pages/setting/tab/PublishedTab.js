import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ModalTrigger from "../../../components/ModalTrigger";
import EmailAdressForm from "../components/PublishedTab/EmailAdressForm";
const PublishedTab = () => {
  const user = useSelector((state) => state.user.data.info);
  return (
    <div>
      <h2 className="font-semibold">Manage publications</h2>
      <div className="my-8 flex justify-between">
        <div className="flex flex-col">
          <label
            for="note"
            className="mb-2 text-sm leading-6 hover:cursor-pointer"
          >
            Allow readers to leave private notes on your stories
          </label>
          <label for="note" className="text-[13px] hover:cursor-pointer">
            Private notes are visible to you and (if left in a publication) all
            Editors of the publication.
          </label>
        </div>
        <input className="w-4 hover:cursor-pointer" type="checkbox" id="note" />
      </div>
      <div className="border-b"></div>
      <div className="my-8 flex justify-between">
        <div className="flex flex-col">
          <label
            for="email-replies"
            className="mb-2 text-sm leading-6 hover:cursor-pointer"
          >
            Allow email replies
          </label>
          <label
            for="email-replies"
            className="text-[13px] hover:cursor-pointer"
          >
            Let readers reply to your stories directly from their email.
          </label>
        </div>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="email-replies"
        />
      </div>
      <div>
        <ModalTrigger
          button={
            <Button className="m-0 flex w-full justify-between p-0 font-normal normal-case text-black hover:bg-white">
              <div className="flex flex-col items-start">
                <p className="text-sm">‘Reply To’ email address</p>
                <p className="text-[13px]">
                  Shown to your subscribers when they reply.
                </p>
              </div>
              <p className="text-sm">{user.username}</p>
            </Button>
          }
        >
          <EmailAdressForm
            onSubmit={(email) => console.log(email)}
            initialValue={user}
          ></EmailAdressForm>
        </ModalTrigger>
      </div>
    </div>
  );
};

export default PublishedTab;
