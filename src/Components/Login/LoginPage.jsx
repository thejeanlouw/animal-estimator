import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import SignIn from '../Auth/SignIn'
import greyFadeBackground from '../../Style/Common/greyFadeBackground'
import AnnmlFarmLogo from '../Common/annmlFarmLogo'


const LoginPage = (props) => {
    
  const [getStyle, setStyle] = useState()

  const compileStyle = () => {
    if(!getStyle){
        let bg = greyFadeBackground;
        setStyle(bg);
    }
    console.log(getStyle)
    return getStyle;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Box textAlign='center' width='100%' height='100%' style={{...compileStyle()}}>
          <Card style={{...compileStyle()}}>
            <AnnmlFarmLogo/>
            <SignIn auth={props.auth} />
          </Card>
      </Box>
    </React.Fragment>
  );
}

export default LoginPage;