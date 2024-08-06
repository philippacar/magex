const m1 = ['a', 'b', 'c', 'd', 'e', '1.2.3'];
this.build = m1[5] ? m1[5].split('.') : [];
console.log(this.build); // Output: ['1', '2', '3']

const m2 = ['a', 'b', 'c', 'd', 'e', ''];
this.build = m2[5] ? m2[5].split('.') : [];
console.log(this.build); // Output: []

const m3 = ['a', 'b', 'c', 'd', 'e'];
this.build = m3[5] ? m3[5].split('.') : [];
console.log(this.build); // Output: []
