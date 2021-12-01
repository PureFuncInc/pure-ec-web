import type { NextPage } from 'next'
import type { SignInFormData } from '@/components/auth/SignInForm'
import { SignInForm } from '@/components/auth/SignInForm'

const SignInPage: NextPage = () => {
  const handleSubmit = (formData: SignInFormData) => {
    console.debug({ formData })
  }

  return (
    <main>
      <SignInForm onSubmit={handleSubmit} />
    </main>
  )
}

export default SignInPage
