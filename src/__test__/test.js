import ArrayBufferConverter from "../arraybufferconverter.js";
import getBuffer from "../getbuffer.js";

test('to check that recieved data is transformed into string format', () => {
    const data = new ArrayBufferConverter();
    data.load(getBuffer());
    expect(data.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
});
