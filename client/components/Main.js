import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        {/* {React.cloneElement(this.props.children, this.props)} */}

        <Switch>
          <Route exact path='/'>
            <PhotoGrid {...this.props} />
          </Route>
          <Route path='/view/:postCode'>
            <Single {...this.props} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
