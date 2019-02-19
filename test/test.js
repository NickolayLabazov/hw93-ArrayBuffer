import ArrayBufferConverter from '../src/function';

test('Загрузка и чтение', () => {
  const expected = '{"data":{"user":{"id":1, "name":"Hitman","level":10}}}';
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load();
  const received = arrayBufferConverter.toString();
  expect(received).toEqual(expected);
});
