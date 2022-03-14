// ! FILES
import { FaShoppingBasket } from 'react-icons/fa';
import { connect } from 'react-redux';

const NavBar = ({ amount }) => {
  return (
    <nav className='navbar'>
      <h1 className='nav-title title'>redux</h1>
      <div className='icon'>
        <FaShoppingBasket className='nav-icon' />
        <p className='quantity'>{amount}</p>
      </div>
    </nav>
  );
};

const mapStateToProps = (store) => {
  return {
    amount: store.amount,
  };
};

export default connect(mapStateToProps)(NavBar);
