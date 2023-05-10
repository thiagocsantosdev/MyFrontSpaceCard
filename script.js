function cadastrar(){

  var nameUser = document.getElementById('name').value
  var usuario  = document.getElementById('nomeDoUsuario')

  var ageUser  = document.getElementById('age').value
  var idade = document.getElementById('idadeDoUsuario')

  var mailUser = document.getElementById('email').value
  var mail = document.getElementById('mailUsuario')

  var gitUser = document.getElementById('github').value
  var git = document.getElementById('gitlink')

  var linkUser = document.getElementById('linkedin').value
  var link = document.getElementById('linklink')


  usuario.innerHTML=nameUser;
  idade.innerHTML=ageUser+" "+"anos"
  mail.innerHTML=mailUser;
  git.innerHTML=gitUser;
  link.innerHTML=linkUser;
}

