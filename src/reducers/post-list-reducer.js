const postListReducer = (state = {}, action) => {
  const { postTitle, subTitle, content, id } = action;
  switch (action.type) {
    case 'ADD_POST':
        return Object.assign({}, state, {
            [id]: {
                postTitle: postTitle,
                subTitle: subTitle,
                content: content,
                id: id
            }
        });
    case 'DELETE_POST':
        let newState = { ...state };
        delete newState[id];
        return newState;
        default:
            return state;
  }
};

export default postListReducer;