onload = () => {

    
    
    var salvar = []

    cadastro.onsubmit = (evento) => {
            let voluntarios = { nome: nome.value, email: email.value, telefone: telefone.value, mensagem: mensagem.value, cidade: cidade.value, cpf: cpf.value, rg: rg.value, nascimento: nascimento.value, whatsapp: whatsapp.value, bairro: bairro.value, complemento: complemento.value };
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