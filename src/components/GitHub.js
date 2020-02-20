import React, { Component } from 'react'
import { getGitHubProfiles } from '../actions/github.actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class GitHub extends Component {
    componentDidMount() {
      this.props.getGitHubProfiles()
    }
    render() {
      console.log('this.props'+this.props)
      console.log('this.props.profiles length'+this.props.githubProfiles.length)
      let usersList  = this.props.githubProfiles.map(user => 
      <li key={user.id}>{user.name} - {user.email}</li>)
      return (
        <div className="App">
          <div className="container">
            <h1>List Of Users</h1>
            <ul>{usersList}</ul>
          </div>  
        </div>
      )
    }
  }
  function mapStateToProps(state, props) {
    console.log('state in as '+state);
    return {
      githubProfiles: state.githubProfiles
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getGitHubProfiles: bindActionCreators(getGitHubProfiles, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GitHub)