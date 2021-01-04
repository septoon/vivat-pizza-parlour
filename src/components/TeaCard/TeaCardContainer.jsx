import React from 'react'
import { connect } from 'react-redux'
import teaCardList from '../../common/json/teaCardList'
import { addTeaCardList } from '../../redux/teaCard-reducer'
import TeaCard from './TeaCard'

class TeaCardContainer extends React.Component {
  componentDidMount() {
    this.props.addTeaCardList(this.props.list)
  }

  render() {
    return (
      <TeaCard teaCardPage={this.props.teaCardPage} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teaCardPage: state.teaCardPage,
    list: teaCardList
  }
}

export default connect(mapStateToProps, { addTeaCardList }) (TeaCardContainer)