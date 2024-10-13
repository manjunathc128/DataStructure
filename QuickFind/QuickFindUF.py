class QuickUnionUF:
    def __init__(self, N):
        self.id = list(range(N))  # Each element points to itself
        self.size = [1] * N  # Initialize size array with 1

    def root(self, i):
        while i != self.id[i]:
            i = self.id[i]
        return i

    def connected(self, p, q):
        return self.root(p) == self.root(q)

    def union(self, p, q):
        i = self.root(p)
        j = self.root(q)
        if i == j:
            return
        if self.size[i] < self.size[j]:
            self.id[i] = j
            self.size[j] += self.size[i]
        else:
            self.id[j] = i
            self.size[i] += self.size[j]


uf = QuickUnionUF(10)
uf.union(1, 2)
uf.union(3, 4)
uf.union(2, 3)

print("Connected(1, 3):", uf.connected(1, 3))  # True
print("Connected(1, 4):", uf.connected(1, 4))  # True
print("Connected(1, 5):", uf.connected(1, 5))  # False
