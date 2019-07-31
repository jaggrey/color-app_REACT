import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';


function MiniPalette(props) {
  const { classes, colors, paletteName, emoji, handleClick } = props;
  const miniColorBoxes = colors.map(color => (
    <div className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} style={{ transition: "all 0.3s ease-in-out" }} />
      </div>
      <div className={classes.colors}>
        {/* MINI COLOR BOXES */}
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);