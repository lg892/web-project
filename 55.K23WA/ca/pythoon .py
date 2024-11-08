class_Car():
    def setName(self,name):
        self.name=name
    def getName(self):
        return self.name

honda=car()
carname=input("Car name: ")
honda.setName(carname)
ptint("Honda car name:",honda.getName())