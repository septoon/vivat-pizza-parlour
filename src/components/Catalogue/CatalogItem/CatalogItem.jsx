import React, { useState } from 'react'
import classes from './CatalogItem.module.css'

const CatalogItem = ({ catalogPage }) => {
  const input = React.createRef()

  const [currentPrice, setCurrentPrice] = useState('');
  const [isChange, setIsChange] = useState(false);

  const setPrice = (price, target, index) => {
    if (target === index) {
      setIsChange(true)
      setCurrentPrice(price)
    }
  }

  return (
    <div className={classes.wrapper} >
      {catalogPage.catalogData.map((c, index) => {
        return <div key={c.id} className={classes.catalog_item} onClick={ (e) => {console.log(e.target)} } >
        <img src={c.image} alt={c.title} className={classes.image} />
        <span className={classes.description} >Состав: {c.composition}</span>
        <div className={classes.size}>
         
          <button value={index} onClick={ (e) => setPrice(c.price.small, e.target.value, index.toString()) } className={classes.size_item }>Ø 30 см</button>
           
          <button value={index} onClick={ (e) => setPrice(c.price.middle, e.target.value, index.toString()) } className={classes.size_item}>Ø 40 см</button>
          
          <button value={index} onClick={ (e) => setPrice(c.price.large, e.target.value, index.toString()) } className={classes.size_item}>Ø 50 см</button>
        </div>
        <div className={classes.price_holder}>
          <span className={`${classes.price} ${classes.pr_inp}`}>
            <span className={classes.price_count}> <b ref={input} >{!isChange ? c.price.small : currentPrice}</b> руб. </span>                
          </span>
          <button className={classes.btn_order}>Заказать</button>
        </div>

      </div>
      }
       )}
    </div>
  )
}

export default CatalogItem
