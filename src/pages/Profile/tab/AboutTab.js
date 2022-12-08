import { FiberManualRecord } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import ModalTrigger from '../../../components/ModalTrigger';
import AboutDescription from './components/AboutDescription';
import AboutForm from './components/AboutForm';
import AboutStarted from './components/AboutStarted';
import FollowingModal from './components/FollowingModal';
import FollowerModal from './components/FollowerModal';

const AboutTab = () => {
	const ownProfile = useOutletContext();
	const profile = useSelector((state) => state?.profile?.data);
	const [showForm, setShowForm] = useState(false);

	const handleClick = () => {
		setShowForm((prev) => !prev);
	};

	return (
		<>
			<div>
				{ownProfile ? (
					<>
						{showForm ? (
							<AboutForm onClick={handleClick} user={profile}></AboutForm>
						) : !profile.bio ? (
							<AboutStarted onClick={handleClick} />
						) : (
							<AboutDescription
								onClick={handleClick}
								userBio={profile.bio}
							></AboutDescription>
						)}
					</>
				) : (
					<>{profile.bio}</>
				)}
			</div>
			<div className="flex pt-[35px]">
				<ModalTrigger
					button={
						<Button
							className="btn ml-2 rounded-full text-base font-normal normal-case"
							color="success"
						>
							Follower
						</Button>
					}
				>
					<FollowerModal />
				</ModalTrigger>
				<FiberManualRecord className="self-center text-[5px]"></FiberManualRecord>
				<ModalTrigger
					button={
						<Button
							className="btn ml-2 rounded-full text-base font-normal normal-case"
							color="success"
						>
							Following
						</Button>
					}
				>
					<FollowingModal />
				</ModalTrigger>
			</div>

			<div className="flex justify-center">
				<div className="w-full">
					<div className="mt-[45px] mb-5 border-b border-black"></div>
					<div>
						<h2 className="text-xl font-normal">
							Get an email whenever {profile.username} publishes.
						</h2>
						<p className="mt-2 pb-5 text-sm">
							You cannot subscribe to yourself
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutTab;
