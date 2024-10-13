package WeightedQUQF_Part1;

public class WeightedQuickUnionUF {
    private int[] id;
    private int[] size;

    public WeightedQuickUnionUF(int N) {
        id = new int[N];
        size = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i; // Each element points to itself
            size[i] = 1; // Initialize size to 1
        }
    }

    private int root(int i) {
        while (i != id[i]) {
            id[i] = id[id[i]]; // Path compression
            i = id[i];
        }
        return i;
    }

    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }

    public void union(int p, int q) {
        int i = root(p);
        int j = root(q);
        if (i == j) return;
        // Weighted union: attach smaller tree under larger tree
        if (size[i] < size[j]) {
            id[i] = j;
            size[j] += size[i];
        } else {
            id[j] = i;
            size[i] += size[j];
        }
    }


    public static void main(String[] args) {
        // Create an instance of QuickUnionUF with 10 elements
        WeightedQuickUnionUF uf = new WeightedQuickUnionUF(10);

        // Perform union operations
        uf.union(1, 2);
        uf.union(3, 4);
        uf.union(2, 3); // This will connect 1, 2, 3, and 4

        // Check if elements are connected
        System.out.println("Connected(1, 3): " + uf.connected(1, 3)); // Should return true
        System.out.println("Connected(1, 4): " + uf.connected(1, 4)); // Should return true
        System.out.println("Connected(1, 5): " + uf.connected(1, 5)); // Should return false
    }
}