$(document).ready(function () {
    
    
    ////////////////////////////////////////////////Hover functions/////////////////////////////////////////
    ///////////////////////////////////////
    /////Nuclear Weapons///////////////////
    ///////////////////////////////////////
    //Nuclear Weapons Graphic
    $("#nuc_wea_gfx").hover(function(){
        $(this).attr("src", "images/b61_icon_gold_glow.png");
        $("#nuc_wea_txt").attr("src", "images/nuclear_weapons_head_gold.png");
    },
        function() {
            $(this).attr("src", "images/b61_icon_white_glow.png");
            $("#nuc_wea_txt").attr("src", "images/nuclear_weapons_head.png");
        });
    
    //Nuclear Weapons Text
    $("#nuc_wea_txt").hover(function(){
        $(this).attr("src", "images/nuclear_weapons_head_gold.png");
        $("#nuc_wea_gfx").attr("src", "images/b61_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/nuclear_weapons_head.png");
            $("#nuc_wea_gfx").attr("src", "images/b61_icon_white_glow.png");
        });
    
    ///////////////////////////////////////////////
    /////Counterterrorism//////////////////////////
    ///////////////////////////////////////////////
    //
    
    
    //Click functions
    //Nuclear Weapons Graphic
    $("#nuc_wea_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_wea_view").slideToggle(200);
        });
        
    });
    
    //Close Overlay
    $("#overlay_close").click(function() {
       $("#overlay_container").fadeToggle(500, function() {
            $(".open_view").hide();
       }); 
    });
    
    
    //Test functions
    
});
