import React from 'react'
import classes from './CatalogItem.module.css'

const CatalogItem = ({ catalogPage }) => {
  return (
    <div className={classes.wrapper} >
      {catalogPage.catalogData.map(c => <div key={c.id} className={classes.catalog_item}>
          <h3 className={classes.title} >{c.title}</h3>
          <img src={c.image} alt={c.title} className={classes.image} />
          <div className={classes.price} >
            <span>{c.price.title}</span>
            <span>{c.price.small}</span>
            <span>{c.price.middle}</span>
            <span>{c.price.large}</span>
          </div>
          <span>Состав: {c.composition}</span>
        </div>
       )}
    </div>
  )
}

export default CatalogItem
