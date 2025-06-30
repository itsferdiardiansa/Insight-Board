import { render, screen, fireEvent, act } from '@testing-library/react'
import { Input } from '..'
import '@testing-library/jest-dom'

describe('components/form/Input', () => {
  it('renders with label', () => {
    render(<Input id="email" label="Email" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows the label on focus', () => {
    render(<Input id="username" label="Username" />)
    const input = screen.getByLabelText('Username')

    act(() => {
      input.focus()
      fireEvent.focus(input)
    })

    expect(input).toHaveFocus()
  })

  it('retains label position on blur when input is filled', () => {
    const { container } = render(<Input id="email" label="Email" />)

    const input = screen.getByLabelText('Email')

    act(() => {
      input.focus()
      fireEvent.change(input, { target: { value: 'test@example.com' } })
      fireEvent.blur(input)
    })

    expect(input).toHaveValue('test@example.com')

    const label = container.querySelector('label')
    expect(label).toHaveClass('-top-5')
  })

  it('resets label position on blur when input is empty', () => {
    const { container } = render(<Input id="email" label="Email" />)

    const input = screen.getByLabelText('Email')

    act(() => {
      input.focus()
      fireEvent.blur(input)
    })

    expect(input).toHaveValue('')

    const label = container.querySelector('label')
    expect(label).toHaveClass('translate-y-[12px]')
  })

  it('applies disabled state', () => {
    render(<Input id="disabled" label="Username" disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('applies readOnly state', () => {
    render(<Input id="readonly" label="Username" readOnly />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('readOnly')
  })

  it('renders required asterisk when required', () => {
    render(<Input id="email" label="Email" required />)
    expect(screen.getAllByText('*')).toHaveLength(2)
  })

  it('handles value change', () => {
    render(<Input id="username" label="Username" />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
