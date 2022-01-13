var n=5
var num="";
/*
*/
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i+j<n-1){
            num+=" ";
        }
        else{
            num+="*"
        }
    }
    num+="\n"
}
console.log(num)

/*
    2
        *
       **
      ***
     ****
    *****


*/
// for(i=n;i>0;i--){               
//     for(j=0;j<n;j++){
//         if(i<=j+1){
//             num+="*"
//         }
//         else{
//             num+=" "
//         }
//     }
//     num+="\n"
// }
// console.log(num)

// 3
// for(i=n;i>0;i--){
//     for(j=0;j<i;j++){
//         if(j>=i){
//             num+=" "
//         }
//         else{
//             num+="*"
//         }
//     }
//     num+="\n"
// }
// console.log(num)

/*
*****
****
***
**
*

*/
