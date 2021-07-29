import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './ShoppingCart.module.css';
import { appContext } from '../AppState';

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
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  render() {
    return (
      <appContext.Consumer>
        {(value) => (
          <div className={styles.cartContainer}>
            <button className={styles.button} onClick={this.handleClick}>
              <FiShoppingCart />
              <span>购物车 {value.shoppingCart.items.length}（件）</span>
            </button>
            <div
              className={styles.cartDropDown}
              style={{ display: this.state.isOpen ? 'block' : 'none' }}
            >
              <ul>
                {value.shoppingCart.items.map((i) => (
                  <li>{i.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </appContext.Consumer>
    );
  }
}
