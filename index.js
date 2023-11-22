var leonardo = window.document.getElementById("leonardo")

var samantha = window.document.getElementById("samantha")

var bruna = window.document.getElementById("bruna")

var right = window.document.getElementById("right")

var left = window.document.getElementById("left")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
left.style = "display:flex"
right.style ="display:none"

}

function RolaParaEsquerda() {
leonardo.style ="display:flex"
bruna.style ="display:none"
left.style ="display:none"
right.style ="display:flex"
}

