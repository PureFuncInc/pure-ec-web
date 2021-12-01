import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import type { BaseFormProps } from '@/types/BaseFormProps'
import { Input } from '@/components/shared/form/Input'

export type SignInFormData = z.infer<typeof SignInFormSchema>

export type SignInFormProps = BaseFormProps<SignInFormData>

export const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>
        Email
      </label>
      <Input
        type='email'
        variant='primary'
        {...register('email')} />

      <label htmlFor='password'>
        Password
      </label>
      <Input
        type='password'
        {...register('password')} />

      <button type='submit'>
        Submit
      </button>
    </form>
  )
}

const SignInFormSchema = z.object({
  email: z.string()
    .email(),
  password: z.string()
    .min(8),
})
