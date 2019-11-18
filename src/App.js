import React from 'react';
import './App.css';
import {Switch, Route , Redirect} from 'react-router-dom'
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/SignInSignUp';
import { auth, createUserProfile } from './firebase/firebase';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/actions/userAction';
class App extends React.Component {

  unsubscribeFromAuth = null
  componentDidMount() {
    const {setCurrentUser} = this.props;
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(user => {
          setCurrentUser({
            currentUser:{
              id:user.id,
              ...user.data()
            }
          })
        },
        );
      }
      setCurrentUser(userAuth)

    });
  };

  componentWillUnmount() {
    
    this.unsubscribeFromAuth()
  }

  render() {
  return (
    <div >
      <Header  />
     <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp/>) } />
      </Switch>
    </div>
  );
  }
}
const mapStateToProps = state => ({
  currentUser:state.user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps) (App);
