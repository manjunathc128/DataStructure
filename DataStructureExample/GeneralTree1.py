# Given the management hierarchy of a company. Use general tree data structure to implement nodes that have
# both parent node and children nodes. 

class BuildManagemenTree:
    def __init__(self,name,desg):
        self.name=name
        self.designation=desg
        self.parent=None
        self.children=[]
        
    def addChild(self,child):
        child.parent=self
        self.children.append(child)
        
    def getLevel(self):
        level=0
        p = self.parent
        while p:
            level+=1
            p = p.parent
        return level    
    
    def printTree(self,value):
        spaces=' '*self.getLevel()*3
        prefix=spaces+'|--'
        
        if value=='both':
            print(prefix + self.name + "("+self.designation+")")
            
        elif value=='name' :
            print(prefix + self.name)
            
        elif value=='designation':
            print(prefix + self.designation)
            
        if self.children:
            for data in self.children:
                data.printTree(value)
                
root=BuildManagemenTree('Nilupul','CEO')

Chinmay=BuildManagemenTree('Chinmay','CTO')         

Vishwa=BuildManagemenTree('Vishwa','Infrastructure Head')

Dhaval=BuildManagemenTree('Dhaval','Cloud Manager')
Abhijit=BuildManagemenTree('Abhijit','App Manager')

Aamir=BuildManagemenTree('Aamir','Application Head')

Gels=BuildManagemenTree('Gels','HR Head')

peter=BuildManagemenTree('Peter','Recruitment Manager')
Waqas=BuildManagemenTree('Waqas','Policy Manager')

root.addChild(Chinmay)
root.addChild(Gels)

Chinmay.addChild(Vishwa)
Chinmay.addChild(Aamir)

Vishwa.addChild(Dhaval)
Vishwa.addChild(Abhijit)

Gels.addChild(peter)
Gels.addChild(Waqas)

# root.printTree('name')
# root.printTree('both')
# root.printTree('designation')

# Vishwa.printTree('name')
# Vishwa.printTree('both')
# Vishwa.printTree('designation')

Dhaval.printTree('name')
Dhaval.printTree('both')
Dhaval.printTree('designation')
#Example2

def build_management_tree():
    # CTO Hierarchy
    infra_head = BuildManagemenTree("Vishwa","Infrastructure Head")
    infra_head.addChild(BuildManagemenTree("Dhaval","Cloud Manager"))
    infra_head.addChild(BuildManagemenTree("Abhijit", "App Manager"))
    
    cto = BuildManagemenTree("Chinmay", "CTO")
    cto.addChild(infra_head)
    cto.addChild(BuildManagemenTree("Aamir", "Application Head"))
    
    # HR hierarchy
    hr_head = BuildManagemenTree("Gels","HR Head")
    
    hr_head.addChild(BuildManagemenTree("Peter","Recruitment Manager"))
    hr_head.addChild(BuildManagemenTree("Waqas", "Policy Manager"))
    
    ceo = BuildManagemenTree("Nilupul", "CEO")
    ceo.addChild(cto)
    ceo.addChild(hr_head)

    return ceo
    
if __name__ == '__main__':
    root_node = build_management_tree()
    root_node.printTree("name")
    root_node.printTree("designation")
    root_node.printTree("both")    
