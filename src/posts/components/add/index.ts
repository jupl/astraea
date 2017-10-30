import {reduxForm} from 'redux-form'
import * as Template from './template'

/** Wrap component with redux form */
export const PostsAdd = reduxForm<Template.Form>({
  form: Template.PostsAdd.name,
  validate,
})(Template.PostsAdd)

function validate({title, description}: Template.Form) {
  let errors: Template.Form = {}
  if(title === undefined || title.trim() === '') {
    errors = {...errors, title: 'Title cannot be empty'}
  }
  if(description === undefined || description.trim() === '') {
    errors = {...errors, description: 'Description cannot be empty'}
  }
  return errors
}
