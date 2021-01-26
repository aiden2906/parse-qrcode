const content = require('./content.json');
const qr_code = require('qrcode');

function qrcode(file, value) {
  return new Promise((r, _) => {
    qr_code.toFile(file, value, (err, data) => {
      if (err) _(err);
      r(data);
    })
  })
}

async function main() {
  for (let row of content) {
    try {
      await qrcode(`images/${row['SO SERI']}.png`, row['QRCODE']);
    } catch(err) {
      console.log(err);
    }
  }
}


main();