function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value)>ano){
    window.alert('[erro] vereficar os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto-crianca-m.jpg')
            }else if (idade<21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','foto-adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }else if (fsex[1].checked) {
            genero ='feminino'
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src', 'foto-crianca-f.jpg')
            }else if (idade<21){
                //jovem
                img.setAttribute('src','foto-jovem-f.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','foto-adulto-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }

        }
        res.style.textAling = 'center'
        res.innerHTML=`detectamos${genero}com${idade}anos`
        res.appendChild(img)
    }
}