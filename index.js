// let man = confirm(`هل المر امرك ؟`);
// if(man == true)
// {
//     let indexman = confirm(`لو كان فى شئ فى يدك`);
//     if(indexman == true){
//         console.log('هشتريلك جزيره ويخت فضى');
//     }
//         else{
//             console.log(`انت فقير يلا`);
//         }
//     }
// else{
//     console.log(`انت فقير يلا`);
// }

// let female =confirm(`انت لو كنت بتهتم ؟`)
// if(female==true){
//     let indexfemal =confirm(`انت لو عندك دم؟`)
//     if(indexfemal==true){
//         let femal1 =confirm(`انت لو بتحس ياعم `)
//         if(femal1==true){
//             console.log(`مصلحك`)
//         }
//         else{
//             console.log(`مخصماك`)
//         }
//     }
// }else{
//     console.log(`مخصماك`)
// }



// let ttt= 85;
// let rrr=3000;
// let man =+confirm(`لو معاك 85 جرام دهب`);
// if(man==true){
//     let man1 =confirm(`لو عدى عليهم سنه`);
//     if(man1==true){
//         let man2 =confirm(` طلع عليهم ذكاه `);
//         console.log(`طلع عليهم ذكاه${(3000*85) *0.025}`);
//     }
//     else{
//         console.log(`متطلعش حاجه`);
//     }
// }
// else{
//     console.log(`متطلعش حاجه`);
// }




// let man =+prompt(`اكتب مجموع نتيجتك`);
// if(man>=50){
//     console.log(`انت ناجح`);
// }else{
//     console.log(`انت ساقط`);
// }





// let man = +prompt(`اكتب مجموعك`);
// if ( man >= 50) {
//   if (man < 65) {
//     console.log(`ناجح و مقبول`);
//   } else {
//     if (man < 75) {
//       console.log(`تقديرك جيد`);
//     } else {
//       if (man < 85) {
//         console.log(`تقديرك جيد جدا`);
//       } else {
//         if (man < 100) {
//           console.log(`تقديرك ممتاز`);
//         } else {
//           console.log(`النتيجه غلط يا متخلف`);
//         }
//       }
//     }
//   }
// } else {
//   console.log(`انت ساقط`);
// }

// let precentage =+prompt(`ادخل مجموعك المئوى`) ;
// switch (precentage){
//     case (precentage < 50):
//       return"ساقط";
//     case (precentage >= 50 && precentage < 65):
//         return"مقبول";
//     case (precentage >= 65 && precentage < 75):
//         return"جيد";
//     case (precentage >= 75 && precentage < 85):
//         return" جيد جدا";
//     case (precentage >= 85 && precentage < 100):
//         return"ممتاز";break;
//     default:
//         return'التقدير غير صحيح';break;
//     }


let percentage = +prompt("ادخل مجموعك المئوي");
let grade;

switch (true) {
    case (percentage < 50):
        grade = "ساقط";
        break;
    case (percentage >= 50 && percentage < 65):
        grade = "مقبول";
        break;
    case (percentage >= 65 && percentage < 75):
        grade = "جيد";
        break;
    case (percentage >= 75 && percentage < 85):
        grade = "جيد جدا";
        break;
    case (percentage >= 85 && percentage <= 100):
        grade = "ممتاز";
        break;
    case (percentage > 100 && percentage > 0):  
        grade='هذا المجموع غير صحيح';
        break;  
    default:
        grade = "التقدير غير صحيح";
        break;
}

alert(grade);