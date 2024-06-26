import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return (this._amount);
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw TypeError('amount must be a number');
    }
  }

  get currency() {
    return (this._currency);
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw TypeError('currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.displayFullCurrency()}`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return (amount * conversionRate);
    }
    throw TypeError('amount and conversionRate must be numbers');
  }
}
