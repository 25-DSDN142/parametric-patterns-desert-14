//your parameter variables go here!
let DH = 50;
let circle1 = 20;
let circle2 = 40;
let circle3 = 60;
let arch = 90;
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(94,56,89); //burnt orange color
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (circle3 == 60) {
    strokeWeight(1);
    stroke(255,174,147);
    fill(210,73,51);
  }
  circle(DH,DH,circle3); // vertical circles
  circle(DH,DH,circle2);
  circle(DH,DH,circle1); 
  circle(DH,DH*3,circle3);
  circle(DH,DH*3,circle2);
  circle(DH,DH*3,circle1); 
  circle(DH*3,DH,circle3);
  circle(DH*3,DH,circle2);
  circle(DH*3,DH,circle1);
  circle(DH*3,DH*3,circle3);
  circle(DH*3,DH*3,circle2);
  circle(DH*3,DH*3,circle1);

  circle(DH*2,DH*2,circle3);// horizontal circles
  circle(DH*2,DH*2,circle2);
  circle(DH*2,DH*2,circle1);
  arc(DH*4,DH*2,circle3,circle3,arch,-arch); 
  arc(DH*4,DH*2,circle2,circle2,arch,-arch);
  arc(DH*4,DH*2,circle1,circle1,arch,-arch); 
  arc(DH*0,DH*2,circle3,circle3,-arch,arch); 
  arc(DH*0,DH*2,circle2,circle2,-arch,arch);
  arc(DH*0,DH*2,circle1,circle1,-arch,arch);

  stroke(210,73,51)
  strokeWeight(10)
  fill(255,174,147)
  arc(DH*0,DH*0,circle2,circle2,arch*0,arch);
  arc(DH*4,DH*0,circle2,circle2,arch,arch*2);
  arc(DH*4,DH*4,circle2,circle2,arch*2,arch*3);
  arc(DH*0,DH*4,circle2,circle2,arch*3,arch*0);
  
  stroke(100,97,153);
  strokeWeight(3);
  fill(53,39,83);
  quad(DH,DH,DH*2,DH*2,DH,DH*3,DH*0,DH*2); // left diamond
  quad(DH*3,DH,DH*4,DH*2,DH*3,DH*3,DH*2,DH*2); // right diamond
  quad(DH*2,DH*3,DH*3,DH*4,DH*2,DH*5,DH,DH*4); // bottom diamond
  quad(DH*2,DH,DH,DH*0,DH*2,DH*-1,DH*3,DH*0); // top diamond 
}
