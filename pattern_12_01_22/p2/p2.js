n=5
var num=""
for(i=-(n+1);i<=n+1;i++){
    for(j=-(n+1);j<=(n+1);j++){
        if(Math.abs(j)==n+1 || i==0 && j==0){
            num += "o "
        }
        else if(Math.abs(i)==n+1){
            num += "0 "
        }
        else if(Math.abs(i)-Math.abs(j)>=0 && (i>0 && j>0 || i<0 && j<0)){
            num += Math.abs(j)+" "
        }
        else if(Math.abs(i)-Math.abs(j)<=0 && (i<0 && j>0 || i>0 && j<0)){
            num+= n-Math.abs(j)+1+" "
        }
        else{
            num += "  "
        }
    }
    num += "\n"
}
console.log(num);