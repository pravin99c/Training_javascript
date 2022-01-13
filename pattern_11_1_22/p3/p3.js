var n=5
var string=""

for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i==j){
            if(i+j==n-1){
                string+="0"
            }
            else{
                string+="\\"
            }
        }
        else if(i+j==n-1){
            string+="/"
        }
        else if(i+j==i || i+j>=n && j==(n-1)){
            string+="|"
        }
        else if(i+j==j || i+j>=n && i==(n-1)){
            string+="-"
        }
        else{
            string+=" "
        }
    }
    string+="\n"
}
console.log(string)