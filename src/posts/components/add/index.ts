import gql from 'graphql-tag'
import {ChildProps, graphql} from 'react-apollo'
import {Dispatch} from 'redux'
import {reduxForm} from 'redux-form'
import {Post} from '../../graphql'
import {navigation} from '../../routes'
import * as Template from './template'

interface Result {
  addPost?: Post
}

type GQLProps = ChildProps<{}, Result>

const gqlDecorator = graphql(gql`
  mutation($title: String!, $description: String!) {
    addPost(title: $title, description: $description) {
      id
    }
  }
`)
const formDecorator = reduxForm<Template.Form, GQLProps>({
  form: Template.PostsAdd.name,
  onSubmit,
  validate,
})

/** Wrap component with Apollo and redux form */
export const PostsAdd = gqlDecorator(formDecorator(Template.PostsAdd))

async function onSubmit(
  form: Template.Form,
  dispatch: Dispatch<{}>,
  {mutate}: GQLProps,
) {
  const {data: {addPost}} = await mutate!({variables: form})
  dispatch(navigation.post(addPost!))
}

function validate({title, description}: Template.Form) {
  let errors = {}
  if(title === undefined || title.trim() === '') {
    errors = {...errors, title: 'Title cannot be empty'}
  }
  if(description === undefined || description.trim() === '') {
    errors = {...errors, description: 'Description cannot be empty'}
  }
  return errors
}
