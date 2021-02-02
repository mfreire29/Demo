import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom'

function Item({id, title, stock, description, price, pictureUrl}) {

    const [estado, setEstado] = useState(0)
    const { addItem, removeItem, isInCart, substractItem } = useContext(CartContext)
    const [notif, setNotif] = useState(false)

    const onAdd = cantidad => {
        setNotif(true)
        setEstado(cantidad)
        if(cantidad === 1) {
            console.log("Se ha agregado " + cantidad + " producto al carrito." )
        } else {
            console.log("Se han agregado " + cantidad + " productos al carrito." )
        }
    const [notif, setNotif] = useState(false)

    const onAdd = cantidad => {
        setNotif(true)
        setEstado(cantidad)
        if(cantidad === 1) {
            console.log("Se ha agregado " + cantidad + " producto al carrito." )
        } else {
            console.log("Se han agregado " + cantidad + " productos al carrito." )
        }
    }

    const eliminarProductoCarrito = () => {
        setEstado(0)
    }    

    return (
        <>

                <div className="col-3 pb-3 text-center">
                    {
                        isInCart(id).length > 0 ?
                            <ItemCount stock={stock} initial={ isInCart(id)[0].quantity } onAdd={onAdd} onSubstract={ onSubstract } />
                        :
                            <ItemCount stock={stock} initial={0} onAdd={onAdd} onSubstract={ onSubstract } />
                    }
                    <p className="card-text text-center my-0 py-0">{description}</p>
                    <h3 className="card-text text-center mt-2"><b>${price}.-</b></h3>
                    {/* {
                        notif ?
                            estado > 0 ?
                                estado === 1  ?
                                    <p className="mt-3 text-center p-0">Se ha agregado { estado } al carrito.</p>
                                :
                                    <p className="mt-3 text-center p-0">Se han agregado { estado } al carrito.</p>
                            :
                                ''
                        :
                            ''
                    }
                    {
                        estado !== 0 ?
                            <>
                                <NavLink to="/cart" className="nav-link text-center m-0" >
                                    <button className="btn btn-dark add" >Terminar Compra</button>
                                </NavLink>
                                <button className="btn btn-dark add mt-0" onClick={eliminarProductoCarrito}>Eliminar del Carro</button>
                            </>
                        :
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    } */}                    
                </div>
        </>
    )
}

export default Item
