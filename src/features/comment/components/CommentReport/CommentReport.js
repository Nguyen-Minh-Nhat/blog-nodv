import { Chip, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';

import { REPORT_REASON } from '../../../../config/dataType';
import { reportComment } from '../../../../api/commentApi';
import { toast } from 'react-toastify';

const CommentReport = ({ comment, onSubmit, onCancel }) => {
	const [reason, setReason] = useState(REPORT_REASON.SPAM);
	const handleReasonChange = (event) => {
		setReason(event.target.value);
	};

	const idComment = comment.id;
	const handleSubmit = async () => {
		await reportComment({
			id: idComment,
			content: reason,
		});
		toast.success('Report successfully');
		onSubmit();
	};
	const handleCancel = () => {
		onCancel();
	};
	return (
		<div className="h-screen w-full -translate-y-32 bg-white px-16 pt-16">
			<div className="p-4">
				<div className="mt-4">
					<h3 className="text-center text-xl font-medium">
						Report Response
					</h3>
					<div className="ml-7 mt-6 mb-8 flex flex-col justify-center">
						<div className="pb-2.5">
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue={reason}
								name="radio-buttons-group"
								onChange={handleReasonChange}
							>
								{Object.values(REPORT_REASON).map(
									(item, index) => (
										<FormControlLabel
											key={index}
											value={item}
											control={<Radio />}
											label={item}
										/>
									),
								)}
							</RadioGroup>
						</div>
					</div>
					<div className="mx-auto mt-10 mb-0 w-fit">
						<Chip
							className="mr-2 border-2 px-2.5 py-4 font-medium"
							label={'Cancel'}
							variant="outlined"
							// className={}
							onClick={() => handleCancel()}
						/>
						<Chip
							className="mr-2 border-2 bg-rose-700 px-2.5 py-4 font-medium"
							label={'Report'}
							// className={}
							color="error"
							onClick={() => handleSubmit()}
						/>
					</div>
					<div className="mt-28 text-sm">
						Report copyright infringement or trademark infringement.
						Read our rules.
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentReport;
