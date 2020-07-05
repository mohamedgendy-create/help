$(document).ready(function(){
    var ele=$(".ff"),
        scrolling,
        divofset;
  
    $(window).on("scroll",function()
     {
         scrolling=$(window).scrollTop();
         divofset=$(".hello").offset().top;
         console.log(divofset);
         console.log(scrolling);
         if(scrolling>=divofset)
         {
             $(".hello").fadeOut();
         }
        
     }
    );
    $("#gg").one("click",function(){
        $(".copy").clone().appendTo("body");
    })
    $("#remove").on("click",function()
    {
        $(".ff").detach(".ff");
    }
    );
    $("#add").on("click",function()
    {
        var ss=$("body").find(".copy");
       
      
        $(ss).after(ele);
    }
    );
    $(".ff").on("click",function()
    {
        $(".ff").css({color:"#F00"});
    }
    );
   $(".inpu").on("click",function()
   {
       $("input").prop({disabled:"true",name:"myfield"});
   }
   );
   $("body").on("click",".mohamed",function()
   {
       $(".mohamed").replaceWith("<input type='text' class='xx' value='"+ $(this).text()+"'>");
       $(".change").fadeIn();
   }
   );
   $("body").on("click",".change",function()
   {
       $(".xx").replaceWith("<div> "+$('.xx').val() +"</div>");
       $(".change").fadeOut();
   }
   );
   $(".custom").on("myCustom",function(e ,name,pp)
   {
       $(this).height(name).width(pp)

 
   }
   );
   $(".love").on("click",function()
   {
       $(".custom").trigger("myCustom",["200px","300px"]);
   });
    
   
});


