const ang1 = 84;
const ang2 = 49;
const ang3 = 190;
if (ang1 < (ang2+ang3)& ang2 < (ang1 + ang3)& ang3 < (ang1 +ang2)) {
    console.log("true")
}else if (ang1<-1 || ang2 < -1 || ang3 < -1) {
    console.log("error")
}else{
    console.log("false")
}


