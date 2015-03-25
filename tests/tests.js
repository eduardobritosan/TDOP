var assert = chai.assert;

suite('Pruebas bexec()', function() {
	setup(function(){
		var str;
		var re;
	});
	test('NULL', function() {
		str = "dBdXXXXDBBD";
		re = /d(b+)(d)/ig;
		re.lastIndex = 3;
		assert.equal(re.bexec(str), null, 'lastIndex = 3 <> 4 = index');
    });	
	test('m', function() {
		str = "dBdXXXXDBBD";
		re = /d(b+)(d)/ig;
		re.lastIndex = 7;
		assert.isArray(re.bexec(str), '["DBBD", "BB", "D", index: 7, input: "dBdXXXXDBBD"]');
		re.lastIndex = 7;
		assert.notEqual(re.bexec(str), null, '["DBBD", "BB", "D", index: 7, input: "dBdXXXXDBBD"]');
    });	
});

suite('make y getTok', function() {
	setup(function(){
		var str;
		var STRING;
		var n;
		var from;
		var i;
	});
		
	test('make() y getTok()', function() {
		var make = function (type, value) {
			return {
				type: type,
				value: value,
				from: from,
				to: i
			};
		};
		var getTok = function() {
			  var str = m[0];
			  i += str.length; // Warning! side effect on i
			  return str;
		};
		str = 'var a = "string"';
		STRING = /('(\\.|[^'])*'|"(\\.|[^"])*")/g;
		i = STRING.lastIndex = 8;
		from = i;
		m = STRING.bexec(str);
		var n = getTok();
		assert.equal(n, '"string"');
		assert.equal(i, 16);
		assert.isObject(make('name', n));
    });	
});

suite('tests para main()', function() {
	test('Asignación', function() {
		INPUT.value = 'var a = 3;';
        main();
		assert.equal(OUTPUT.innerHTML,'{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "a",\n        "arity": "name"\n    },\n    "second": {\n        "value": 3,\n        "arity": "literal"\n    }\n}');
    });	
	test('Comentario', function() {
		INPUT.value = '// Comentario';
        main();
		assert.equal(OUTPUT.innerHTML, 'null');
    });	
});

suite('PRUEBAS PARA LA TOKENS()', function() {
	test('Asignación', function() {
		source = 'var a = 3;';
        tokens = source.tokens();
		assert.isArray(tokens, 'Casó con los tipos: name, name, operator, number, operator');
	});	
	test('Comentario', function() {
		source = '// Comentario';
        tokens = source.tokens();
		assert.deepEqual(tokens, [], 'Devuelve el JSON vacío xq los comentarios no los incluye');
    });	
});