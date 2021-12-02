import { render } from '@testing-library/react'
import { SignInForm } from '@/components/auth/SignInForm'

describe('SignInForm', () => {
  it('should render component', () => {
    const { container } = render(<SignInForm onSubmit={jest.fn()} />)

    expect(container)
      .toMatchSnapshot()
  })
})
