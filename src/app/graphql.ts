import * as merge from 'deepmerge'
import {makeExecutableSchema} from 'graphql-tools'
import * as authors from '../authors/graphql'
import * as comments from '../comments/graphql'
import * as posts from '../posts/graphql'

const appSchema = `
  schema {
    query: Query
  }

  type Query {
    _: Boolean
  }
`

interface Author extends authors.Author {
  commentIds: Comment['id'][]
  postIds: Post['id'][]
}
interface Comment extends comments.Comment {
  authorId: Author['id']
  commentIds: Comment['id'][]
}
interface Post extends posts.Post {
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
const POSTS: Post[] = [
  {
    id: 1,
    title: 'First post',
    description: 'First post description',
    author: undefined!,
    authorId: 1,
    comments: [],
    commentIds: [1],
  },
]

export const schema = makeExecutableSchema({
  typeDefs: [appSchema, authors.schema, comments.schema, posts.schema],
  resolvers: merge.all([
    authors.createResolvers({
      author: (_, {id}) =>
        AUTHORS.find(author => author.id === id)!,
      commentsFromAuthor: ({commentIds}: Author) =>
        COMMENTS.filter(({id}) => commentIds.includes(id)),
      postsFromAuthor: ({postIds}: Author) =>
        POSTS.filter(({id}) => postIds.includes(id)),
    }),
    comments.createResolvers({
      authorFromComment: ({authorId}: Comment) =>
        AUTHORS.find(({id}) => id === authorId)!,
      commentsFromComment: ({commentIds}: Comment) =>
        COMMENTS.filter(({id}) => commentIds.includes(id)),
      postFromComment: (comment: Comment) => {
        let root = comment
        while(root.commentIds.length !== 0) {
          root = COMMENTS.find(({commentIds}) => commentIds.includes(root.id))!
        }
        return POSTS.find(({commentIds}) => commentIds.includes(root.id))!
      },
    }),
    posts.createResolvers({
      authorFromPost: ({authorId}: Post) =>
        AUTHORS.find(({id}) => id === authorId)!,
      commentsFromPost: ({commentIds}: Post) =>
        COMMENTS.filter(({id}) => commentIds.includes(id)),
      post: (_, {id}) =>
        POSTS.find(post => post.id === id)!,
      posts: () =>
        POSTS,
    }),
  ]),
})
