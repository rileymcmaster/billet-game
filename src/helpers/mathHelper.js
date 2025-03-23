export const calculateFloat = ({ start = 14, end = 18, value }) => {
	const current = value;
	const currentAfterStart = current - start;
	const endAfterStart = end - start;
	const ratio = currentAfterStart / endAfterStart;
	const ratioMax = ratio <= 1 ? ratio : 1;

	return { ratio, ratioMax };
};
