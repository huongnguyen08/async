const request = require('request');

// function tinh(pt, a, b, cb) {
//     const url = "http://localhost:3000/tinh/";
//     request(url + pt + '/' + a + '/' + b, (err, res, body) => {
//         if (err) return cb(err, null)
//         return cb(null, body)
//     })
// }
function tinh(pt, a, b, cb) {
    const url = `http://localhost:3000/tinh/${pt}/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb("Vui long nhap so", null)
    request(url, (err, res, body) => {
        if (err) return cb(err, null)
        return cb(null, body)
    })
}
tinh("NHAN", 2, 4, (err, result) => {
    console.log(err ? err : result)
})

//(3+4)*4/7
// tinh('CONG', 3, 4, (err, tong) => {
//     if (err) return console.log(err);
//     tinh("NHAN", tong, 4, (err, tich) => {
//         if (err) return console.log(err);
//         tinh("CHIA", tich, 7, (err, ketqua) => {
//             return console.log(err ? err : ketqua)
//         })
//     })
// })


function dientichHinhThang(a, b, h, cb) {
    tinh('CONG', a, b, (err, tong) => {
        if (err) return cb(err, NULL);
        tinh("NHAN", tong, h, (err, tich) => {
            if (err) return cb(err, NULL);
            tinh("CHIA", tich, 2, (err, ketqua) => {
                return err ? cb(err, null) : cb(null, ketqua)
            })
        })
    })
}
dientichHinhThang(3, 4, 2, (err, kq) => {
    console.log(err ? err : kq)
})