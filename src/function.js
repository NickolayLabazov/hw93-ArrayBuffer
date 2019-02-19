function getBuffer() {
  const data = '{"data":{"user":{"id":1, "name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferViev = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferViev[i] = input.charCodeAt(i);
    }(data);
    return buffer;
  });
}

export default class ArrayBufferConverter {
  constructor() {
    this.string = '{"data":{"user":{"id":1, "name":"Hitman","level":10}}}';
    this.buffer = 0;
  }

  load() {
    const buf = getBuffer();
    this.buffer = buf(this.string);
  }

  toString() {
    const bufferViev = new Uint16Array(this.buffer);
    const arString = [];
    for (let i = 0; i < bufferViev.length; i += 1) {
      arString.push(String.fromCharCode(bufferViev[i]));
    }
    return arString.join('');
  }
}
