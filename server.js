const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new PhepTinh(soA, soB, tenPhepTinh);
    setTimeout(() => res.send(pt.getResult() + ''), 1000);
});

app.listen(3000);

class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    getResult() {
        switch (this.tenPhepTinh) {
            case 'CONG': return +this.soA + +this.soB;
            case 'TRU': return this.soA - this.soB;
            case 'NHAN': return this.soA * this.soB;
            default: return this.soA / this.soB;
        }
    }
}
