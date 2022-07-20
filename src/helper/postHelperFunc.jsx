import { sortByDate } from "./otherHelperFunc";

export const getTrendingPosts = (postsList) => {
	const sortedByDate = sortByDate(postsList);
	const current = new Date();
	let index = 0;
	const lastThreeMonthsPosts = [];
	for (let i = 0; i < sortedByDate.length; i++) {
		const diffDays =
			(current - new Date(sortedByDate[i].createdAt)) / (1000 * 60 * 60 * 24);
		if (diffDays > 90) {
			index = i;
			break;
		}
		lastThreeMonthsPosts.push(sortedByDate[i]);
	}

	lastThreeMonthsPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);

	const trendingPosts = [
		...lastThreeMonthsPosts,
		...sortedByDate.slice(index, sortedByDate.length),
	];
	return trendingPosts;
};
