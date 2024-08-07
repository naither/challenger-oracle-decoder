document.addEventListener("DOMContentLoaded", () => {
    const parrafo = document.getElementById("parrafo");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const outputContainer = document.getElementById("output-container");
  
    parrafo.addEventListener("click", function () {
      // Si el párrafo contiene solo el placeholder, vaciarlo
      if (parrafo.classList.contains("placeholder")) {
        parrafo.textContent = "";
        parrafo.classList.remove("placeholder");
      }
  
      // Habilitar la edición
      parrafo.setAttribute("contenteditable", "true");
      parrafo.focus();
    });
  
    parrafo.addEventListener("blur", function () {
      // Si el párrafo está vacío, mostrar el placeholder
      if (parrafo.textContent.trim() === "") {
        parrafo.textContent = "Haz clic aquí para escribir...";
        parrafo.classList.add("placeholder");
        parrafo.setAttribute("contenteditable", "false");
      }
    });
  
    const encrypt = (text) => {
      return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    };
  
    const decrypt = (text) => {
      return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    };
  
    const updateOutput = (text) => {
      outputContainer.innerHTML = `
            <div id="output-cont">
              <div class="output-text">${text}</div>
              <button id="copy-btn" class="btn">Copiar</button>
            </div>
          `;
  
      document.getElementById("copy-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(text);
        alert("Texto copiado al portapapeles");
      });
    };
  
    encryptBtn.addEventListener("click", () => {
      const text = parrafo.textContent;
      if (/^[a-z\s]*$/.test(text)) {
        const encryptedText = encrypt(text);
        updateOutput(encryptedText);
      } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
      }
    });
  
    decryptBtn.addEventListener("click", () => {
      const text = parrafo.textContent;
      if (/^[a-z\s]*$/.test(text)) {
        const decryptedText = decrypt(text);
        updateOutput(decryptedText);
      } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
      }
    });
  });
  