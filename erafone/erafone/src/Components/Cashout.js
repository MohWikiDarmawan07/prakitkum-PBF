import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../Config/Config'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'

export const Cashout = (props) => {

    const history = useHistory();

    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty
                }).then(() => {
                    setCell('');
                    setAddress('');
                    dispatch({ type: 'EMPTY' })
                    setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
                    setTimeout(() => {
                        history.push('/')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />
            <div className='container'>
                <br />
                <h2 align="center">Konfirmasi Pesanan</h2>
                <hr />
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' onSubmit={cashoutSubmit}>
                    <label htmlFor="name">Nama</label>
                    <input type="text" className='form-control' required
                        value={name} disabled />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                    <br />
                    <label htmlFor="Cell No">No Telp</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' />
                    <br />
                    <label htmlFor="Delivery Address">Alamat Pengiriman</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Total Yang Harus Dibayar</label>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total Produk</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br />
                    <center><button type="submit" className='btn btn-success btn-md mybtn'>Pesan</button></center>
                    <hr />
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )
}
