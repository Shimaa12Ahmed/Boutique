
import { createTheme} from '@mantine/core';

export const theme = createTheme({
  colors: {
    brand: [
      '#f2e1d5',
      '#dcc1ad',
      '#d7bfae',
      '#d8beab',
      '#c19d84',
      '#c17f4f',
      '#954e1c',
      '#7a390a',
      '#5f3213',
      '#49250c',
      // '#FFF0F5',
      // '#FADCE8',
      // '#F6C8D9',
      // '#F2B3CA',
      // '#E99AB7',
      // '#DF7FA5',
      // '#D46693',
      // '#C94D81',
      // '#A83A69',
      // '#872C54',
    ],

    success: [
      '#EEF7F1',
      '#DCEEE2',
      '#C9E5D3',
      '#B5DCC3',
      '#A3C1AD',
      '#8BAF98',
      '#739D83',
      '#617367',
      '#41664D',
      '#1E4D2B',
    ],

    cream: [
      '#FFFDF5',
      '#FFFBEF',
      '#FFF8E7',
      '#FFF1D0',
      '#FFE7AC',
      '#F4D99A',
      '#E5C581',
      '#D2AF68',
      '#C19A6B',
      '#B28A4A',
    ],
  },

  primaryColor: 'brand',

 
  primaryShade: 5,
  components: {
  TextInput: {
    styles: (theme) => ({
      input: {
        backgroundColor: theme.colors.cream[0],
      },

      label: {
        color: theme.colors.brand[7],
      },
    }),
  },
  PasswordInput: {
    styles: (theme) => ({
      input: {
        backgroundColor: theme.colors.cream[0],
      },

      label: {
        color: theme.colors.brand[7],
      },
    }),
  },
},
 
});