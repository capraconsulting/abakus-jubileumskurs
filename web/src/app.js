import React, { Component } from 'react';
import { connect } from 'react-redux';

import BrewList from './components/BrewList';
import fb from './firebase';
import { firebaseBrewAdded, firebaseBrewRemoved, firebaseBrewUpdated } from './actions';

import './styles/base.less';

class App extends Component {

  componentDidMount() {
    fb.ref('/').on('child_added', obj => this.props.firebaseBrewAdded(obj.key, obj.val()));
    fb.ref('/').on('child_changed', obj => this.props.firebaseBrewUpdated(obj.key, obj.val()));
    fb.ref('/').on('child_removed', obj => this.props.firebaseBrewRemoved(obj.key, obj.val()));
  }

  render() {
    return (
      <div>
        <BrewList brewList={this.props.brewList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brewList: state.brewList
});

const mapDispatchToProps = {
  firebaseBrewAdded,
  firebaseBrewUpdated,
  firebaseBrewRemoved,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
