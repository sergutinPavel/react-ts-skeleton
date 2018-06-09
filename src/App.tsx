// libs
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// styles
import './styles/index.scss';
// pages
import Home from './Pages/Home'


const Dashboard = () => (
  <div>
    Dashboard
  </div>
);

const Routing = () => (
  <Switch>
    <Route exact={true} path='/' component={Home}/>
    <Route path='/dashboard' component={Dashboard}/>
  </Switch>
);

interface IState {
  showSidebar: boolean;
}

class App extends React.Component<any, IState> {
  constructor (props: any) {
    super(props);

    this.state = {
      showSidebar: false
    };
    // this.showNav = false;
    console.log('App this', this);
  }
  public render() {
    return (
      <div className='app-layout'>
        <aside className={`app-layout__sidebar ${this.state.showSidebar ? 'show-navbar' : ''}`}>
          aside
        </aside>
        <main className='app-layout__page'>
          <header className='app-layout__header'>header</header>
          <div className='app-layout__content'>

            {/*here should be routing*/}
            <Routing/>

          </div>
          <footer className='app-layout__footer'>footer</footer>
        </main>
      </div>
    );
  }
}

export default App;
