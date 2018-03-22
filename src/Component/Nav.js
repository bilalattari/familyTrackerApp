import {
  StackNavigator,
} from 'react-navigation';
import SignUpPage from '../Component/SignupPage'
import SignIn from '../Component/SignIn'
import Result from '../Component/Result'
import Profile from '../Component/Profile'
import MakeCircle from '../Component/MakeCircle'

const Screens = StackNavigator({
  Login: { screen: SignIn },
  signUp: { screen: SignUpPage },
  ResultPage : {screen :Result },
  Profile : {screen : Profile},
  MakeCircle : {screen : MakeCircle }
 }
,
{
    initialRouteName : 'Login',
    headerMode : 'none'
}
);
export default Screens