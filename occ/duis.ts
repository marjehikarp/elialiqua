function performOperation(operation: string, a: number, b: number): number {
  switch (operation) {
    case 'add':
      return a + b;
    default:
      throw new Error('Unsupported operation');
  }
}
