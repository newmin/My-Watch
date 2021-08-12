function clock(){
  //현재 시간 구하기
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // console.log(`${h} : ${m} : ${s}`)
  
  //시간단위별 10의 자리, 1의 자리 나누기
  const $10h = Math.floor(h/10);
  const $1h = h%10;

  const $10m = Math.floor(m/10);
  const $1m = m%10;
  
  const $10s = Math.floor(s/10);
  const $1s = s%10;

  // console.log(`${$10h}${$1h} : ${$10m}${$1m} : ${$10s}${$1s}`)



  //해당 자리 숫자따라 불들어오기
  // document.querySelectorAll(`.${$10h}`).forEach.classList.add("on");
  document.querySelectorAll('.bar').forEach(ele=>{
    ele.classList.remove('on')
  });

  if(`$10h == const i`){
    document.querySelectorAll(`.${i}`).forEach(ele=>{
      ele.classList.add('on')
     });
  
  }
  
}
clock();
setInterval(clock,1000);