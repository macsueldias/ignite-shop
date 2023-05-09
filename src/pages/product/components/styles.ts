import { styled } from '@/styles'

export const ContainerSidebar = styled('div', {
  width: 480,
  height: '100vh',
  position: 'absolute',
  background: '$gray800',

  button: {
    all: 'unset',
    cursor: 'pointer',
    background: 'transparent',
    right: 0,
    margin: '1.75rem 1.75rem 1.75rem auto',
    width: '1.25rem',
    color: '$gray100',
  },

  h3: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$gray100',
    margin: '1.25rem 3rem 0',
  },
})

export const ProductCart = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  margin: '2rem 3rem',

  '& div:first-child': {
    width: '6rem',
    height: '6rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  '& div:last-child': {
    display: 'flex',
    flexDirection: 'column',

    h4: {
      color: '$gray100',
      fontSize: '1.125rem',
      fontWeight: 'lighter',
      lineHeight: '1.75rem',
      marginTop: '0.25rem',
    },

    span: {
      color: '$gray100',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: '1.75rem',
      marginTop: '0.5rem',
    },

    button: {
      all: 'unset',
      color: '$green300',
      fontWeight: 700,
      background: 'transparent',
      lineHeight: '1.75rem',
      marginTop: '0.5rem',
    },
  },
})
