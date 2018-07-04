import React from 'react'
import {connect} from 'react-redux'
import {exampleAction} from '../../actions/reduxExample'

const ReduxExample = ({reduxExample, exampleAction}) => {
  return (
    <div>
      <button onClick={exampleAction}>
        New Item
      </button>
      <ul>
        {reduxExample.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  reduxExample: state.reduxExample,
})

const mapDispatchToProps = dispatch => ({
  exampleAction: () => dispatch(exampleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)
