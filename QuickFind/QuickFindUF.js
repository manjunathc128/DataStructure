class QuickFindUF {
    constructor(N) {
        this.id = Array.from({ length: N }, (_, i) => i);
    }

    connected(p, q) {
        return this.id[p] === this.id[q];
    }

    union(p, q) {
        const pid = this.id[p];
        const qid = this.id[q];
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pid) {
                this.id[i] = qid;
            }
        }
    }
}

const uf = new QuickFindUF(10);
uf.union(1, 2);
console.log(uf.connected(1, 2)); // true
console.log(uf.connected(1, 3)); // false
