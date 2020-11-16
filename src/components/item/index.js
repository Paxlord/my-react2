import React from 'react';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';

import './index.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);

    const { onChecked, onDelete } = this.props;

    this.onChecked = onChecked;
    this.onDelete = onDelete;
  }

  render() {
    const { item } = this.props;
    const { id, label, checked } = item;

    return (
      <Grid container item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={checked} onClick={() => this.onChecked(id)} />}
          label={label}
          style={{ textDecoration: checked ? 'line-through' : 'none' }}
        />
        <Button variant="contained" color="primary" component="span" onClick={() => this.onDelete(id)}>
          Supprimer
        </Button>
      </Grid>
    );
  }
}

export default Item;
