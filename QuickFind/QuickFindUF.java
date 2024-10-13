package QuickFind;
public class QuickFindUF {
    private int[] id;
    public QuickFindUF(int N){
        id = new int[N];
        for (int i = 0; i < N; i++) id[i] = i;
}   
    public void display(){
        for(int i=0; i < id.length ; i++ ) System.out.println(id[i]);
    }

    public boolean connected(int p, int q)
        { return id[p] == id[q]; }
        
    public void union(int p, int q){
        int pid = id[p];
        int qid = id[q];
        for (int i = 0; i < id.length; i++)
            if (id[i] == pid) id[i] = qid;
        }   
    public static void main(String[] args) {
        // Create an instance of QuickUnionUF with 10 elements
        QuickFindUF uf = new QuickFindUF(20);
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
