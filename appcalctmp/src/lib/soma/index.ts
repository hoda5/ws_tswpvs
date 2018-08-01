/**
 * Função que soma
 * @param a primeira parcela
 * @param b segunda parcela
 * @returns soma de a e b
 */
export function soma(a: number, b: number): number {
    const resultado = a + b;
    const teste = ["result", resultado];
    return resultado + teste.length;
  }