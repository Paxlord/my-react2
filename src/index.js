import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
} from '@material-ui/core';

import intialState from './initial-state';
import Item from './components/item';

import './index.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.onChecked = this.onChecked.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: intialState,
    });
  }

  onDelete(id) {
    const { data } = this.state;

    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  }

  onChecked(id) {
    const { data } = this.state;

    this.setState({
      data: data.map((item) => {
        const updateItem = item;

        if (item.id === id) {
          updateItem.checked = !updateItem.checked;
        }

        return updateItem;
      }),
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Grid container spacing={1}>
        {data.map((item) => (
          <Item
            key={item.id}
            item={item}
            onChecked={this.onChecked}
            onDelete={this.onDelete}
          />
        ))}
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
