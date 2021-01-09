import React from 'react'
import { connect } from 'react-redux'
import TeaCard from './TeaCard'
import teaCardList from '../../common/json/teaCardList'
import { addTeaCardList } from '../../redux/teaCard-reducer'

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

const mapStateToProps = (state) => ({
  teaCardPage: state.teaCardPage,
  list: teaCardList
})

export default connect(mapStateToProps, { addTeaCardList }) (TeaCardContainer)
