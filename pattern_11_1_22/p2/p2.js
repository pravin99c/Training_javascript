var n=5;
var num="";
for(i=-n;i<=n;i++){
    if(i==0){
        continue;
    }
    for(j=-n;j<=n;j++){
        if(j==0){
            continue;
        }
        if(j<0 && i<0 && Math.abs(i)+Math.abs(j)<=n+1 || i>0 && j>0 && Math.abs(i)+Math.abs(j)<=n+1){
            num+="*"
        }
        else{
            num+=" "
        }
       
    }
    num+="\n";
}
console.log(num)



// for(i=0;i<=n;i++){
//     for(j=0;j<n;j++){
//         if(i+j<=n-1){
//             num+=" ";
//         }
//         else{
//             num+="0";
//         }
//     }
//     num+="\n"
// }
// for(i=0;i<=n;i++){
//     for(j=0;j<=n+n;j++){
//         if(i+j<=n*2-1 && j>=n){
//             num+="0"
//         }
//         else{
//             num+=" "
//         }
//     }
//     num+="\n"
// }
// console.log(num)