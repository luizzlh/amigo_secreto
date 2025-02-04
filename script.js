let nomes = [];

function adicionarNome() {
   const input = document.getElementById("nome");
   const nome = input.value.trim();
   if (nome && !nomes.includes(nome)) {
      nomes.push(nome);
      atualizarLista();
      input.value = "";
   }
}

function atualizarLista() {
   const lista = document.getElementById("lista");
   lista.innerHTML = "";
   nomes.forEach(nome => {
      const li = document.createElement("li");
      li.textContent = nome;
      lista.appendChild(li);
   });
}

function sortear() {
   if (nomes.length < 2) {
      alert("Adicione pelo menos 2 nomes para sortear!");
      return;
   }
   let embaralhado = [...nomes];
   embaralhado.sort(() => Math.random() - 0.5);
   let resultado = "";
   for (let i = 0; i < embaralhado.length; i++) {
      let amigo = i === embaralhado.length - 1 ? embaralhado[0] : embaralhado[i + 1];
      resultado += `${embaralhado[i]} -> ${amigo}\n\n`;
   }

   document.getElementById("resultado").textContent = resultado;
}