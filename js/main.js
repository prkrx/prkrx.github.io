$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
    var $hellologo = $('#helloworld');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
        else{
            $hellologo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  
      $logo.slideDown('slow');
      $hellologo.slideUp('slow');

	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
      $hellologo.slideDown('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 800,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });

const langEL = document.querySelector('.langwarp');
const link = document.getElementById('langID');
const desc = document.querySelector('.description-me');

link.forEach(el =>
	     el.addEventListener('click', () => {
		langEL.querySelector('.active').classList.remove('active');
		el.classList.add('active');
		const attr = el.getAtrribute('language')
		
		desc.textContent = data[attr].description-me;
	});
});

var data {
	"Indonesian":
	{ "description-me" : "Pikiran teknologi yang inovatif dengan 2 tahun pengalaman bekerja sebagai programmer komputer. Keahlian yang luas dalam sistem jaringan dan bekerja dengan komputer mainframe."
