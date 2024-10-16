import { styled } from '@/stitches.config'
// import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Root>
        {/* <HeaderTitle>My page</HeaderTitle>
        <NavLink href="/about">About</NavLink> */}
        <Button variant="primary">Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </Root>
    </div>
  )
}

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '28px',
})

// const HeaderTitle = styled('h1', {
//   color: '$main-400',
// })

// const NavLink = styled(Link, {
//   textDecoration: 'none',
// })

const Button = styled('button', {
  width: 'fit-content',
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$main-400',
        color: '$main-050',
      },
      secondary: {
        backgroundColor: '$main-200',
        color: '$main-600',
      },
    },
  },
})
