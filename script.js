var d,h,m,s, animate;

function init() {
  d=new Date();
  h=d.getHours();
  m=d.getMinutes();
  s=d.getSeconds();
  clock();
};

function clock() {
  s++;
  if(s==60){
    s=0;
    m++;
    if(m==60){
      m=0;
      h++;
      if(h==24){
        h=0;
      }
    }
  }
  $('sec',s);
  $('min',m);
  $('hr', h);
  animate=setTimeout(clock, 1000);
};

function $(id,val) {
  if(val<10) {
    val='0'+val;
  }
  document.getElementById(id).innerHTML=val;
};

window.onload=init;

//////////////////////////////////////////////////////////

var tell_fortune = function(){
  var random_number = Math.random() * 2;

  random_number = Math.round(random_number);
  console.log(random_number);

  var answer = '';

  if(random_number == 2) {
    answer = 'YES!';
  }
  else if (random_number == 1) {
    answer = 'MAYBE..';
  }
  else {
    answer = 'NO!';
  }

  document.getElementById('answer').innerHTML = answer;
}
///////////////////////////////////////////////////////////

var time = 0;

var count_up = function(){

  if(keep_counting ==true){
    document.getElementById('start_button').disabled = true;
    time = time + 1;

    document.getElementById('time').innerHTML = time;

    setTimeout(count_up,100);
  }
  else{
    keep_counting = true;
    document.getElementById('start_button').disabled = false;
  }
}

var keep_counting = true;

var stop = function(){
  keep_counting = false;
}
