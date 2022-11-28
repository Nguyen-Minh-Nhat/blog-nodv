import { Button } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import ModalTrigger from '../../../components/ModalTrigger';
import EmailForm from '../components/AccountTab/EmailForm';
import ProfileForm from '../components/AccountTab/ProfileForm';
import DeactivateForm from '../components/AccountTab/DeactivateForm';
import DeleteForm from '../components/AccountTab/DeleteForm';
import { useMutation } from 'react-query';
import { updateUserProfile } from '../../../api/userApi';
import { setUser } from '../../../redux/slices/userSlice';
import { toast } from 'react-toastify';

const AccountTab = () => {
	const user = useSelector((state) => state.user.data.info);
	const dispatch = useDispatch();

	const updateProfileMutation = useMutation(updateUserProfile, {
		onSuccess: (data) => {
			dispatch(setUser(data.data));
			toast.success('Update profile successfully');
		},
	});

	return (
		<div>
			<ModalTrigger
				button={
					<ButtonItem color="inherit">
						<span>Address email</span> <span>{user.email}</span>
					</ButtonItem>
				}
			>
				<EmailForm
					onSubmit={(email) => console.log(email)}
					initialValue={user?.username}
				/>
			</ModalTrigger>

			{/* info */}

			<ModalTrigger
				button={
					<ButtonItem color="inherit">
						<p>Profile information</p> <p>{user.username}</p>
					</ButtonItem>
				}
			>
				<ProfileForm
					initialValue={user}
					onSubmit={(data) => updateProfileMutation.mutate(data)}
				/>
			</ModalTrigger>

			<div className="border-b"></div>

			<ModalTrigger
				button={<ButtonItem color="error">Deactivate account</ButtonItem>}
			>
				<DeactivateForm />
			</ModalTrigger>

			<ModalTrigger
				button={<ButtonItem color="error">Delete account</ButtonItem>}
			>
				<DeleteForm></DeleteForm>
			</ModalTrigger>
		</div>
	);
};

const ButtonItem = ({ children, ...props }) => {
	return (
		<Button
			className="flex w-full justify-between font-normal normal-case hover:bg-white"
			{...props}
		>
			{children}
		</Button>
	);
};

export default AccountTab;
