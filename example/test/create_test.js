const assert = require('assert')
const Student = require('../src/student')

describe('creating student schema', () => {
    it('save reacord', () => {
        const newStudent = new Student({
            name: 'Daniyal',
            studentId: 5
        })
        newStudent.save()
    });
    it('updating record', () => {
        Student.update({ name: 'Daniyal' }, {
            $inc: { studentId: 10 }
        })
            .then(() => find({ name: 'Daniyal' }))
            .then((user) => {
                assert(Student.studentId === 10)
            })
    })
})