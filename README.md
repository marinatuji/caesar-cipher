# Cifra de César

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Documentação

### Fluxograma do Proceso

Abaixo está a representação do fluxograma do processo de cifragem e decifragem de uma mensagem inserida pelo usuário, que contempla essa aplicação web.

![Fluxograma do Processo: Cifra de César](https://raw.githubusercontent.com/marinatuji/caesar-cipher/master/src/assets/FlowChart_P1Cipher.PNG) 
##### Figura1: Fluxograma do Processo de Cifrar e Decifrar.

### Definição de usuários

Os usuários definidos para utilizar essa aplicação web foram aqueles com necessidades de cifrar ou decifrar mensagens curtas conhecendo a chave de deslocamento de acordo com o conceito de Cifra de Cesár.

### Utilização do aplicativo web

A interface permite ao usuário:

* inserir um valor de deslocamento (`offset`) indicando quantas posições de deslocamento de caracteres quer utilizar para cifrar/decifrar a mensagem
* inserir uma mensagem (letras maiúsculas e minúsculas, números e caracteres especiais) que deseja cifrar/decifrar
* selecionar a opção desejada da operação (Cifrar/Decifrar)
* ver o resultado da mensagem cifrada/decifrada na tela do dispositivo

### Conceitos utilizados 

Para a conversão da mensagem inserida pelo usuário foi utilizado o padrão de codificação ASCII (American Standard Code for Information Interchange) e conhecimentos de modelagem matemática para a resulução do caso de cifragem considerando deslocamentos negativos e positivos e para o caso de decifragem, desta forma com a utilização de modelagem matemática foi possível modelar as funções da programação de acordo com o solicitado.

Leia mais sobre [Tabela ASCII](https://en.wikipedia.org/wiki/ASCII) aqui.

## Considerações Finais

Essa aplicação web foi inplementada para aceitar valores de deslocamento (offset) negativos e positivos.