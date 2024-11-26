const students = [
    { name: 'Alice', scores: [85, 90, 88] },
    { name: 'Bob', scores: [92, 95, 89] },
    { name: 'Charlie', scores: [90, 91, 87] },
    { name: 'David', scores: [87, 84, 92] },
    ];
    // Calculate average test score for each student
    const averageScores = students.map(student => {
    const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, averageScore: average };
    });
    // Filter students with average score above 90
    const above90 = averageScores.filter(student => student.averageScore > 90);
    console.log(above90);