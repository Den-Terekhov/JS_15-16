$(function() {
"use strict";

  $('#search').on('click', function(e){
    $('.result').remove();
    var userQuery = $('#query').val();
    e.preventDefault();
    getjson(userQuery);
  });
  
  function getjson(userQuery) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        var replyObj = JSON.parse(xhr.responseText);
        var searchResults = replyObj.items;
        // console.log(searchResults);
        var html = $('#myTemplate').html();
        var content = tmpl(html, {
          data: searchResults
        });
        $('.search_results').append(content);    
      };
    }; 

    xhr.open("GET", 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCcbNUrrJd1EZh_pMcIzuZxWmOECKadLkM&cx=001788281110807612976:uq-c91ux4du&q=' + userQuery, true);
    xhr.send();
  };
  
});

//Прототипы
function Human() {
  this.name = '';
  this.age = '';
  this.sex = '';
  this.height = '';
  this.weight = '';
};

function Worker() {
  this.placeOfWork = '';
  this.wage = '';
  this.work = function(){
    console.log('I work');
  }
};

Worker.prototype = new Human();

function Student() {
  this.placeOfStudy = '';
  this.scholarship = '';
  this.watchTv = function(){
    console.log('I am watching TV serial now!');
  }
};

Student.prototype = new Human();

var man = new Worker();
man.name = 'Adam';
man.age = 25;
man.sex = 'male';
man.height = 175;
man.weight = 70;
man.placeOfWork = 'Reuters';
man.wage = '3000 EUR';
console.log(man);
man.work();


var woman = new Student();
woman.name = 'Eva';
woman.age = 21;
woman.sex = 'female';
woman.height = 170;
woman.weight = 60;
woman.placeOfStudy = 'Oxford University';
woman.scholarship = '500 EUR';
console.log(woman);
woman.watchTv();