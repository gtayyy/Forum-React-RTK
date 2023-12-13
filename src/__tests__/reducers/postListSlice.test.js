import { postAdd} from '../../app/postListSlice'

test('Should add a post to postList', () => {
    expect(postAdd({},{1: "test"})).toEqual({1: "test"});
});