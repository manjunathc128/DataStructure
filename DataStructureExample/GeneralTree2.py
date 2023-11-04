class BuildLocationTree:
    def __init__(self,name):
        self.name=name
    
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
    
    def printTree(self,level):
        lev=self.getLevel()
        spaces=' '*lev*3
        prefix=spaces+'|--'
        
        print(prefix+self.name)
        
        if lev != level:    
            if self.children:
                for data in self.children:
                    data.printTree(level)
                    
    def print_tree(self, level):
        if self.get_level() > level:
            return
        spaces = ' ' * self.get_level() * 3
        prefix = spaces + "|__" if self.parent else ""
        print(prefix + self.data)
        if self.children:
            for child in self.children:
                child.print_tree(level)
            
root=BuildLocationTree('Global')

India=BuildLocationTree('India')         

USA=BuildLocationTree('USA')

Gujarat=BuildLocationTree('Gujarat')
Karnataka=BuildLocationTree('Karnataka')

Ahmedabad=BuildLocationTree('Ahmedabad')

Baroda=BuildLocationTree('Baroda')

Bangluru=BuildLocationTree('Bangluru')
Mysore=BuildLocationTree('Mysore')

NewJersey=BuildLocationTree('New Jersey')
California=BuildLocationTree('California')

Princeton=BuildLocationTree('Princeton')
Trenton=BuildLocationTree('Trenton')

SanFrancisco=BuildLocationTree('San Francisco')
MountainView=BuildLocationTree('Mountain View')
PaloAlto=BuildLocationTree('Palo Alto')

root.addChild(India)
root.addChild(USA)

India.addChild(Gujarat)
India.addChild(Karnataka)

Gujarat.addChild(Ahmedabad)
Gujarat.addChild(Baroda)

Karnataka.addChild(Bangluru)
Karnataka.addChild(Mysore)

USA.addChild(NewJersey)
USA.addChild(California)

NewJersey.addChild(Princeton)
NewJersey.addChild(Trenton)

California.addChild(SanFrancisco)
California.addChild(MountainView)
California.addChild(PaloAlto)

root.printTree(3)
India.printTree(2)
Bangluru.printTree(1)
