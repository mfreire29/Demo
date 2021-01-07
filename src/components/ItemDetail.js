import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({ id, title, stock, description, price, pictureUrl }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <img src={pictureUrl} className="img-fluid" />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <h1>{ title }</h1>
                        <h5>{ description }</h5>
                        <p className="text-muted">Stock Disponible: { stock }</p>
                        <h1 className="mt-5 text-center"><span className="text-danger"><b>${ price }.-</b></span><br/>pesos argentinos</h1>
                        <div className="mt-5">
                            <ItemCount stock={stock} initial={1}/>
                        </div>
                    </div>
                </div>
            </div>
          
          
          
          
          
        </>
    )
}

export default ItemDetail
