import { styled } from '@/styles'

export const ContainerSidebar = styled('div', {
  width: 480,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  background: '$gray800',

  '& > button': {
    all: 'unset',
    cursor: 'pointer',
    display: 'flex',
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
  flex: 1,
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

export const InfoCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '2rem 3rem',
})

export const AmountCart = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
})

export const TotalCart = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',

  fontWeight: 'bold',

  span: {
    fontSize: '1.5rem',
  },
})

export const ConfirmProductCart = styled('button', {
  width: '100%',
  height: '4rem',
  marginBlock: '4rem 2rem',
  backgroundColor: '$green500',
  color: '$white',
  border: 0,
  borderRadius: 8,
  fontWeight: 'bold',
  fontSize: '1.125rem',
  lineHeight: '1rem',
  cursor: 'pointer',
})
