function getBuffer() {
  const data = '{"data":{"user":{"id":1, "name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
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
    const bufferView = new Uint16Array(this.buffer);
    let arString = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      arString += (String.fromCharCode(bufferView[i]));
    }
    return arString;
  }
}
