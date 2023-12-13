import postListReducer from '../../reducers/post-list-reducer';
import { expect, test, describe } from 'vitest';

describe('postListReducer', () => {

  const currentState = {
    1: {
      postTitle: 'Title 1',
      subTitle: 'Subtitle 1',
      content: 'Content 1',
      id: '1'
    },
    2: {
      postTitle: 'Title 2',
      subTitle: 'Subtitle 2',
      content: 'Content 2',
      id: '2'
    },
  }

  let action;
  const postData = {
    postTitle: 'React is fun',
    subTitle: 'Use Vite',
    content: 'Fill verbiage here',
    id: '1'
  };
  
	test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  
	test('Should successfully add a new post to postList', () => {
    const { postTitle, subTitle, content, id } = postData;
    action = {
      type: 'ADD_POST',
      postTitle: postTitle,
      subTitle: subTitle,
      content: content,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        postTitle: postTitle,
        subTitle: subTitle,
        content: content,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        postTitle: 'Title 2',
        subTitle: 'Subtitle 2',
        content: 'Content 2',
        id: '2'
      }
    });
  });

});