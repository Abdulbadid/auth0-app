import React,{Component} from 'react';
import Main from './components/Main';
import Gizli from './components/Gizli';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

class App extends Component {
  render(){


    let mainComponenet="";

    switch(this.props.location){
      case "":
        mainComponenet=<Main  {...this.props} />
        break;
      case "gizli":
        mainComponenet= this.props.auth.isAuthenticated() ?  <Gizli {...this.props} />:<NotFound />
        break
      case "callback":
        mainComponenet=<Callback />
        break
      default:
        mainComponenet=<NotFound />

    }

    return (
      <div className="App container">
        {this.props.isim} Uygulaması
        {mainComponenet}
      </div>
    );
  }
}

export default App;
