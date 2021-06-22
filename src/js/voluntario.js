onload = () => {

    var salvar = []

    cadastro.onsubmit = (evento) => {
        if (nome.value ==0){
            alert('O campo nome esta sem preencher')
            evento.preventDefault();
        }
        else if (email.value ==0){
            alert('O campo email esta sem preencher')
            evento.preventDefault();
        }
        else if (cidade.value ==0){
            alert('O campo cidade sem esta preencher')
            evento.preventDefault();
        }
        else if (telefone.value ==0){
            alert('O campo telefone sem esta preencher')
            evento.preventDefault();
        }
        else{
            let voluntarios = { nome: nome.value, email: email.value, telefone: telefone.value, mensagem: mensagem.value, cidade: cidade.value };
            salvar.push(voluntarios)
            localStorage.setItem('voluntarios', JSON.stringify(salvar));
            evento.preventDefault();
            nome.value = "";
            email.value = "";
            telefone.value = "";
            mensagem.value = "";
            cidade.value = "";
            alert('Cadastro Realizado!')
            console.log(voluntarios)
        }
    }
}