// parameter variables 
let DH = 50; // parameter to code coordinates and diamond dimentions 
let circle1 = 20; // diameter of smallest circle
let circle2 = 40; // diameter of middle circle
let circle3 = 60; // diameter of largest circle
let arch = 90; // degrees for arcs 
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(94,56,89); // warm purple
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (circle3 == 60) {  // if statement to code circle colors
    strokeWeight(1); // thin border
    stroke(255,174,147); // peach
    fill(210,73,51); // burnt orange
  }
  if (circle3 == 50) {
    strokeWeight(3); //Slightly thicker border
    stroke(137,199,188); //aqua blue 
    fill(213,233,251); // light blue 
  }
 
  // vertical circles
  circle(DH,DH,circle3); // top left outer circle
  circle(DH,DH,circle2); // top left middle circle
  circle(DH,DH,circle1); // top left inner circle
  circle(DH,DH*3,circle3); // bottom left outer circle
  circle(DH,DH*3,circle2); // bottom left middle circle
  circle(DH,DH*3,circle1); // bottom left inner circle
  circle(DH*3,DH,circle3); // top right outer circle
  circle(DH*3,DH,circle2); // top right middle circle
  circle(DH*3,DH,circle1); // top right inner circle
  circle(DH*3,DH*3,circle3); // bottom right outer circle
  circle(DH*3,DH*3,circle2); // bottom right middle circle
  circle(DH*3,DH*3,circle1); // bottom right inner circle
 // horizontal circles
  circle(DH*2,DH*2,circle3);// center outer circle
  circle(DH*2,DH*2,circle2); // center middle circle
  circle(DH*2,DH*2,circle1); // center inner circle
  arc(DH*4,DH*2,circle3,circle3,arch,-arch); // far right outer half circle
  arc(DH*4,DH*2,circle2,circle2,arch,-arch); // far right middle half circle
  arc(DH*4,DH*2,circle1,circle1,arch,-arch); // far right inner half circle
  arc(DH*0,DH*2,circle3,circle3,-arch,arch); // far left outer half circle
  arc(DH*0,DH*2,circle2,circle2,-arch,arch); // far left middle half circle
  arc(DH*0,DH*2,circle1,circle1,-arch,arch); // far left inner half circle
 // corner quarter circles
  stroke(210,73,51) // burnt orange 
  strokeWeight(10) // thicker border
  fill(255,174,147) // peach
  arc(DH*0,DH*0,circle2,circle2,arch*0,arch); // top left arc
  arc(DH*4,DH*0,circle2,circle2,arch,arch*2); // top right arc
  arc(DH*4,DH*4,circle2,circle2,arch*2,arch*3); // bottom right arc
  arc(DH*0,DH*4,circle2,circle2,arch*3,arch*0); // bottom left arc
 // diamonds 
  if (DH == 40) {
    strokeWeight(1); // thin border
    stroke(179,66,51); // light muted red
    fill(117,26,53); // deeper muted red
  }
  if (DH == 50) {
  stroke(100,97,153); // warm light blue
  strokeWeight(3); // medium border
  fill(53,39,83); // warm dark blue
  } 
  quad(DH,DH,DH*2,DH*2,DH,DH*3,DH*0,DH*2); // left diamond
  quad(DH*3,DH,DH*4,DH*2,DH*3,DH*3,DH*2,DH*2); // right diamond
  quad(DH*2,DH*3,DH*3,DH*4,DH*2,DH*5,DH,DH*4); // bottom diamond
  quad(DH*2,DH,DH,DH*0,DH*2,DH*-1,DH*3,DH*0); // top diamond 
}
