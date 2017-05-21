import React from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

class Voting extends React.PureComponent{

  render(){
    return (
      <div>
        {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}


export default Voting;
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
