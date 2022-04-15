const express = require('express');
const useragent = require('express-useragent');

const app = express();
app.use(useragent.express());

app.get('/', (req, res) => {
    res.send('Hello Redirect King!');
});

app.get('/ig', (req, res) => {
    console.log(req.useragent);
    if (req.useragent.isAndroid) {
        res.redirect(301, 'intent://www.instagram.com/yuval.ron.music#Intent;package=com.instagram.android;scheme=https;end');
    }
    else if (req.useragent.isiPhone || req.useragent.isiPad || req.useragent.isiPhoneNative || req.useragent.isiPod) {
        res.redirect(301, 'instagram://user?username=yuval.ron.music');
    }
    else {
        res.redirect(301, 'https://www.instagram.com/yuval.ron.music');
    }
});

app.listen(4000, () => console.log('Listening on port 4000!'));

