const userPresentFunc = (newUserName, arry ) => {
  const res = arry?.find((user)=> user.username === newUserName)
  return res;
}

const searchUser = (userList, userInput) => {
  const res = new RegExp(`${userInput}`, 'i');
  return userList.filter((user)=>res.test(user.userName) || res.test(`${user.firstName} ${user.lastName}`) || res.test(`@${user.username}`) );
}

const userFeed = (postsList, followersList, username) => {
	if(followersList?.length === 0) {
		return postsList
	}
	return postsList?.filter(
		(post) =>
			userPresentFunc(post.username, followersList) ||
			post.username === username
	);
};

export {userPresentFunc, searchUser ,userFeed}
