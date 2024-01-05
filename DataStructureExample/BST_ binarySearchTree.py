class TreeNode:
    def __init__(self, key):
        self.val = key
        self.left = None
        self.right = None
class BinarySearchTree:
    def __init__(self):
        self.root = None
    def insert(self,key):
        self.root = self._insert(self.root, key)
    def _insert(self,root, key ):        
        if root is None:
            return TreeNode(key)
        if key < root.val:
          root.left =  self._insert(root.left, key)
        elif key > root.val:
          root.right =  self._insert(root.right, key) 
           
        return root      
        
    def search(self,key):
        return self._search(self.root, key)
        
    def _search(self, root, key):
        if root is  None or root.val == key:
            return root
        if key < root.val:
            return self._search(root.left, key)
        elif key > root.val:
            return self._search(root.right, key)    
    def delete(self, key):
        self.root = self._delete(self.root, key)

    def _delete(self, root, key):
        if root is None:
            return root

        if key < root.val:
            root.left = self._delete(root.left, key)
        elif key > root.val:
            root.right = self._delete(root.right, key)
        else:
            # Node with only one child or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left

            # Node with two children: Get the inorder successor (smallest
            # in the right subtree)
            root.val = self._get_min_value(root.right)

            # Delete the inorder successor
            root.right = self._delete(root.right, root.val)

        return root
        
       def _get_min_value(self, root):
        current = root
        while current.left is not None:
            current = current.left
        return current.val

    def inorder_traversal(self):
        result = []
        self._inorder_traversal(self.root, result)
        return result

    def _inorder_traversal(self, root, result):
        if root:
            self._inorder_traversal(root.left, result)
            result.append(root.val)
            self._inorder_traversal(root.right, result)     
            
bst = BinarySearchTree()    
print(bst.insert(50)) 
print(bst.insert(20)) 
print(bst.insert(30)) 
print(bst.insert(40)) 
print(bst.insert(10)) 
print(bst.insert(100)) 
print(bst.insert(70)) 
print(bst.insert(80)) 


print(bst.search(30))
