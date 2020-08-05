import ArrayBufferConverter from '../app';
import getBuffer from '../getbuffer';

test('Проверка работы конвертера', () => {
  const converter = new ArrayBufferConverter();
  const arrayBufferEmulation = getBuffer();
  converter.load(arrayBufferEmulation);
  const recieved = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(recieved).toBe(expected);
});
