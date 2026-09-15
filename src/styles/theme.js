
import { createTheme} from '@mantine/core';

export const theme = createTheme({
  colors: {
   brand: [
  '#F5E8DE',
  '#EBD4C3',
  '#E0C0AA',
  '#D4AA8E',
  '#C39472',
  '#B77A52',
  '#9F5E35',
  '#834621',
  '#693616',
  '#4D270F',

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
  '#FFFBF5',
  '#FEF8EB',
  '#FDF0D8',
  '#FBE1B1',
  '#F8D28C',
  '#EFC16C',
  '#DBAD57',
  '#C89941',
  '#A88138',
  '#886930',
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
  Select: {
    styles: (theme) => ({
      input: {
        backgroundColor: theme.colors.cream[0],
      },

      label: {
        color: theme.colors.brand[7],
      },
    }),
  },
  Textarea: {
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