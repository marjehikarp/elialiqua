class GenericValue<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}

// Usage
const numericValue = new GenericValue<number>(10);
console.log(numericValue.value); // Output: 10

const stringValue = new GenericValue<string>('Hello');
console.log(stringValue.value); // Output: Hello
