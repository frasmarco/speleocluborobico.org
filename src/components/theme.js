import { createMuiTheme } from "@material-ui/core";
//import { createMuiTheme } from '@material-ui/core/styles';
import Graphik from '../fonts/Graphik-Regular.ttf';

const graphik = {
  fontFamily: 'Graphik',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  //fontWeight: 400,
  src: `
    local('Graphik'),
    local('Graphik-Regular'),
    url(${Graphik}) format('woff2')
  `,
};

const theme = createMuiTheme({
    palette: {
    type: 'dark'
    },
    typography: {
        fontFamily: 'Graphik, Arial',
      },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [graphik],
          },
        },
    },
});

export default theme;