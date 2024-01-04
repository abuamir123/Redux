import React from 'react';
import { connect } from 'react-redux';
import { setData } from './actions';

class mycomponent extends React.Component {
  componentDidMount() {
    // Access and use the global state
    console.log(this.props.data);

    // Dispatch an action to update the global state
    this.props.setData(...this.props.data,["date","time"]);
    console.log(this.props.data);
  }

  render() {
    return (
      <div>
        {/* Your component rendering */}
      <h1>hello</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data, // Map the global state to props
});

export default connect(mapStateToProps, { setData })(mycomponent);
