let s1 = 'hello world';
console.log(s1.toUpperCase());
let s2 = 'lorem ipsum';
console.log(s2.toUpperCase());
let s3 = 'javascript is cool';
console.log(s3.toUpperCase());

const s = [s1,s2,s3];
for (const str of s) {
    console.log(str.toUpperCase());
}
