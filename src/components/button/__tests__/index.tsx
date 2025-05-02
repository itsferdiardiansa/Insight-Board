import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '..'

describe('components/Button', () => {
  it('renders contents correctly', () => {
    const element = render(<Button />)

    const btn = screen.queryByTestId('btn')

    expect(btn?.textContent).toEqual('Click me!')
    expect(element).toMatchSnapshot()
  })
})
