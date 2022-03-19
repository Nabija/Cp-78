
var images = ["https://m.media-amazon.com/images/M/MV5BODBjOTAzZmMtNGJkOC00M2M3LWI1MTctZjZlMzdiODBkMzc0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6ZCmr_h_Z8fTak6GeVUqokHEEOWVp0ch-RhYyHX-4x02Er23EfNnrlImx8cju9W4AGw&usqp=CAU", 
"https://static.wikia.nocookie.net/addamsfamily/images/3/36/The_Addams_Family_2019_Character_Posters_02.jpg/revision/latest/scale-to-width-down/250?cb=20190807181526", 
"https://www.google.com/url?sa=i&url=https%3A%2F%2Faddamsfamily.fandom.com%2Fwiki%2FThe_Addams_Family_(2019)&psig=AOvVaw0RcG8FP-3JcMEXM3zvdaM5&ust=1647768855526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCr-tHv0fYCFQAAAAAdAAAAABAm", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvzAQi0DXqYkg2nzkEtZz0iYZlnN6X6aHygTSMwp63hGNbheYacTdPEqa4vfrjYKFl4k&usqp=CAU", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QeOikwfR1vfWKEmGAskNPPof5MQpuNw4Ys7UC-PsgEmfxGq0IeFmVe4KPZy259UzxCg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZ4bvCDl9lfsbKUTRnMuBoP0kx9kfrhxMAl8Uer22MndWIBGc7r-8QU7TRUik2MRoQP4&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCH_p9RHZE1JZYDVDChR73QiuK5QQHrnKk2CustE-MBcillu7hWY1NoqI2eR6XsafxZiY&usqp=CAU",
"",];
           
var names = ["Addam family","Gramma Addam", "Gomaz Addam", "Morticia Addam", "Uncle Fester Addam", "Wednesday Addam", "Pugsley Addam", "Cosin Hairy Addam", "Thing Addam", "Lurch"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 8
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
