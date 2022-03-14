// ! COMPONENTS
import CartItem from './CartItem';
// ! FILES
import { connect } from 'react-redux';
import { useEffect } from 'react';

const CartContainer = ({ items, total, clear_all, dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  });

  if (items.length === 0) {
    return (
      <section className='cart-container'>
        <div></div>
        <h3>Your bag</h3>
        <h5>is empty</h5>
      </section>
    );
  }

  return (
    <section className='cart-container'>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <article className='total-container'>
        <p>Total:</p>
        <p>${parseFloat(total).toFixed(2)}</p>
      </article>
      <button className='btn' onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        clear cart
      </button>
    </section>
  );
};

const mapStateToProps = (store) => {
  return {
    items: store.items,
    total: store.total,
  };
};

export default connect(mapStateToProps)(CartContainer);
