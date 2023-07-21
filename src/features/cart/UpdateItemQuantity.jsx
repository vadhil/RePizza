import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  // getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(pizzaId));

  //2 ways
  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={handleDecrease} type="round">
        -
      </Button>
      <p className="mx-1 text-sm">{quantity}</p>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}
