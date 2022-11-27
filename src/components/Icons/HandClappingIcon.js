const HandClappingIcon = ({
	type = 'solid' || 'light' || 'regular',
	...props
}) => {
	return (
		<i {...props} className={`fa-${type} fa-hands-clapping text-[18px]`}></i>
	);
};

export default HandClappingIcon;
