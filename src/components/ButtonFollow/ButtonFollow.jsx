import { Chip } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ButtonFollow = ({
	isFollowed = false,
	textColorBefore,
	bgColorBefore,
	textColorAfter,
	bgColorAfter,
	onClick = () => {},
}) => {
	const [followed, setFollowed] = useState(isFollowed);
	const handleToggleFollow = () => {
		setFollowed(!followed);
		onClick(!followed);
	};

	return (
		<>
			<Chip
				label={followed ? 'Following' : 'Follow'}
				variant="outlined"
				className={
					followed
						? `${textColorAfter} ${bgColorAfter} px-1 py-1 text-sm `
						: `${textColorBefore} ${bgColorBefore} px-1 py-1 text-sm`
				}
				onClick={handleToggleFollow}
			/>
		</>
	);
};

export default ButtonFollow;
// import { Chip } from "@mui/material";
// import React from "react";
// import { useState } from "react";

// const ButtonFollow = ({ isFollowed = false, onClick = () => {} }) => {
//   const [followed, setFollowed] = useState(isFollowed);
//   const handleToggleFollow = () => {
//     setFollowed(!followed);
//     onClick(!followed);
//   };

//   return (
//     <>
//       <Chip
//         label={followed ? "Following" : "Follow"}
//         variant="outlined"
//         className={followed ? "bg-black text-white" : "border-rgb"}
//         onClick={handleToggleFollow}
//       />
//     </>
//   );
// };

// export default ButtonFollow;
