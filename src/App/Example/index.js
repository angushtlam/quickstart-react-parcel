import React from 'react'
import {connect} from 'react-redux'
import {exampleAction} from '../../actions/example'

const Example = ({example, exampleAction}) => {
  return (
    <div>
      <button onClick={exampleAction}>
        New Item
      </button>
      <ul>
        {example.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  example: state.example,
})

const mapDispatchToProps = dispatch => ({
  exampleAction: () => dispatch(exampleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Example)
