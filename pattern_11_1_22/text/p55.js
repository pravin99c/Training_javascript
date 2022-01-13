n=5
str=""
for(i=-(n+1);i<=(n+1);i++)
{
    for(j=-(n+1);j<=(n+1);j++){
        if(Math.abs(i)>=n+1 || Math.abs(j)>=n+1){
            str+="0 "
        }
        else if(Math.abs(i)-Math.abs(j)>=0){
            if(i<0 && j>0 || i>0 && j<0){
                str+=Math.abs(i)-Math.abs(j)+1+" "
            }
            else{
                str+=String.fromCharCode((Math.abs(i)-Math.abs(j)+97))+" "
            }
        }
        else{
            str+="  "
        }
    }
    str+="\n"
}
console.log(str)





















// var n=5;
// var num="";
// for(i=-n;i<=n;i++){
//     if(i==0){
//         continue;
//     }
//     for(j=-n;j<=n;j++){
//         if(j==0){
//             continue;
//         }
//         if(Math.abs(i)+Math.abs(j)<=n+1){
//             num+="*"
//         }
//         else{
//             num+=" "
//         }
       
//     }
//     num+="\n";
// }
// console.log(num)