// libs
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    <Redirect to='/' />
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

  public toggleSidebar = () => {
    console.warn('toggleSidebar', this)
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  };

  public render () {
    return (
      <div className='app-layout'>
        {/*<aside className={`app-layout__sidebar ${this.state.showSidebar ? 'app-layout__show-sidebar' : ''}`}>*/}
          {/*aside*/}
          {/*<div onClick={this.toggleSidebar}>*/}
            {/*close*/}
          {/*</div>*/}
        {/*</aside>*/}
        <aside className={'app-layout__sidebar minimized'}>
          aside
        </aside>
        <main className='app-layout__page'>
          <header className='app-layout__header' onClick={this.toggleSidebar}>
            header 111111111111111111111111111
            11111111111111111111111111111
            1111111111111111111111111111111
            111111111111111111111111111111111
          </header>
          <div className='app-layout__content'>

            {/*here should be routing*/}
            <Routing/>

          </div>
          {/*<footer className='app-layout__footer'>footer</footer>*/}
        </main>
      </div>
    );
  }
}

export default App;
