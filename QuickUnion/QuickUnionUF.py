class QuickUnionUF:
    def __init__(self, N):
        self.id = list(range(N))

    def root(self, i):
        while i != self.id[i]:
            i = self.id[i]
        return i

    def connected(self, p, q):
        return self.root(p) == self.root(q)

    def union(self, p, q):
        i = self.root(p)
        j = self.root(q)
        self.id[i] = j


uf = QuickUnionUF(10)
uf.union(1, 2)
print(uf.connected(1, 2))  # True
print(uf.connected(1, 3))  # False
