'use client'

import {
  FormProvider,
  useForm,
  UseFormReturn,
  FieldValues,
  UseFormProps,
} from 'react-hook-form'
import { ReactNode } from 'react'
import { FormItem } from './FormItem'

export type FormProps<T extends FieldValues> = {
  children: ReactNode
  form?: UseFormReturn<T>
  onSubmit?: (values: T) => void
  className?: string
} & UseFormProps<T>

const FormComponent = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  className,
  ...rest
}: FormProps<T>): React.ReactElement => {
  const internalForm = useForm<T>(rest)
  const methods = form ?? internalForm

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit ?? (() => {}))}
      >
        {children}
      </form>
    </FormProvider>
  )
}

const createFormWithItem = () => {
  const Form = <T extends FieldValues>(props: FormProps<T>) =>
    FormComponent(props)

  return Object.assign(Form, { Item: FormItem })
}

export const Form = createFormWithItem()
