var arr = ['다', '가', '나'];

arr.sort((a,b)=>{
  if (a>b) {
    return 1;
  } else if (a<b) {
    return -1;
  }
})
console.log(arr)
