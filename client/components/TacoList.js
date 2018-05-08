import React from 'react';

import Taco from './Taco';

export default class TacoList extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const { tacos } = this.props;
    return (
      <React.Fragment>
        <h1>Tacos</h1>
        {Array.isArray(tacos) &&
          tacos.map(taco => (
            <Taco taco={taco} key={taco.id} />
          ))}
      </React.Fragment>
    );
  }
}
