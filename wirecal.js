function init() {
	$(document).ready(function(){
		$("#cal").click(calculate);
		});
	}
function calculate() {
//	alert("cal");
	w = Number($("#w").val());
	a = Number($("#a").val());
	l = Number($("#l").val());
	g = Number($("#g").val());
	ccc = "w: " + w + "\na: " + a + "\nl: " + l + "\ng: " + g;
//	alert(ccc);
	b = l - a;
	h = Math.sqrt(Math.pow(w,2) - Math.pow(a,2));
	fita = Math.acos(a/w);
	sigma = Math.atan(h/(l-a));
	rb = a*g/l;
	ra = g - rb;
//	ccc = ccc + "\nb: " + b + "\nh: " + h + "\nfita: " + fita + "\nsigma: " + sigma;
//	alert(ccc);
	ft1 = Math.floor(ra/Math.sin(fita)*1000)/1000;
	ft2 = Math.floor(rb/Math.sin(sigma)*1000)/1000;
	$("#fixreading").val(ft1);
	$("#otherreading").val(ft2);
	}
function quitapp() {
	navigator.app.exitApp();
	}