import { connect } from 'react-redux';

import Taco from '../components/Taco';
import { fetchOneTaco } from '../reducers/tacos';

const mapStateToProps = (storeState, ownProps) => ({
  taco: storeState.tacos.find(
    taco => +ownProps.match.params.id === +taco.id
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    const action = fetchOneTaco(ownProps.match.params.id);
    return dispatch(action);
  }
});

const TacoContainer = connect(mapStateToProps, mapDispatchToProps)(Taco);

export default TacoContainer;
