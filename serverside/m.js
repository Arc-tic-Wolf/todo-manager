const data=require("./data.json");
const fs=require("fs");
let sum=[];
let k=0;
let text=["complete physics lab","submit database project","conduct maths tuition","walk with mom","attend networking exam","help sister in hw"];
data.forEach((elem)=>{
    sum.push({"id":elem.id,"text":text[k++],"completed":false});
});
console.log(sum);

fs.writeFile("./data.json", JSON.stringify(sum), "utf8", (err) => {
    if (err) throw err;
    console.log("Complete");
  });