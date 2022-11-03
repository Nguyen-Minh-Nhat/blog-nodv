// import React, { Suspense } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import LoadingBar from 'react-top-loading-bar';

// // this will show the animation
// const Loader = () => {
// 	const ref = useRef(null);
// 	const [loading, setLoading] = useState(false);
// 	useEffect(() => {
// 		if (loading && ref.current) {
// 			ref.current.continuousStart();
// 		} else if (ref.current) {
// 			ref.current.complete();
// 		}
// 	}, [loading, ref]);
// 	return (
// 		<div className="position-fixed w-100 start-0 zindex-9999 top-0">
// 			<div style={{ width: '{dynamic}-%', height: '3px', background: 'red' }} />
// 		</div>
// 	);
// };

// const ProgressTrigger = ({ setLoading }) => {};

// const Loadable = (Component) => (props) =>
// 	(
// 		<>
// 			<LoadingBar color="#1b5e20" ref={ref} waitingTime={300} />
// 			<Suspense fallback={<ProgressTrigger setLoading={setLoading} />}>
// 				<Component {...props} />
// 			</Suspense>
// 		</>
// 	);

// export default Loadable;
