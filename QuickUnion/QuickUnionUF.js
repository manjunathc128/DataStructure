class QuickUnionUF {
    constructor(N) {
        this.id = Array.from({ length: N }, (_, i) => i);
    }

    root(i) {
        while (i !== this.id[i]) {
            i = this.id[i];
        }
        return i;
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }

    union(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        this.id[i] = j;
    }
}


const uf = new QuickUnionUF(10);
uf.union(1, 2);
console.log(uf.connected(1, 2)); // true
console.log(uf.connected(1, 3)); // false
