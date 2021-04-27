let student = {
    name: 'sarah',
    major: 'Cs',
    'Grad year':'2022',
    greeting:function(){console.log('Hello!');},
    'Favorite Teacher':{
        name:'Thomas Powell',
        course:'CSE 110'
    },
    courseLoad:['CSE110','CSE134','VIS 41']
};
// student.greeting()
// console.log(student.courseLoad[0])
// console.log(student.name)
// console.log(student['Grad year'])
// student.greeting()
console.log(student['courseLoad'][0])