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
    time = time + 1;
    document.getElementById('time').innerHTML = time;
    setTimeout(count_up,100);
  }
  else{
    keep_counting = true;
    document.getElementById('start_button').disabled = false;
  }
}

var start = function(){
  document.getElementById('start_button').disabled = true;

  count_up();
}

var keep_counting = true;

var stop = function(){
  keep_counting = false;
}

var reset = function(){
  time = 0;
  document.getElementById('time').innerHTML = time;
}

//////////////////////////////////////////////////////

//var hero = document.getElementById('hero'); //&replace below to save processing power and for the clean code
var left = 0;
var step_num = 1;
var step_sound = new Audio('203041__jjhouse4__boots-and-spurs_step.mp3');
step_sound.volumne = .5;
var message_box = document.getElementById('message_box');
var move_hero = function(){

 

  left = left + 20;
  if(left >= 130) {

    message_box.innerHTML = "The door is locked, but it's very old and rotten, try to break it.";

    message_box.style.display = '';

    hero.src = 'images/hero_walking_1.png';
    return;
  }

  if(step_num > 8){
    step_num = 1;
  }
  if(step_num == 1 || step_num == 5){

    step_sound.currentTime = 0;

    step_sound.play();
  }

  document.getElementById('hero').style.left = left + 'px';
  document.getElementById('hero').src = 'images/hero_walking_'+step_num+'.png';
  step_num = step_num + 1;
  setTimeout(move_hero, 100);
}

var start_moving = function() {

   message_box.style.display = 'none';

   move_hero();
}
