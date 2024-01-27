var addSacola = document.querySelector('#addSacola')

function selectLink (){
    addSacola.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}