import * as React from 'react'
import {Field, InjectedFormProps} from 'redux-form'

export interface Form {
  title?: string
  description?: string
}

export function PostsAdd({
  handleSubmit,
  pristine,
  reset,
  submitting,
  valid,
}: InjectedFormProps<Form>) {
  const disableClear = pristine || submitting
  const disableSubmit = disableClear || !valid
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <Field name="title" component="input" type="text" />
        </label>
      </div>
      <div>
        <label>
          Description:
          <Field name="description" component="input" type="text" />
        </label>
      </div>
      <div>
        <button type="button" disabled={disableClear} onClick={reset}>
          Clear
        </button>
        <button type="submit" disabled={disableSubmit}>Submit</button>
      </div>
    </form>
  )
}
