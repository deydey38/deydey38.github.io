$(document).ready(function(){

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
