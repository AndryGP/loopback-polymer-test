## TODO

bower.json
bower.cc
.editorconfig installare plugin di sublime

disaccoppiare stili, eliminare stile aggiuntivo che non sia di struttura (float, ...)
usare x-bootstrap nei componenti creati e gia pubblicati su x-element
mettere gli altri (oltre a x-bootstrap) import fuori dal template
nomi autori su bower in un array

core-ajax creare il body stringificato nel codice e non nell'elemento



creare gli elementi base di una form
- input text
- textarea
- select (vuole un array di opzioni)
- date



x-input
x-textarea
x-email
x-select
x-date (vedi brick-calendar)
  finchè non c'è usate input text con bottone che mette date.now()

script che dato un json (nome proprietà/tipo di dato) con tipo (string, date, number, options) 
crea una pagina html con la form per creare una istanza di quel modello 


{
	"name": {
		type: "string"
	},
	"bio": {
		type: "text"
	},
	"email": {
		type: "email"
	},
	"age": {
		type: "number"
	},
	"created_at": {
		type: "date"
	},
	"gender": {
		type: "enum",
		values: ["m", "f"]
	}
}


import x-text
...


<template>

	ajax

	<div id="form">

	</div>
	button

</template>


ready: function () {
	
	elements: {
		string: 'x-input',
		text: 'x-text
	}

	modelChanged: function () {
		Object.keys(model).forEach(function (name) {
			var type = model[name].type;
			var elementName = this.elements[type]
			var element = document.createElement(elementName);
			this.$.form.appendChild(element)
		})
	}

}





form.model = model