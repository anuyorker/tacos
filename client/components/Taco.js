import React from 'react';
import { Link } from 'react-router-dom';

export default class Taco extends React.Component {
  componentDidMount () {
    if (this.props.loadData) {
      this.props.loadData();
    }
  }
  render () {
    const { taco } = this.props;
    if (!taco) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <h2>
          <Link to={`/tacos/${taco.id}`}>
            {taco.name}
          </Link>
        </h2>
        <p>{taco.spicy ? '' : 'not '} spicy</p>
      </React.Fragment>
    );
  }
}
