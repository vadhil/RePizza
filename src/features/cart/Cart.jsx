// import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { getUsername } from '../user/CreateUser';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClear() {
    dispatch(clearCart());
  }
  // const cart = fakeCart;
  console.log(cart);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Kembali ke Menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Keranjangmu, {username} </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Pesan pizza
        </Button>

        <Button type="secondary" onClick={handleClear}>
          Bersihkan Keranjang
        </Button>
      </div>
    </div>
  );
}

export default Cart;
