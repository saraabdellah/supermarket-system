let students=[{name:"sarah", grade:85},
   {name:"aminah", grade:72}, {name:"Maryam", grade:98},
   {name:"Hana", grade:60}
 ];

 function analyzeStudents(students){
   let total=0;
   let count=0;
   for(let i=0;i<students.length;i++){
      if(students[i].grade>=50){
         count++;
      }
       total=total+students[i].grade;
   }
   return {passed:count,
      total:total}
   ;
  
 }
 let result=analyzeStudents(students);
 
 console.log("Passed: " + result.passed);
 console.log("Total: "+ result.total);

