const reducer = (posts = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload;
        } else {
          return post;
        }
      });
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return [...posts, action.payload];

    default:
      return posts;
  }
};

export default reducer;
