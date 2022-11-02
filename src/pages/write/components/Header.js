import { Button } from '@mui/material';

const Header = ({ onPublic, enablePublic }) => {
	return (
		<div className="bg-wite border-b bg-white py-4">
			<div className="bg-blue mx-auto flex w-[650px] items-center justify-between">
				<span className="text-2xl font-bold text-slate-600">
					Write your new post <i className="fa-solid fa-feather"></i>
				</span>
				<div>
					<Button color="success" className="btn rounded-full normal-case">
						Save
					</Button>
					<Button
						color="success"
						variant="contained"
						className="btn ml-2 rounded-full normal-case"
						onClick={onPublic}
						disabled={!enablePublic}
					>
						Public
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
