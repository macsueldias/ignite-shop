import { keyframes, styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    all: 'unset',
    cursor: 'pointer',
    padding: '0.75rem',
    textDecoration: 'none',
    color: '$gray300',
    background: '$gray800',
    borderRadius: 6,
    position: 'relative',

    span: {
      position: 'absolute',
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: 50,
      background: '$green500',
      border: '3px solid $gray900',
      top: -6,
      right: -6,
      textAlign: 'center',
      lineHeight: 1.2,
      fontWeight: 'bold',
    },
  },
})

const showSideBar = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: 400,
  },
})

const hiddenSideBar = keyframes({
  from: {
    width: 400,
  },
  to: {
    width: 0,
  },
})

export const Menu = styled('div', {
  position: 'absolute',
  width: 0,
  height: '100vh',
  background: '$gray800',
  right: 0,

  '&.show': {
    width: 400,
    animation: `${showSideBar} 1000ms`,
  },

  '&.hidden': {
    width: 0,
    animation: `${hiddenSideBar} 700ms`,
  },
})
