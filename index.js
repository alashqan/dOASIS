function view_mumbai()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "block";
    document.getElementById('karnataka_map').style.display = "none";
    document.getElementById('mangalore').style.display = "none";
    document.getElementById('karwar').style.display = "none";
    document.getElementById('murdeshwar').style.display = "none";
    document.getElementById('adyar').style.display = "none";
    document.getElementById('karnataka_map_tiles').style.display = "none";
    document.getElementById('button').style.display = "none";
}

function view_karnataka()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "none";
    document.getElementById('karnataka_map').style.display = "block";
    document.getElementById('mangalore').style.display = "none";
    document.getElementById('karwar').style.display = "none";
    document.getElementById('murdeshwar').style.display = "none";
    document.getElementById('adyar').style.display = "none";
    document.getElementById('karnataka_map_tiles').style.display = "none";
}

function view_mangalore()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "none";
    document.getElementById('karnataka_map').style.display = "none";
    document.getElementById('mangalore').style.display = "block";
    document.getElementById('karwar').style.display = "none";
    document.getElementById('murdeshwar').style.display = "none";
    document.getElementById('adyar').style.display = "none";
    document.getElementById('karnataka_map_tiles').style.display = "none";
    document.getElementById('button').style.display = "none";
}

function view_karwar()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "none";
    document.getElementById('karnataka_map').style.display = "none";
    document.getElementById('mangalore').style.display = "none";
    document.getElementById('karwar').style.display = "block";
    document.getElementById('murdeshwar').style.display = "none";
    document.getElementById('adyar').style.display = "none";
    document.getElementById('karnataka_map_tiles').style.display = "none";
    document.getElementById('button').style.display = "none";
}

function view_murdeshwar()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "none";
    document.getElementById('karnataka_map').style.display = "none";
    document.getElementById('mangalore').style.display = "none";
    document.getElementById('karwar').style.display = "none";
    document.getElementById('murdeshwar').style.display = "block";
    document.getElementById('adyar').style.display = "none";
    document.getElementById('karnataka_map_tiles').style.display = "none";
    document.getElementById('button').style.display = "none";
}

function view_adyar()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "none";
    document.getElementById('karnataka_map').style.display = "none";
    document.getElementById('mangalore').style.display = "none";
    document.getElementById('karwar').style.display = "none";
    document.getElementById('murdeshwar').style.display = "none";
    document.getElementById('adyar').style.display = "block";
    document.getElementById('karnataka_map_tiles').style.display = "none";
    document.getElementById('button').style.display = "none";
}

function view_button()
{
    document.getElementById('button').style.display = "block";
}

function view_download()
{
    document.getElementById('download').style.display = "block";
}

function display()
{
    var x = document.getElementById('state').value;
    document.getElementById('front_image').innerHTML = x;
}

/*View Tiles on the Map*/ 

function view_karnataka_tiles()
{
    document.getElementById('front_image').style.display = "none";
    document.getElementById('mumbai').style.display = "none";
    document.getElementById('karnataka_map').style.display = "none";
    document.getElementById('karnataka_map_tiles').style.display = "block";
    document.getElementById('mangalore').style.display = "none";
    document.getElementById('karwar').style.display = "none";
    document.getElementById('murdeshwar').style.display = "none";
    document.getElementById('adyar').style.display = "none";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
