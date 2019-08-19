var text = [
			'texto01',
			'texto02',
			'texto03',
			'texto04',
			'texto05',
			'texto06',
			'texto07',
			'texto08',
			'texto09',
			'texto10',
			'texto11',
			'texto12',
			'texto13',
			'texto14',
			'texto15',
			'texto16',
			'texto17',
			'texto18',
			'texto19',
			'texto20',
			'texto21',
			'texto22',
			'texto23',
			'texto24',
			'texto25',
			'texto26',
			'texto27',
			'texto28',
			'texto29',
			'texto30',
			'texto31',
			'texto32',
			'texto33',
			'texto34',
			'texto35',
			'texto36',
			'texto37'	];
var BT = [
			'b01',
			'b02',
			'b03',
			'b04',
			'b05',
			'b06',
			'b07',
			'b08',
			'b09',
			'b10',
			'b11',
			'b12',
			'b13',
			'b14',
			'b15',
			'b16',
			'b17',
			'b18',
			'b19',
			'b20',
			'b21',
			'b22',
			'b23',
			'b24',
			'b25',
			'b26',
			'b27',
			'b28',
			'b29',
			'b30'	];
window.addEventListener('load', function(){
	//*****		Função que verifica o botão pressionado		*****
	function pressButton(){
		BT[0].addEventListener('click', function(){
			text[0].innerHTML = 'Tera';
		});
		BT[1].addEventListener('click', function(){
			text[1].innerHTML = '10<sup>12</sup>';
		});
		BT[2].addEventListener('click', function(){
			text[2].innerHTML = '1.000.000.000.000';
		});
		BT[3].addEventListener('click', function(){
			text[3].innerHTML = 'G';
		});
		BT[4].addEventListener('click', function(){
			text[4].innerHTML = 'Giga';
		});
		BT[5].addEventListener('click', function(){
			text[5].innerHTML = '10<sup>9</sup>';
		});
		BT[6].addEventListener('click', function(){
			text[6].innerHTML = 'M';
		});
		BT[7].addEventListener('click', function(){
			text[7].innerHTML = '10<sup>6</sup>';
		});
		BT[8].addEventListener('click', function(){
			text[8].innerHTML = '1.000.000';
		});
		BT[9].addEventListener('click', function(){
			text[9].innerHTML = 'k';
		});
		BT[10].addEventListener('click', function(){
			text[10].innerHTML = 'Quilo';
		});
		BT[11].addEventListener('click', function(){
			text[11].innerHTML = '1.000';
		});
		BT[12].addEventListener('click', function(){
			text[12].innerHTML = 'mili';
		});
		BT[13].addEventListener('click', function(){
			text[13].innerHTML = '10<sup>-3</sup>';
		});
		BT[14].addEventListener('click', function(){
			text[14].innerHTML = '0,001';
		});
		BT[15].addEventListener('click', function(){
			text[15].innerHTML = '&micro;';
		});
		BT[16].addEventListener('click', function(){
			text[16].innerHTML = 'micro';
		});
		BT[17].addEventListener('click', function(){
			text[17].innerHTML = '10<sup>-6</sup>';
		});
		BT[18].addEventListener('click', function(){
			text[18].innerHTML = 'n';
		});
		BT[19].addEventListener('click', function(){
			text[19].innerHTML = '10<sup>-9</sup>';
		});
		BT[20].addEventListener('click', function(){
			text[20].innerHTML = '0,000000001';
		});
		BT[21].addEventListener('click', function(){
			text[21].innerHTML = 'p';
		});
		BT[22].addEventListener('click', function(){
			text[22].innerHTML = 'pico';
		});
		BT[23].addEventListener('click', function(){
			text[23].innerHTML = '0,000000000001';
		});
		BT[24].addEventListener('click', function(){
			text[24].innerHTML = '&emsp;12 V&ensp;&#8658;&ensp;x mV&ensp;=&ensp;(12&ensp;&times;&ensp;1.000) mW&ensp;=&ensp;12.000 mW&emsp;';
		});
		BT[25].addEventListener('click', function(){
			text[25].innerHTML = '&emsp;0,0000235 A&ensp;&#8658;&ensp;x &micro;A&ensp;=&ensp;(0,0000235&ensp;&times;&ensp;1.000.000) &micro;A&ensp;=&ensp;23,5 &micro;A&emsp;';
		});
		BT[26].addEventListener('click', function(){
			text[26].innerHTML = '&emsp;589.000 W&ensp;&#8658;&ensp;x MW&ensp;=&ensp;(589.000&ensp;&divide;&ensp;1.000.000) MW&ensp;=&ensp;0,589 MW';
		});
		BT[27].addEventListener('click', function(){
			text[27].innerHTML = '&emsp;0,005 nV&ensp;&#8658;&ensp;x pV&ensp;=&ensp;(0,005&ensp;&times;&ensp;1.000) pV&ensp;=&ensp;5 pV';
		});
		BT[28].addEventListener('click', function(){
			text[28].innerHTML = '&emsp;5.125 A&ensp;&#8658;&ensp;x kA&ensp;=&ensp;(5.125&ensp;&divide;&ensp;1.000) kA&ensp;=&ensp;5,125 kA';
		});

	}
//*****	Fim da função que verifica o botão pressionado	*****
	var numText;													//Número dos textos
	var tamText = text.length;										//Tamanho da variável texto
	var numButton;													//Número dos botões
	var tamButton = BT.length;										//Tamanho da variável botão
	for(numText = 0; numText < tamText; numText++){					//Inicialização dos identificadores
		text[numText] = document.getElementById(text[numText]);		//Texto
		//console.log(text[numText]);
	}
	for(numButton = 0; numButton < tamButton; numButton++){			//Inicialização dos identificadores
		BT[numButton] = document.getElementById(BT[numButton]);		//Botão
		//console.log(BT[numButton]);
	}
	pressButton();


    //console.log('Se ha cargado la pagina');
    var rst = document.getElementById('texto30');
    var sBtn = document.getElementById('b30');
    //console.log(sBtn);
    sBtn.addEventListener('click', function(){
        //console.log(sBtn);
        //console.log(rst);
        //rst.innerHTML = 'Hola <br/> mundo <div style="background-color: blue"> como estás</div>';
        //gets hobby
        var hField = document.getElementById('numero');
        var hvalue = hField.valueAsNumber;
        hvalue /= 1000000000000;
        console.log(hvalue);
        console.log(hField);
        rst.innerHTML = hvalue;
        //get gender
        //var gField = document.getElementById('gender');
        //var select = gField.selectedIndex;
        //var gvalue = gField.options[select].value;
        //console.log(gvalue);
    });
});