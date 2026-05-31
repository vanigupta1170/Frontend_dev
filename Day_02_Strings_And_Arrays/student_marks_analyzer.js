let marks=[80,67,99,78,45];
let totalMarks=0;
for(let i=0;i<marks.length;i++){
    totalMarks+=marks[i];
}
let avg_marks=totalMarks/marks.length;
let highest_marks=Math.max(...marks);
let lowest_marks=Math.min(...marks);
console.log("Total Marks: "+totalMarks);
console.log("Average Marks: "+avg_marks);
console.log("Highest Marks: "+highest_marks);
console.log("Lowest Marks: "+lowest_marks);
