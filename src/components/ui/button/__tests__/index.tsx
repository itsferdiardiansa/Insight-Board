import { fireEvent, render, screen } from '@testing-library/react'
import { Button, type ButtonProps } from '..'
import { FaUser } from 'react-icons/fa'
import React from 'react'
import {} from '../Button'

const CustomLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className="text-violet-800"
      data-testid="custom-link"
    >
      Custom Link
    </a>
  )
})
CustomLink.displayName = 'CustomLink'

describe('components/Button', () => {
  it('renders contents correctly', () => {
    const element = render(<Button>Click me!</Button>)

    const btn = screen.queryByTestId('btn')

    expect(btn?.textContent).toEqual('Click me!')
    expect(element).toMatchSnapshot()
  })

  it('renders with default props', () => {
    render(<Button>Click Me</Button>)
    const button = screen.getByTestId('btn')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
    expect(button).not.toBeDisabled()
  })

  it.each([
    ['primary'],
    ['secondary'],
    ['destructive'],
    ['outline'],
    ['outlinePrimary'],
    ['outlineSecondary'],
    ['outlineDestructive'],
    ['ghost'],
  ])('renders with variant %s', variant => {
    render(<Button variant={variant as ButtonProps['variant']}>Test</Button>)
    const button = screen.getByTestId('btn')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test')
  })

  it.each([['sm'], ['md'], ['lg']])('applies size %s', size => {
    render(<Button size={size as ButtonProps['size']}>Sized</Button>)
    const button = screen.getByTestId('btn')
    expect(button).toBeInTheDocument()
  })

  it('applies fullWidth when true', () => {
    render(<Button fullWidth>Wide</Button>)
    const button = screen.getByTestId('btn')
    expect(button.className).toMatch(/w-full/)
  })

  it('renders with left icon', () => {
    render(
      <Button icon={<FaUser />} iconPosition="left">
        Profile
      </Button>
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByTestId('btn').querySelector('svg')).toBeInTheDocument()
  })

  it('renders with right icon', () => {
    render(
      <Button icon={<FaUser />} iconPosition="right">
        Profile
      </Button>
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()
    const button = screen.getByTestId('btn')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders loading spinner', () => {
    render(<Button loading>Loading</Button>)
    const button = screen.getByTestId('btn')
    expect(button).toBeDisabled()
    expect(button.querySelector('svg')).toHaveClass('animate-spin')
    expect(button).not.toHaveTextContent('Loading') // because children is visually hidden
  })

  it('disables when `disabled` is passed', () => {
    render(<Button disabled>Blocked</Button>)
    const button = screen.getByTestId('btn')
    expect(button).toBeDisabled()
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)
    fireEvent.click(screen.getByTestId('btn'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders as child if `asChild` is true', () => {
    const element = render(
      <Button asChild>
        <CustomLink />
      </Button>
    )

    const link = screen.getByTestId('custom-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Custom Link')
    expect(element).toMatchSnapshot()
  })
})
