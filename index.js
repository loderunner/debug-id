const inspector = require('inspector');

if (inspector.url() !== undefined) {
  if (Object.id !== undefined) {
    return;
  }

  let id = 0;

  Object.id = function (o) {
    if (o.__uniqueid !== undefined) {
      return o.__uniqueid;
    }

    Object.defineProperty(o, '__uniqueid', {
      value: ++id,
      enumerable: false,
      // This could go either way, depending on your
      // interpretation of what an "id" is
      writable: false,
    });

    return o.__uniqueid;
  };
}
