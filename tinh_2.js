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
// (2+3)*7/5
tinh("CONG", 3, 2)
    .then(tong => tinh("NHAN", tong, 7)
        .then(tich => tinh("CHIA", tich, 5)
            .then(r => console.log(`Ket qua la ${r}`))
            .catch(err => console.log(err.message))))


function dientichHT(a, b, h) {
    return tinh("CONG", a, b)
        .then(tong => tinh("NHAN", tong, h)
            .then(tich => tinh("CHIA", tich, 2)))
}

///xem function dientichHT nhu la 1 Promise

dientichHT(5, 4, 12)
    .then(r => console.log(`Ket qua la ${r}`))
    .catch(err => err.message)