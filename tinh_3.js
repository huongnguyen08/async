const request = require('request');

//dung Promise thay cho callback function
function tinh(pt, a, b) {
    return new Promise((resolve, reject) => { // reject: err ; resolve: success
        const url = `http://localhost:3000/tinh/${pt}/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Nhap so'))
        request(url, (err, res, body) => {
            if (err) return reject(err)
            return resolve(body)
        })
    })
}

//C2
async function dientichHT(a, b, h) {
    const tong = await tinh("CONG", a, b);
    const tich = await tinh("NHAN", tong, h);
    const kq = await tinh("CHIA", tich, 2)
    return kq;
}
dientichHT(2, 3, 5)
    .then(r => console.log(r))
    .catch(err => console.log(err.message))
