import React from "react";
import { Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhotoUpload from "../../../components/PhotoUpload";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ProfileForm = ({ initialValue, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [upLoadData, setUploadData] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("bios", data.bios);
    formData.append("avatar", upLoadData.file);
    console.log(formData.get("email"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PhotoUpload onUpload={setUploadData}>
        <Avatar src={upLoadData?.previewImg} />
      </PhotoUpload>
      <TextField
        error={!!errors?.username}
        label="username"
        helperText={errors?.username?.message}
        {...register("username", {
          required: "user name is required filed",
          maxLength: 60,
        })}
      />
      <TextField
        error={!!errors?.email}
        helperText={errors?.email?.message}
        label="email"
        {...register("email", {
          required: "email is required filed",
          pattern: {
            value: EMAIL_REGEX,
            message: "invalid email address",
          },
        })}
      />
      <TextField label="bios" {...register("bios")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ProfileForm;
