var suma_transakcji = 0;

document.getElementById("submit").addEventListener('click', function() {

var przelicznik = document.getElementById('przelicznik_wartosc');
var kurs = parseFloat(document.getElementById("course_value").value);
kurs = kurs.toFixed(2);
var name = document.getElementById("name").value;
var euro = parseFloat(document.getElementById("euro_value").value);
euro = euro.toFixed(2);
var transakcje_walutowe = document.getElementById('transakcje_walutowe');
przelicznik.textContent = kurs;
var wynik = kurs * euro;
suma_transakcji = suma_transakcji + wynik;
document.getElementById("suma_transakcjii").innerHTML = suma_transakcji;
wynik = wynik.toFixed(2);
var text_result = '<div class="transakcja">Nazwa transakcji: <span class="name_result">' + name + '</span>, Kwota w Euro: <span class="euro_result">' + euro + '</span>, Kwota w PLN: <span class="wynik_result">' + wynik + '</span> <span class="close">X</span></div>'
transakcje_walutowe.innerHTML += text_result;
});

document.getElementById("submit").addEventListener('click', function() {

var kurs = document.getElementById("course_value").value;
var $wynik_results = $('.wynik_result');
var $euro_results = $('.euro_result');
if($wynik_results.length > 1) {
	for(var i=0; i <= $wynik_results.length; i++){
		euro = $($euro_results[i]).text();
		wynik_new = euro * kurs;
		console.log(wynik_new)
		$($wynik_results[i]).text(wynik_new);
}
}

  $('.close').each(function() {
    $(this).click(function(e) {
    	$(e.currentTarget).closest('.transakcja').css('display', 'none');
      var m = $(e.currentTarget).parent().find('.wynik_result').text();
      suma_transakcji = suma_transakcji - m;
      document.getElementById("suma_transakcjii").innerHTML = suma_transakcji;
    })
  })
});
