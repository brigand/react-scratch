
export const getPosts = () => ({
  posts: [
    {id: 'post-1', author: 'user-1', title: 'Post 1'},
    {id: 'post-2', author: 'user-2', title: 'Post 2'},
    {id: 'post-3', author: 'user-3', title: 'Post 3'},
    {id: 'post-4', author: 'user-1', title: 'Post 4'},
    {id: 'post-5', author: 'user-2', title: 'Post 5'},
    {id: 'post-6', author: 'user-3', title: 'Post 6'},
  ],
  users: [
    {
      id: 'user-1',
      first: 'Tom',
      last: 'Scott',
    },
    {
      id: 'user-2',
      first: 'Dick',
      last: 'Wolf',
    },
    {
      id: 'user-3',
      first: 'Harry',
      last: 'Scott',
    },
  ],
});
