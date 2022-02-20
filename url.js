let url = 'http://myapi.com/v1/{userName}/{serviceNumber}';

const options = {
    userName: 'anuranjans',
    serviceNumber: '12345678',
    name: 'telephone',
    assets: '3'
};

function urlFormatter(url, options) {
    let xUrl = url;
    for (let key in options) {
        const value = options[key];
        let newUrl = xUrl.replace(new RegExp('{' + key + '}', 'g'), value);
        if (newUrl !== xUrl) {
            delete options[key];
            xUrl = newUrl;
        }
    }
    return [xUrl, options];
}

const [a,b] = urlFormatter(url, options);

console.log({ a,b });