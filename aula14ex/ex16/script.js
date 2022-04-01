function contar() {
        let inicio = document.getElementById('nInicio')
        let fim = document.getElementById('nFim')
        let passo = document.getElementById('nPasso')
        let res = document.getElementById('res')

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                window.alert('[ERRO] Faltam dados!')
        } else {
                res.innerHTML = 'Contando: '
                let i = Number(inicio.value)
                let f = Number(fim.value)
                let p = Number(passo.value)
                        // considera o passo 0 como 1
                if(p <= 0 ){
                        p = 1
                }
                if (i < f) {
                        //contagem crescente 
                        for (let c = i; c <= f; c += p) {
                                res.innerHTML += `${c} \u{1F604}`
                        }
                       
                } else{
                        //contagem decrecente
                       for (let c = i; c >= f; c -= p) {
                               res.innerHTML += `${c} \u{1F607}`
                       }

                } 

                res.innerHTML += `\u{1F3C1}`

        }

}