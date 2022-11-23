import { createTheme } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';


// const primary = red[500]; // #f44336
// const accent = purple['A200']; // #e040fb
// const accent = purple.A200;

// const color = red[500];

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: grey[200],
      },
    },
  });

//   const theme = createTheme({
//     palette: {
//       primary: {
//         light: '#757ce8',
//         main: '#3f50b5',
//         dark: '#002884',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });
