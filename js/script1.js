$(function(){
  console.log('f');
  var skills = _.chain(data)
              .map("skills")
              .flatMap()
              .sortBy(function (i) {
                 return i.toLowerCase()
                })
              .union()
              .value();

skills.forEach(function(item){
  $(".skills").append("<span >" + item +"</span> ")
});
var name =_.chain(obj)

            .sortBy('friends')
            .value();

name.forEach(function(item){
  $(".name_friends").append("<span >" + item.name + "(" + item.friends.length + ")" +"</span> ")
});

var friends =_.chain(obj)
                .map("friends")
                .flatMap()
                .map("name")
                .union()
                .value();
friends.forEach(function(item){
  $(".name").append("<span >" + item +"</span> ")
});
var balance =_.chain(obj)
            .sortBy('balance')
            .value();

balance.forEach(function(item){
  $(".balance").append("<p>" + item.name + " - " +"<span >"+ item.balance + "</span> " +"</p >")
});

var registered =_.chain(obj)
            .sortBy('registered')
            .value();

registered.forEach(function(item){
  $(".registred").append("<p >" + item.name  + "<span>"+ "(" + item.registered + ")" +"</span>"  +"</p> ")
});

})
;

var str = JSON.stringify(data);
var obj = JSON.parse(str);


