function start(){
    document.getElementById('card').classList.add("hidden");
    document.getElementById('game').classList.remove("hidden");
}
function punch(handId) {
  const hand = document.getElementById(handId);
  let direction;
  if(handId==='left-hand' || handId==='right-hand'){
    direction='translate-x-6';
  }
  else{
    direction='-translate-x-6';
  }
  hand.classList.add(direction);
  setTimeout(()=>{
    hand.classList.remove(direction);
  },200);
}