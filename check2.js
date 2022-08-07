window.onload = function() {

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');


    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);
            }

            reader.readAsDataURL(file);	
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });

}

function checksize() {
    const grafika = document.getElementById('fileDisplayArea');
    const grafikawidth = grafika.scrollWidth;
    const grafikaheight = grafika.offsetHeight;
    const width300 = (grafikawidth/300)*2.54;
    const height300 = (grafikaheight/300)*2.54;
    const width150 = (grafikawidth/150)*2.54;
    const height150 = (grafikaheight/150)*2.54;
    const width75 = (grafikawidth/75)*2.54;
    const height75 = (grafikaheight/75)*2.54;
    document.getElementById('grafikawpx').innerHTML = grafikawidth;
    document.getElementById('grafikahpx').innerHTML = grafikaheight;
    document.getElementById('wynik300').innerHTML = width300 + " x " + height300;
    document.getElementById('wynik150').innerHTML = width150 + " x " + height150;
    document.getElementById('wynik75').innerHTML = width75 + " x " + height75;
  }
  