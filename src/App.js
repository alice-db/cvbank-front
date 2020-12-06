import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './containers/SearchBar';
import VisibleCapsuleList from './containers/VisibleCapsuleList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {

  render() {
    // show spinner before getting capsules
    const isFetching = this.props.isFetching

    return (
      <View style={styles.container}>
        <SearchBar />
        {isFetching && <CircularProgress />}
        <VisibleCapsuleList />
      </View>
    );
  }
}

// App style with StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        overflowY: 'scroll',
    },
});

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
      isFetching: state.capsules.isFetching,
  }
}

// app is design like a mix between component container
export default connect(mapStateToProps)(App);
