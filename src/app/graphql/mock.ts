import {Resolvers} from '.'
import * as Authors from '../../authors/graphql'
import * as Comments from '../../comments/graphql'
import * as Common from '../../common/graphql'
import * as Posts from '../../posts/graphql'

interface Author extends Authors.Author {
  commentIds: Comment['id'][]
  postIds: Post['id'][]
}
interface Comment extends Comments.Comment {
  authorId: Author['id']
  commentIds: Comment['id'][]
}

interface Post extends Posts.Post {
  authorId: Author['id']
  commentIds: Comment['id'][]
}

const AUTHORS: Author[] = [
  {
    id: 1,
    name: 'John Doe',
    comments: [],
    commentIds: [1],
    posts: [],
    postIds: [1],
  },
  {
    id: 2,
    name: 'Jane Doe',
    comments: [],
    commentIds: [],
    posts: [],
    postIds: [],
  },
]

const COMMENTS: Comment[] = [
  {
    id: 1,
    text: 'First post comment',
    author: undefined!,
    authorId: 1,
    comments: [],
    commentIds: [2], // tslint:disable-line:no-magic-numbers
    post: undefined!,
  },
  {
    id: 2,
    text: 'First post comment reply',
    author: undefined!,
    authorId: 2,
    comments: [],
    commentIds: [],
    post: undefined!,
  },
]

let posts: Post[] = [
  {
    id: 1,
    title: 'First post',
    description: 'First post description',
    author: undefined!,
    authorId: 1,
    comments: [],
    commentIds: [1],
  },
  {
    id: 2,
    title: 'Second post',
    description: 'Second post description',
    author: undefined!,
    authorId: 1,
    comments: [],
    commentIds: [1],
  },
]

/** Schema for application GraphQL */
export const schema = Common.createSchema<Resolvers>({
  typeDefs: [Authors.typeDefs, Comments.typeDefs, Posts.typeDefs],
  resolvers: {
    Author: {
      comments: ({commentIds}: Author) =>
        COMMENTS.filter(({id}) => commentIds.includes(id)),
      posts: ({postIds}: Author) =>
        posts.filter(({id}) => postIds.includes(id)),
    },
    Comment: {
      author: ({authorId}: Comment) => findAuthor(authorId),
      comments: ({commentIds}: Comment) =>
        COMMENTS.filter(({id}) => commentIds.includes(id)),
      post: (comment: Comment) => {
        let root: Comment | undefined = comment
        let post: Post | undefined
        while(root !== undefined && root.commentIds.length !== 0) {
          root = COMMENTS.find(({commentIds}) => commentIds.includes(root!.id))
        }
        if(root !== undefined) {
          post = posts.find(({commentIds}) => commentIds.includes(root!.id))
        }
        if(post === undefined) {
          throw new Error('Cannot find post')
        }
        return post
      },
    },
    Post: {
      author: ({authorId}: Post) => findAuthor(authorId),
      comments: ({commentIds}: Post) =>
        COMMENTS.filter(({id}) => commentIds.includes(id)),
    },
    Mutation: {
      addPost: (_, {title, description}) => {
        const post: Post = {
          id: posts.length + 1,
          title,
          description,
          authorId: 1,
          author: undefined!,
          commentIds: [],
          comments: [],
        }
        posts = [...posts, post]
        return post
      },
    },
    Query: {
      author: (_, {id}) => findAuthor(id),
      post: (_, {id}) => findPost(id),
      posts: () => posts,
    },
  },
})

function findAuthor(authorId: Author['id']) {
  const author = AUTHORS.find(({id}) => id === authorId)
  if(author === undefined) {
    throw new Error('Cannot find author')
  }
  return author
}

function findPost(postId: Post['id']) {
  const post = posts.find(({id}) => id === postId)
  if(post === undefined) {
    throw new Error('Cannot find post')
  }
  return post
}
