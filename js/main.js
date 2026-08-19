$(function() {

   
var estado=1;
var vol=1;
	$("#fondo").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
     $("#llanta1").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            rodar: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
	  $("#llanta2").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            rodar: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
	  $("#llanta3").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            rodar: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
	  $("#llanta4").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            rodar: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
	
    $("#luces").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    apaga:[0],
            prende: [1],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
        $("#gancho").animateSprite({
		fps: 12,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            levanta: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15],
            vuelve: [15,14,13,12,11,10,9,8,7,7,5,4,3,2,1,0],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

//------------------------
//- Programacion Botones -
//------------------------
    
	$("#b_stop").on("click",function(){
    	vol=0;
        $("#volque").animateSprite('stop');
            $("#luces").animateSprite('stop');
            $("#gancho").animateSprite('stop');
			$("#llanta1").animateSprite('stop');
			$("#llanta2").animateSprite('stop');
			$("#llanta3").animateSprite('stop');
			$("#llanta4").animateSprite('stop');
	
		
    });
//-------------
    $("#b_play").on("click",function(){
    	vol=1;
         $("#fondo").animateSprite('play', 'camina');
		 $("#llanta1").animateSprite('play', 'rodar');
		 $("#llanta2").animateSprite('play', 'rodar');
		 $("#llanta3").animateSprite('play', 'rodar');
		 $("#llanta4").animateSprite('play', 'rodar');
;
		
	});
       $("#b_luces").on("click",function(){
    	estado++;
           if(estado%2==0){
         $("#luces").animateSprite('play', 'prende');
           }
           else{
                $("#luces").animateSprite('play', 'apaga');
           }
		
	});
;
    
       $("#b_platon1").on("click",function(){
          
            $("#gancho").animateSprite('play', 'levanta');
           
           	});
      $("#b_platon2").on("click",function(){
          
            $("#gancho").animateSprite('play', 'vuelve');
           
           	});
    
    $("#b_reinicia").on("click",function(){
    vol=0;
        $("#luces").animateSprite('play', 'apaga');
        $("#fondo").animateSprite('play', 'inicio');
        $("#gancho").animateSprite('play', 'inicio');
    });
//-------------	



});