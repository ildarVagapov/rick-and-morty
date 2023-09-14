import ContentLoader from "react-content-loader"

export const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={550}
		height={170}
		viewBox="0 0 550 170"
		backgroundColor="#3c3e44"
		foregroundColor="#39393b"
	>
		<rect rx="13" ry="13" width="550" height="170" />
		Z	</ContentLoader>
)


