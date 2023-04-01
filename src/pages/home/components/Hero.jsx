import { Button } from '@mui/material';
import React from 'react';
import TriggerLogin from '../../../features/auth/components/TriggerLogin';
import { forwardRef } from 'react';

export const Hero = forwardRef((props, ref) => {
	return (
		<div className="w-[500px]" ref={ref} {...props}>
			<h2
				className="break-words text-8xl"
				style={{
					fontFamily: 'lora',
				}}
			>
				Stay curious.
			</h2>
			<div className="mb-12 w-[80%]">
				<p className="text-2xl">
					Discover stories, thinking, and expertise from writers on
					any topic.
				</p>
			</div>
			<TriggerLogin>
				<Button variant="contained" className="btn bg-black text-white">
					Start Reading{' '}
				</Button>
			</TriggerLogin>
		</div>
	);
});
