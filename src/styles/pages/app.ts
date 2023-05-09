import { styled } from '..'

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

export const Menu = styled('div', {
  position: 'absolute',
  height: '100vh',
  background: '$gray800',
  right: 0,
  scrollbarWidth: 'none',

  '&.show': {
    transform: 'translateX(0%)',
    transitionDuration: '2000ms',
    overflowX: 'hidden',
    width: 480,
  },

  '&.hidden': {
    transform: 'translateX(100%)',
    transitionDuration: '2000ms',
    overflowX: 'hidden',
    width: 480,
    display: 'none',
  },
})
