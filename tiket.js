const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const tikets = [
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
        "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
    ];

    const randNumber = Math.floor(Math.random() * tikets.length - 1);
    res.status(200).json(tikets[randNumber]);
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});