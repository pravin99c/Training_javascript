var n=5
var num="";

for(i=0;i<n;i++){
    for(j=-n;j<n;j++){
        if(Math.abs(i)-Math.abs(j)>=0){
            num+=Math.abs(i)-Math.abs(j)+1
        }
        else{
            num+=" "
        }
    }
    num+="\n"
}
console.log(num)
