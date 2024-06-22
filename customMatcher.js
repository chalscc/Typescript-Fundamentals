// customMatchers.js
expect.extend({
  toEqualCustom(received, expected) {
    const pass = this.equals(received, expected);
    if (pass) {
      return {
        message: () => `El test pasó: el valor recibido es igual al valor esperado.`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `El test falló: el valor recibido no es igual al valor esperado.\n\n` +
          `Valor esperado: ${this.utils.printExpected(expected)}\n` +
          `Valor recibido: ${this.utils.printReceived(received)}`,
        pass: false,
      };
    }
  },
});
