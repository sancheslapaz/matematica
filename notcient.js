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
			'texto37',
			'texto38'	];
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
			'b30',
			'b31'	];
window.addEventListener('load', function(){
	//*****		Função que verifica o botão pressionado		*****
	function pressButton(){
/*****			Montagem das respostas do item 1.5			*****/
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
/*****													*****/
/*****			Montagem da tabela do item 1.6			*****/
		BT[29].addEventListener('click', function(){
			var hField = document.getElementById('numero');
			var hvalue = hField.valueAsNumber;
			text[29].innerHTML = hvalue/1000000000000;
			text[30].innerHTML = hvalue/1000000000;
			text[31].innerHTML = hvalue/1000000;
			text[32].innerHTML = hvalue/1000;
			text[33].innerHTML = hvalue*1000;
			text[34].innerHTML = hvalue*1000000;
			text[35].innerHTML = hvalue*1000000000;
			text[36].innerHTML = hvalue*1000000000000;
    });
/*****													*****/
/*****			Montagem da tabela do item 1.7			*****/
		//get result01
		BT[30].addEventListener('click', function(){
			//var rst = document.getElementById('result01');
			/*****					Inpur				*****/
			var h1Field = document.getElementById('grand');
			var h1value = h1Field.valueAsNumber;
			/*****			Entrada de valores			*****/
			var gField = document.getElementById('de');
			var select = gField.selectedIndex;
			var gvalue = gField.options[select].value;
			/*****										*****/
			/*****			Saída de valores			*****/
			var g1Field = document.getElementById('para');
			var select1 = g1Field.selectedIndex;
			var g1value = g1Field.options[select1].value;
			/*****										*****/
			//BT[30] = h1value;
			if(gvalue == 'T'){
				h1value *= 1000000000000;
			}
			if(gvalue == 'G'){
				h1value *= 1000000000;
			}
			if(gvalue == 'M'){
				h1value *= 1000000;
			}
			if(gvalue == 'k'){
				h1value *= 1000;
			}
			if(gvalue == 'm'){
			h1value *= 0.001;
			}
			if(gvalue == 'm1'){
				h1value *= 0.000001;
			}
			if(gvalue == 'n'){
				h1value *= 0.000000001;
			}
			if(gvalue == 'p'){
				h1value *= 0.000000000001;
			}
			if(g1value == 'T'){
				text[37].innerHTML = h1value/1000000000000;
			}
			if(g1value == 'G'){
				text[37].innerHTML = h1value/1000000000;
			}
			if(g1value == 'M'){
				text[37].innerHTML = h1value/1000000;
			}
			if(g1value == 'k'){
				text[37].innerHTML = h1value/1000;
			}
			if(g1value == 'v'){
				text[37].innerHTML = h1value;
			}
			if(g1value == 'm'){
				text[37].innerHTML = h1value*1000;
			}
			if(g1value == 'm1'){
				text[37].innerHTML = h1value*1000000;
			}
			if(g1value == 'n'){
				text[37].innerHTML = h1value*1000000000;
			}
			if(g1value == 'p'){
				text[37].innerHTML = h1value*1000000000000;
			}
			console.log(text[37]);
		});
/*****													*****/
	}
//*****	Fim da função que verifica o botão pressionado	*****
	var numText;													//Número dos textos
	var tamText = text.length;										//Tamanho da variável texto
	var numButton;													//Número dos botões
	var tamButton = BT.length;										//Tamanho da variável botão
	for(numText = 0; numText < tamText; numText++){					//Inicialização dos identificadores
		text[numText] = document.getElementById(text[numText]);		//Texto
	}
	for(numButton = 0; numButton < tamButton; numButton++){			//Inicialização dos identificadores
		BT[numButton] = document.getElementById(BT[numButton]);		//Botão
	}
	pressButton();
	function blockKeyCTRL(evt){										//Bloqueio contra cópia da página HTML
		if ( evt.keyCode == 17 )
			return false;
		else
			return true;
	}
	
});