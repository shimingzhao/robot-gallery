import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './ShoppingCart.module.css';

interface ShoppingCartProps {}

interface ShoppingCartStates {
  isOpen: boolean;
}

export default class ShoppingCart extends Component<
  ShoppingCartProps,
  ShoppingCartStates
> {
  constructor(props: ShoppingCartProps) {
    super(props);
    this.state = { isOpen: false };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>购物车 2（件）</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
