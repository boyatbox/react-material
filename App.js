import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from './theme';

const newStyle = makeStyles(theme => ({
  textStyle: props => ({
    color: props.colorx,
    "text-align":"center",
    display:"block",
    border:"1px solid"
  })

}));

function App() {
  const myTextStyle = newStyle({colorx:"#2e7d32"});
  return (
  <>
  <ThemeProvider theme={theme}>
   <Typography className={myTextStyle.textStyle}>Styled with makeStyles sending color as props</Typography>
   <Typography variant="overline" color="primary" display="block" align="center">Styled with props and custom theme</Typography>
   </ThemeProvider>
  </>
  );
}
export default App;
