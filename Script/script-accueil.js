$(document).ready(function(){
  $("img").delay(500).fadeTo("slow",1);
  $(".jumbotron h1").delay(2000).fadeTo("fast",1);
  $("img").delay(4000).fadeTo("slow",0);
  $(".jumbotron h2").delay(4000).fadeTo("fast", 1);
  $("html body").delay(6500).animate({ backgroundColor: "#f4f4f4" }, 1000);
  $(".container").delay(7300).fadeTo("Slow", 1);
  $("#personnages").delay(7500).fadeIn(500);
  $("#planetes").delay(7300).fadeIn(500);
  $("#vaisseaux").delay(7700).fadeIn(500);


  $(".c").hover(function(){
  	$(this).find(".o").fadeTo("fast", 1);
    $(this).first("div").css("transform", "scale(1.05)");
    $(this).find("div").first().css("box-shadow", "0px 6px 30px 0px teal");

    var text = $(this).text();
    var perso = "Personnages";
    var planetes = "Planètes";
    var vaisseaux = "Vaisseaux";
    text= $.trim(text);
    //console.log(text);
    if(text==perso){
      $(".personnages-desc").show();
      $(".personnages-desc").fadeTo("fast", 1);
    }else if (text==planetes) {
      $(".planetes-desc").show();
      $(".planetes-desc").fadeTo("fast", 1);
    }else {
      $(".vaisseaux-desc").show();
      $(".vaisseaux-desc").fadeTo("fast", 1);
    }

  },
  function(){
    $(this).find(".o").fadeTo("fast", 0);
    $(this).first("div").css("transform", "scale(1)");
    $(this).find("div").first().css("box-shadow", "none");

    var text = $(this).text();
    var perso = "Personnages";
    var planetes = "Planètes";
    var vaisseaux = "Vaisseaux";
    text= $.trim(text);
    //console.log(text);
    if(text==perso){
      $(".personnages-desc").fadeTo("fast", "0");
      $(".personnages-desc").css("display", "none");
    }else if (text==planetes) {
      $(".planetes-desc").fadeTo("fast", "0");
      $(".planetes-desc").css("display", "none");
    }else {
      $(".vaisseaux-desc").fadeTo("fast", "0");
      $(".vaisseaux-desc").css("display", "none");
    }
    });

  $(".navbar-brand").hover(function(){
    $(this).css("color", "teal");
  },
  function(){
      $(this).css("color", "white");
  });

});
