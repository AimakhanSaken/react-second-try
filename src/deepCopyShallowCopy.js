const a = {
    name: 'zzzz',
    protocol: 'http',
    maxStudents: 41,
    isOnline: true,
    students: ['aaaa', 'bbb', 'fff'],
    classsroom: {
        teacher: {
            name: 'eee',
            age: 21
        }
    }
}

const b = {...a}; //поверхностная копия. если менять значения у b то поменяется все от name до isOnline. students classroom будет меняться как у а так и у b 
b.classsroom.teacher.name = 'ggg';
console.log(a); //teacher.name = ggg

//глубокая копия
const b ={...a};
b.classsroom={...a.classsroom};
b.classsroom.teacher={...a.classsroom.teacher};
b.students=[...a.students]

b.classsroom.teacher.name = 'Yyyy';