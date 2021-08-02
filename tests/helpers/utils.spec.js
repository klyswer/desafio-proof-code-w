import { agregarformatoPesos, reducirDescripcion } from "../../src/utils/FormatUtil";

describe('Validación de funciones format utils', () => {
  const valorPorFormatear = 1000;
  const valorFormateado = agregarformatoPesos(valorPorFormatear);

  test('Validando AgregaFormatoPesos()', () => {
    expect(valorFormateado.includes("1,000")).toBe(true);
  });

  const descripcion = "Esto es un texto de prueba para evaluar si la función esta cortando de forma correcta los caracteres.";
  const descripcionFormateada= reducirDescripcion(descripcion)

  test('Validando reducirDescripcion()', () => {
    expect(descripcionFormateada).toBe(`Esto es un texto de prueb...`);
  });


});
