//your parameter variables go here!
let DH = 50;
let circle1 = 20;
let circle2 = 40;
let circle3 = 60;
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(215, 116, 0); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  circle(DH,DH,circle3);
  circle(DH,DH,circle2);
  circle(DH,DH,circle1);
  circle(DH,DH*3,circle3);
  circle(DH,DH*3,circle2);
  circle(DH,DH*3,circle1); // vertical circles
  circle(DH+100,DH,circle3);
  circle(DH+100,DH,circle2);
  circle(DH+100,DH,circle1);
  circle(DH+100,DH*3,circle3);
  circle(DH+100,DH*3,circle2);
  circle(DH+100,DH*3,circle1);

  circle(DH*0+100,DH*2,circle3);
  circle(DH*0+100,DH*2,circle2);
  circle(DH*0+100,DH*2,circle1);
  circle(DH*2+100,DH*2,circle3);
  circle(DH*2+100,DH*2,circle2);
  circle(DH*2+100,DH*2,circle1); // horizontal circles
  circle(DH*0,DH*2,circle3);
  circle(DH*0,DH*2,circle2);
  circle(DH*0,DH*2,circle1);
  

  quad(DH,DH,DH*2,DH*2,DH,DH*3,DH*0,DH*2); // diamond1
  quad(DH+100,DH,DH*2+100,DH*2,DH+100,DH*3,DH*0+100,DH*2); //diamond2
  quad(DH*2,DH*3,DH*3,DH*4,DH*2,DH*5,DH,DH*4)
  quad(DH*2,DH,DH,DH*0,DH*2,DH*-1,DH*3,DH*0)
}
