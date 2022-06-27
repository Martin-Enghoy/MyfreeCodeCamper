numNodes = 3
nodeNames = ("first", "second", "third")

# for x in range(numNodes):
#     # for j in nodeNames:
#     #     print(j)
#     print(nodeNames[x])


class node:

    def __init__(self) -> None:
        self.Number = 9
        pass


if __name__=="__main__":
    nodes = [node() for i in range(numNodes)]
    print(nodes)
    nodes[0].Number = 10
    print(nodes[0].Number)
    
    nodes[0].Number = 11
    print(nodes[0].Number)

    nodes[0].Number = 12
    print(nodes[0].Number)

    # print(nodes[i].Number for i in range(0,numNodes) is not None)
    # print(False if nodes[i].Number is not None else True for i in range(numNodes))
    for i in range(numNodes):
        if (nodes[i].Number is None):
            print("False Flag")
            break
        else: 
            print("True Flag")
    

