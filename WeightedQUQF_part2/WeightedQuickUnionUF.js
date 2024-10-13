class WeightedQuickUnionUF {
    constructor(N) {
        this.id = Array.from({ length: N }, (_, i) => i); // Each element points to itself
        this.size = Array(N).fill(1); // Initialize size array with 1
    }

    root(i) {
        // First pass: Find the root
        while (i !== this.id[i]) {
            i = this.id[i];
        }
        const root = i; // Store the root
        
        // Second pass: Path compression
        i = this.id[root]; // Reset to start compression
        while (i !== this.id[i]) {
            const nextId = this.id[i]; // Store next id
            this.id[i] = root; // Point directly to root
            i = nextId; // Move to next
        }
        return root;
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }

    union(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        if (i === j) return;
        
        // Weighted union: attach smaller tree under larger tree
        if (this.size[i] < this.size[j]) {
            this.id[i] = j;
            this.size[j] += this.size[i];
        } else {
            this.id[j] = i;
            this.size[i] += this.size[j];
        }
    }
}

const uf = new WeightedQuickUnionUF(10);
uf.union(1, 2);
uf.union(3, 4);
uf.union(2, 3);

console.log("Connected(1, 3):", uf.connected(1, 3));  // true
console.log("Connected(1, 4):", uf.connected(1, 4));  // true
console.log("Connected(1, 5):", uf.connected(1, 5));  // false
