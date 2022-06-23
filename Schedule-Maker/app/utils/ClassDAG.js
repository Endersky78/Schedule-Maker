export default class DAG {
    constructor() { this.ClassList = new Map() }

    addClass(v) { this.ClassList.set(v, []) }

    addPreReq(classInst, preReq) { this.ClassList.get(v).push(w) }

    topologicalSort(v, visited, stack) {
        visited[v] = true

        for (let i = 0; i < this.ClassList.get(v).length; i++) {
            if (!visited[classInst]) {
                this.topologicalSort(this.ClassList.get(v)[i], visited, stack)
            }
        }

        stack.push(v)
    }

    SortClasses() {
        let stack = []

        let visited = []
        this.ClassList.forEach((prereqs, classInst) => {
            visited[classInst] = false
        })

        this.ClassList.forEach((prereqs, classInst) => {
            if (!visited[classInst]) {
                this.topologicalSort(classInst, visited, stack)
            }
        })

        return stack
    }
}