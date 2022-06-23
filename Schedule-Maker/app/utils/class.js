import DAG from './ClassDAG'

jsonData = require('./../test/example_schedule.json')

let classData = JSON.parse(jsonData)

let classes = new DAG()

classData.array.forEach(classInst => {
    classes.addClass(classInst)

    classData["Prerequisites"].forEach(prereq => {
        classes.addPreReq(classInst, prereq)
    })
});