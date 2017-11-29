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
    $("#counterterror_gfx").hover(function(){
        $(this).attr("src", "images/nuke_rad_symbol_icon_gold_glow.png");
        $("#counterterror_txt").attr("src", "images/counterterror_prolif_head_gold.png");
    },
        function() {
            $(this).attr("src", "images/nuke_rad_symbol_icon_white_glow.png");
            $("#counterterror_txt").attr("src", "images/counterterror_prolif_head.png");
        });
    
    //CounterTerror Text
    $("#counterterror_txt").hover(function(){
        $(this).attr("src", "images/counterterror_prolif_head_gold.png");
        $("#counterterror_gfx").attr("src", "images/nuke_rad_symbol_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/counterterror_prolif_head.png");
            $("#counterterror_gfx").attr("src", "images/nuke_rad_symbol_icon_white_glow.png");
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
        $("#arms_control_gfx").attr("src", "images/satellite_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/nonprolif_arms_head.png");
            $("#arms_control_gfx").attr("src", "images/satellite_icon_white_glow.png");
        });
    
    ///////////////////////////////////////////////
    /////Nuke Infra Mod////////////////////////////
    ///////////////////////////////////////////////
    //Nuke Infra Mod Graphics
    $("#nuc_inf_gfx").hover(function(){
        $(this).attr("src", "images/buildings_icon_gold_glow.png");
        $("#nuc_inf_txt").attr("src", "images/nuke_infra_mod_head_gold.png");
    },
        function() {
            $(this).attr("src", "images/buildings_icon_white_glow.png");
            $("#nuc_inf_txt").attr("src", "images/nuke_infra_mod_head.png");
        });
    
    //Nuke Infra Mod Text
    $("#nuc_inf_txt").hover(function(){
        $(this).attr("src", "images/nuke_infra_mod_head_gold.png");
        $("#nuc_inf_gfx").attr("src", "images/buildings_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/nuke_infra_mod_head.png");
            $("#nuc_inf_gfx").attr("src", "images/buildings_icon_white_glow.png");
        });
    
    ///////////////////////////////////////////////
    /////Deterrence////////////////////////////////
    ///////////////////////////////////////////////
    //Deterrence Graphics
    $("#deterrence_gfx").hover(function(){
        $(this).attr("src", "images/deterrence_icon_gold_glow.png");
        $("#deterrence_txt").attr("src", "images/deterrence_head_gold.png");
    },
        function() {
            $(this).attr("src", "images/deterrence_icon_white_glow.png");
            $("#deterrence_txt").attr("src", "images/deterrence_head.png");
        });
    
    //Deterrence Text
    $("#deterrence_txt").hover(function(){
        $(this).attr("src", "images/deterrence_head_gold.png");
        $("#deterrence_gfx").attr("src", "images/deterrence_icon_gold_glow.png");
    },
        function() {
            $(this).attr("src", "images/deterrence_head.png");
            $("#deterrence_gfx").attr("src", "images/deterrence_icon_white_glow.png");
        });
    
    
    ////////////////////////////////////////////////////Click functions/////////////////////////
    //Nuclear Weapons
    $("#nuc_wea_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_wea_view").slideToggle(400);
        }); 
    });
    
    $("#nuc_wea_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_wea_view").slideToggle(400);
        }); 
    });
    
    //Counterterrorism
    $("#counterterror_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#counterterror_view").slideToggle(400);
        }); 
    });
    
    $("#counterterror_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#counterterror_view").slideToggle(400);
        }); 
    });
    
    //Arms Control
    $("#arms_control_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#arms_control_view").slideToggle(400);
        }); 
    });
    
    $("#arms_control_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#arm_control_view").slideToggle(400);
        }); 
    });
    
    //Nuke Infra Mod
    $("#nuc_inf_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_inf_view").slideToggle(400);
        }); 
    });
    
    $("#nuc_inf_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#nuc_inf_view").slideToggle(400);
        }); 
    });
    
    //Nuke Infra Mod
    $("#deterrence_gfx").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#deterrence_view").slideToggle(400);
        }); 
    });
    
    $("#deterrence_txt").click(function(){
        $("#overlay_container").fadeToggle(500, function() {
            $("#deterrence_view").slideToggle(400);
        }); 
    });
    
    
    /////////////Close the Overlay////////////////
    //Close Overlay
    $("#overlay_close").click(function() {
       $("#overlay_container").fadeToggle(500, function() {
            $(".open_view").hide();
       }); 
    });
    
    $("#overlay_button_close").click(function() {
       $("#overlay_container").fadeToggle(500, function() {
            $(".open_view").hide();
       }); 
    });
    
    
    //Test functions
    
});
