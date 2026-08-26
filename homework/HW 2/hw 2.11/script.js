let x = 0;
if (x === 0 || x === null || x === undefined || x === NaN || x === '') {
    x = 'default';
}

let x = null;

if (!x) {
    x = 'default';
}
