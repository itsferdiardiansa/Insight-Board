import { render } from '@testing-library/react'
import { BrandLogo } from '..'

describe('components/BrandLogo', () => {
  it('it should render the component and match snapshot', () => {
    const element = render(<BrandLogo />)

    expect(element).toMatchSnapshot()
  })
})
