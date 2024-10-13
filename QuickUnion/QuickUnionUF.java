package QuickUnion;

public class QuickUnionUF {
  
    private int[] id;
    public QuickUnionUF(int N){
        id = new int[N];
        for (int i = 0; i < N; i++) id[i] = i;
    }
    private int root(int i){
        while (i != id[i]) i = id[i];
            return i;
    }
    public boolean connected(int p, int q){
        return root(p) == root(q);
    }
    public void union(int p, int q){
        int i = root(p);
        int j = root(q);
        id[i] = j;
    }
    public static void main(String[] args) {
        // Create an instance of QuickUnionUF with 10 elements
        QuickUnionUF uf = new QuickUnionUF(20);
        // Perform union operations
        uf.union(1, 2);
        uf.union(3, 4);
        uf.union(2, 3); // This will connect 1, 2, 3, and 4
        // // Check if elements are connected
        System.out.println("Connected(1, 3): " + uf.connected(1, 3)); // Should return true
        System.out.println("Connected(1, 4): " + uf.connected(1, 4)); // Should return true
        System.out.println("Connected(1, 5): " + uf.connected(1, 5)); // Should return false
    }
}

