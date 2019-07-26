import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { Switch, Route } from 'react-router-dom';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    });
  }

  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
        <Switch>
          <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

