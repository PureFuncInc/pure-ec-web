import { styled } from '@/utilities/stitches'

export const Input = styled('input', {
  border: 'solid 1px black',
  outline: 'none',
  padding: '6px 10px',

  '&:disabled': {
    borderColor: 'grey',
    color: 'grey',
  },
  '&:focus': {
    borderColor: 'hotpink',
  },

  variants: {
    variant: {
      primary: {
        borderColor: '#4abc77',
        borderWidth: 3,
      },
    },
  },
})
