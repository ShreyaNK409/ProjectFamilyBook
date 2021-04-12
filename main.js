image_array=["HNOJ3778.JPG","RJUN2071.JPG","EQHI1985.JPG","Shreya.JPG","RPOS6235.JPG","IMG_6714.JPG"];
names_array=["My Family","My Dad","My Mom","Me","My Sister","My Brother"];

var i=0;

function Next()
{
    document.getElementById("image").src=image_array[i];
  i++;
  if(i==6)
  {
    i=0;
  }
  document.getElementById("person name").src=names_array[i];
  i++;
  if(i==6)
  {
    i=0;
  }
}