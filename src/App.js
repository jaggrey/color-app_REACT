import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
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
          <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
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

