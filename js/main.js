$(document).ready(function() {

    $('#carrossel-imagens').slick( {
        autoplay: true,
    })

    $('#telefone').mask('(00) 00000-0000');
  
    $('#cpf').mask('000.000.000-00');
  
    $('#cep').mask('00000-000');

    $('#toggle'). click(function() {
        $('form').slideToggle();
    })
})

  
$(document).ready(function() {
    
    $.validator.addMethod("nome", function() {
      
      return true;  
    }, "Por favor, insira um nome válido.");
  
    $.validator.addMethod("cpf", function() {
      
      return true; 
    }, "Por favor, insira um CPF válido.");
  
   
    $("form").validate({
      rules: {
        nome: {
          required: true,
          nome: true 
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true
        },
        cpf: {
          required: true,
          cpf: true
        },
        endereco: {
          required: true
        },
        cep: {
          required: true
        }
      },
      messages: {
        nome: {
          required: "Por favor, insira seu nome."
        },
        email: {
          required: "Por favor, insira seu e-mail.",
          email: "Por favor, insira um e-mail válido."
        },
        telefone: {
          required: "Por favor, insira seu telefone."
        },
        cpf: {
          required: "Por favor, insira seu CPF."
        },
        endereco: {
          required: "Por favor, insira seu endereço."
        },
        cep: {
          required: "Por favor, insira seu CEP."
        }
        
      }

    });
    
  });

  
  