n=5
var num=""
for(i=-(n+1);i<=n+1;i++){
    for(j=-(n+1);j<=(n+1);j++){
        if(Math.abs(j)==n+1){
            num += "| "
        }
        else if(Math.abs(i)==n+1){
            num += "= "
        }
        else if(i==0 && j==0){
            num += "X "
        }
        else if(i-j==0){
            num += "\\ "
        }
        else if(Math.abs(i)-Math.abs(j)==0){
            num += "/ "
        }
        else if(i==0 || j==0){
            num += "0 "
        }
        else if(Math.abs(i)-Math.abs(j)>=0 && (i>0 && j>0 || i<0 && j<0)){
            num += Math.abs(j)+" "
        }
        else if(Math.abs(i)-Math.abs(j)<=0 && (i<0 && j>0 || i>0 && j<0)){
            num+=n-Math.abs(j)+1+" "
        }
        else if(Math.abs(i)-Math.abs(j)<=0){
            num+=String.fromCharCode(n-Math.abs(j)+98)+" "
        }
        else{
            num += String.fromCharCode(Math.abs(j)+97)+" "
        }
    }
    num += "\n"
}
console.log(num);