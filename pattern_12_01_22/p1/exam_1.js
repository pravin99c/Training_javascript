//Write a program to draw a pattern given below from 0-9 (odd).  (max 2 loop allowed)
// E.g. if n==3

var n = 5
var str = ""
for (i = 0; i <= n; i++) {
    if (n - i == 0) {
        str += "0 "
    }
    else {
        str += "  "
    }
}
console.log(str)
str = ""
for (k = 0; k < n - 1; k++) {
    for (i = 0; i <= n; i++) {
        if (i == 0) {
            continue
        }
        for (j = -n; j <= n; j++) {
            if (i + j == 0) {
                str += "/ "
            }
            else if (i - Math.abs(j) >= 1) {
                str += "- "
            }

            else if (i - Math.abs(j) == 0) {
                str += "\\ "
            }
            else {
                str += "  "
            }
        }
        str += "\n"
    }
}

for (i = 0; i <= n; i++) {
    for (j = -n; j <= n; j++) {
        if (Math.abs(j) == 0 || i == n) {
            str += "= "
        }
        else if (Math.abs(j) == 1) {
            str += "| "
        }
        else {
            str += "  "
        }
    }
    str += "\n"
}
console.log(str)

