import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { connect } from 'react-redux';

const CartItem = ({
  title,
  price,
  amount,
  img,
  id,
  increase,
  decrease,
  remove,
}) => {
  return (
    <article className='cart-item'>
      <div className='product'>
        <h3 className='title'>{title}</h3>
        <div className='img-container'>
          <img src={img} alt={title} className='img' />
        </div>
      </div>
      <div className='content'>
        <p className='price'>${price}</p>
        <FaChevronUp className='btn-up' onClick={increase} />
        <p className='amount'>x{amount}</p>
        <FaChevronDown className='btn-dwn' onClick={decrease} />
        <button className='btn-remove' onClick={remove}>
          remove
        </button>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;

  return {
    increase: () => {
      dispatch({ type: 'INCREASE_AMOUNT', payload: id });
    },
    decrease: () => {
      dispatch({ type: 'DECREASE_AMOUNT', payload: id });
    },
    remove: () => {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
