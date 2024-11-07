{
 //
    // constraints     ----> jokhon nirdishto no property ke mandatory korar need hoy tokhon ata use hoy: 

    const addCourseToStudent = <T extends {id: number, name: string, email: string}> (student : T) =>{
        const course = 'web development'
        return {
            ...student,
            course
        }
    };



    const student1 = addCourseToStudent({
        name : 'mahfuz',
        id: 222,
        email: 'a@'
    })

    const student2 = addCourseToStudent({
        name : 'abu',
        id: 855,
        email: 'b@',
        isMarried : true
    })


 //
}