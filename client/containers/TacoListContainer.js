import { connect } from 'react-redux';

import TacoList from '../components/TacoList';
import { fetchTacos } from '../reducers/tacos';

const mapStateToProps = storeState => ({
  tacos: storeState.tacos
});

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    const action = fetchTacos();
    return dispatch(action);
  }
});
const TacoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TacoList
);

export default TacoListContainer;
