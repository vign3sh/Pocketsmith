import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Filters extends Component {
  static propTypes = {
    second: third
  }

  render() {
    return (
      <div>Filters</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)