export interface BaseFormProps<FD, R = void> {
  loading?: boolean
  formData?: FD | null

  onSubmit(formData: FD): R | Promise<R>
}
