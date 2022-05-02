function contar(){
let inicio = window.document.getElementById('txti')
let fim = window.document.getElementById('txtf')
let passo = window.document.getElementById('txtp')
let res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossivel contar!'
    window.alert('[ERRO] Verifique os campos')
}else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo invalido, será considerado Passo = 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p) // contagem crescente
            res.innerHTML += `${c} \u{1F449}`
        }else{
            for(let c = i; c >= f; c -= p) // contagem decrescente
            res.innerHTML += `${c} \u{1F449}`
        }
       res.innerHTML += `\u{1F3C1}`
     }
    
}





