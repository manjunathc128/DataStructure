class WeightedQuickUnionUF {
    constructor(N) {
        this.id = new Array(N);
        this.size = new Array(N).fill(1); // Initialize size to 1
        for (let i = 0; i < N; i++) {
            this.id[i] = i; // Each element points to itself
        }
    }

    root(i) {
        // Find the root with path compression
        while (i !== this.id[i]) {
            this.id[i] = this.id[this.id[i]]; // Path compression
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

// Example usage
const uf = new WeightedQuickUnionUF(10);

// Perform union operations
uf.union(1, 2);
uf.union(3, 4);
uf.union(2, 3); // This will connect 1, 2, 3, and 4

// Check if elements are connected
console.log("Connected(1, 3):", uf.connected(1, 3)); // Should return true
console.log("Connected(1, 4):", uf.connected(1, 4)); // Should return true
console.log("Connected(1, 5):", uf.connected(1, 5)); // Should return false