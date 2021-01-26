const content = require('./content.json');
const qr_code = require('qrcode');

const main = async () => {
  for (let row of content) {
    await qrcode(`images/${row['SO SERI']}.png`, row.QRCODE)
    .catch(err => {
      console.log('err', {err});
    })
  }
}

function qrcode(file, value) {
  return new Promise((r, _) => {
    qr_code.toFile(file, value, (err, data) => {
      if (err) _(err);
      r(data);
    })
  })
}

main();