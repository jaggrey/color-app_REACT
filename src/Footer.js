import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <footer className="Footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    )
  }
}
