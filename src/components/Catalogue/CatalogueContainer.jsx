import React from 'react'
import { connect } from 'react-redux'
import Catalogue from './Catalogue'
import { addCatalogList } from "../../redux/catalog-reducer"
import catalogList from '../../common/json/catalog-list'

class CatalogueContainer extends React.Component {
  componentDidMount() {
    this.props.addCatalogList(this.props.list)
  }
  
  render() {
    return (
      <Catalogue catalogPage={this.props.catalogPage} />
    )

  }
}

const mapStateToProps = (state) => ( {
    catalogPage: state.catalogPage,
    list: catalogList
  }
)

export default connect(mapStateToProps, { addCatalogList }) (CatalogueContainer)
