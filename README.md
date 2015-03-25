#Analizador Lexico ![Travis is down?](https://travis-ci.org/eduardobritosan/TDOP.svg?branch=gh-pages)
##Made by:
**Hector Rodriguez Perez** [Github Page](http://hecrp.github.io) | [GitHub account](http://www.github.com/hecrp)

**Eduardo Brito Sanchez** [Github Page](http://eduardobritosan.github.io) | [GitHub account](http://www.github.com/eduardobritosan)

2010-11-12

tdop.html contains a description of Vaughn Pratt's Top Down Operator Precedence,
and describes a parser for Simplified JavaScript in Simplified JavaScript.

index.html parses parse.js and displays its AST. The page depends on json2.js
(which is not included in this project) and on parse.js and tokens.js (which
are).

tdop.js contains a Simplified JavaScript parser. See tdop.html for commentary.

tokens.js produces an array of token objects from a string.
