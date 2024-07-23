 

 function grade(homework: number,midtaem: number,final: number){
    let score: number = homework + midtaem +final
     if(score < 50){
        return 'เกรด f'
     } else if (score < 60) {
        return 'เกรด d'
     } else if (score < 70) {
       return 'เกรด c'
     } else if (score < 80) {
       return 'เกรด b'
     } else if (score < 100) {
        return 'เกรด a'
     }
 }

console.log(grade(30,20,30))