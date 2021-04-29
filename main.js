var canvas = new fabric.Canvas('myCanvas');
 player_x = 10;
  player_y = 10;
   block_image_width = 30;
  block_image_height = 30;
   var player_object= "";
   var block_image_object= "";
   function player_update()
         { 
       fabric.Image.fromURL("player.png", function(Img)
    {
         player_object = Img;
          player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
          player_object.set(
              {
                   top:player_y,
             left:player_x 
            });
           canvas.add(player_object);
         });
         }
         function new_image(get_image) 
         {
              fabric.Image.fromURL(get_image, function(Img)
               {
                    block_image_object = Img;
                     block_image_object.scaleToWidth(block_image_width);
                      block_image_object.scaleToHeight(block_image_height);
                       block_image_object.set({
                            top:player_y,
                             left:player_x
                        });
                        canvas.add(block_image_object);
                     });
                     }
             window.addEventListener("keydown", my_keydown);
              function my_keydown(e) 
              {
                   keyPressed = e.keyCode;
                 console.log(keyPressed);
 if(e.shiftKey == true && keyPressed == '80')
{
     console.log("p and shift pressed together");
     block_image_width = block_image_width + 50;
     block_image_height = block_image_height + 50;
     document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;
     }
     if(e.shiftKey && keyPressed == '77')
      {
           console.log("m and shift pressed together");
            block_image_width = block_image_width - 50;
             block_image_height = block_image_height - 50;
     document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;
         }
         if(keyPressed == '1')
          {
               up();
                console.log("up");
         } 
         if(keyPressed == '2')
          { down();
             console.log("down");
             } 
             if(keyPressed == '3')
              { left();
                 console.log("left");
                 }
                  if(keyPressed == '4')
                  {
                       right(); 
                       console.log("right");
                     } 
                     if(keyPressed == '11')
                      { new_image('captain_america_left_hand.png');
                       console.log("q");
                     } 
                     if(keyPressed == '12')
                      { new_image('hulk_face.png');
                       console.log("w");
                     } if(keyPressed == '13')
                      {
                           new_image('hulk_left_hand.png');
                            console.log("e");
                         } 
                         if(keyPressed == '14')
                          {
                               new_image('hulk_legs.png');
                                console.log("r");
                             }
                              if(keyPressed == '15')
                              {
                                   new_image('hulk_right_hand.png');
                                    console.log("t");
                                 }
                                  if(keyPressed == '16')
                                   {
                                        new_image('hulkd_body.png');
                                         console.log("y");
                                         }
                                          if(keyPressed == '17')
                                           {
                                                new_image('ironman_body.png');
                                                 console.log("u");
                                                 }
                                                  if(keyPressed == '18')
                                                   {
                                                        new_image('ironman_face.png');
                                                         console.log("i");
                                                         }
                                                          if(keyPressed == '19')
                                                           {
                                                                new_image('ironman_left_hand.png');
                                                                 console.log("o");
                                                                 } 
                                                                 if(keyPressed == '21')
                                                           {
                                                                new_image('spiderman_body.png');
                                                                 console.log("p");
                                                                 } 
                                                                 if(keyPressed == '22')
                                                                 {
                                                                      new_image('spiderman_face.png');
                                                                       console.log("a");
                                                                       } 
                                                                       if(keyPressed == '23')
                                                                       {
                                                                            new_image('spiderman_left_hand.png');
                                                                             console.log("s");
                                                                             } 
                                                                             if(keyPressed == '25')
                                                                             {
                                                                                  new_image('spiderman_legs.png');
                                                                                   console.log("d");
                                                                                   } 
                                                                                   if(keyPressed == '26')
                                                                                   {
                                                                                        new_image('spiderman_right_hand.png');
                                                                                         console.log("f");
                                                                                         } 
                                                                                         if(keyPressed == '27')
                                                                                         {
                                                                                              new_image('thor_face.png');
                                                                                               console.log("g");
                                                                                               } 
                                                                                               if(keyPressed == '28')
                                                                                               {
                                                                                                    new_image('thor_left_hand.png');
                                                                                                     console.log("h");
                                                                                                     } 
                                                                                                     if(keyPressed == '29')
                                                                                                     {
                                                                                                          new_image('thor_right_hand.png');
                                                                                                           console.log("j");
                                                                                                           } 
                                                                                                           if(keyPressed == '30')
                                                                                                           {
                                                                                                                new_image('Final_output.png');
                                                                                                                 console.log("k");
                                                                                                                 } 
                                                                 }                                                                