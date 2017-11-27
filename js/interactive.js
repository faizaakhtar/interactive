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
    //CounterTerror Graphics
    $("#counterterrorism_gfx").hover(function(){
        $(this).attr("src", "images/nuke_rad_symbol_icon_gold_glow.png");
        $("#counterterrorism_txt").attr("src", "images/counterterror_prolif_head_gold.png");
    },
        function() {
            $(this).attr("src", "images/nuke_rad_symbol_icon_white_glow.png");
            $("#counterterrorism_txt").attr("src", "images/counterterror_prolif_head.png");
        });
    
    //CounterTerror Text
    $("#counterterrorism_txt").hover(function(){
        $(this).attr("src", "images/counterterror_prolif_head_gold.png");
        $("#counterterrorism_gfx").attr("src", "images/nuke_rad_symbol_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/counterterror_prolif_head.png");
            $("#counterterrorism_gfx").attr("src", "images/nuke_rad_symbol_icon_white_glow.png");
        });
    
    ///////////////////////////////////////////////
    /////Arms Control//////////////////////////////
    ///////////////////////////////////////////////
    //Arms Control Graphics
    $("#arms_control_gfx").hover(function(){
        $(this).attr("src", "images/satellite_icon_gold_glow.png");
        $("#arms_control_txt").attr("src", "images/nonprolif_arms_head_gold.png");
    },
        function() {
            $(this).attr("src", "images/satellite_icon_white_glow.png");
            $("#arms_control_txt").attr("src", "images/nonprolif_arms_head.png");
        });
    
    //Arms Control Text
    $("#arms_control_txt").hover(function(){
        $(this).attr("src", "images/nonprolif_arms_head_gold.png");
        $("#arms_control_gfx").attr("src", "images/images/satellite_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/nonprolif_arms_head.png");
            $("#arms_control_gfx").attr("src", "images/satellite_icon_white_glow.png");
        });
    
    
    ////////////////////////////////////////////////////Click functions/////////////////////////
    //Nuclear Weapons
    $("#nuc_wea_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_wea_view").slideToggle(200);
        }); 
    });
    
    $("#nuc_wea_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_wea_view").slideToggle(200);
        }); 
    });
    
    //Counterterrorism
    $("#counterterrorism_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#counterterrorism_view").slideToggle(200);
        }); 
    });
    
    $("#counterterrorism_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#counterterrorism_view").slideToggle(200);
        }); 
    });
    
    //Arms Control
    $("#arms_control_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#arms_control_view").slideToggle(200);
        }); 
    });
    
    $("#arms_control_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#arm_control_view").slideToggle(200);
        }); 
    });
    
    
    /////////////Close the Overlay////////////////
    //Close Overlay
    $("#overlay_close").click(function() {
       $("#overlay_container").fadeToggle(500, function() {
            $(".open_view").hide();
       }); 
    });
    
    
    //Test functions
    
});
