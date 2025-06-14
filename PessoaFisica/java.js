document.addEventListener('DOMContentLoaded', function() {
  // Função única para mostrar mensagens
  function showMessage(container, message, isSuccess = true) {
    // Remove mensagens anteriores
    const oldMessages = container.querySelectorAll('.custom-alert');
    oldMessages.forEach(msg => msg.remove());
    
    // Cria nova mensagem
    const messageElement = document.createElement('div');
    messageElement.className = `custom-alert alert alert-${isSuccess ? 'success' : 'danger'} mt-3`;
    messageElement.innerHTML = `
      <div class="d-flex align-items-center">
        <i class="bi ${isSuccess ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'} me-2"></i>
        <div>${message}</div>
      </div>
    `;
    
    // Insere após o botão ou no container
    const submitButton = container.querySelector('.submit-btn, .submit');
    if (submitButton) {
      submitButton.insertAdjacentElement('afterend', messageElement);
    } else {
      container.appendChild(messageElement);
    }
    
    // Remove após 5 segundos
    setTimeout(() => {
      messageElement.remove();
    }, 5000);
  }

  // Configuração para a página inicial (feedback simples)
  function setupFeedbackForm() {
    const feedbackContainer = document.querySelector('.feedback');
    if (!feedbackContainer) return;
    
    const textarea = feedbackContainer.querySelector('textarea');
    const submitButton = feedbackContainer.querySelector('.submit');
    
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (textarea.value.trim() === '') {
          showMessage(feedbackContainer, 'Por favor, digite sua mensagem antes de enviar!', false);
          return;
        }
        
        showMessage(feedbackContainer, 'Obrigado pelo seu feedback!');
        textarea.value = '';
      });
    }
  }

  // Configuração para pontos de coleta
  function setupColetaForms() {
    const formContainers = document.querySelectorAll('.status-form, .status-info');
    if (!formContainers.length) return;
    
    formContainers.forEach(container => {
      const textarea = container.querySelector('textarea');
      const submitButton = container.querySelector('.submit-btn');
      const select = container.querySelector('select');
      const radios = container.querySelectorAll('input[type="radio"]');
      
      if (submitButton) {
        submitButton.addEventListener('click', function(e) {
          e.preventDefault();
          
          let isValid = true;
          
          // Validação do select
          if (select && select.value === 'Escolha um local') {
            showMessage(container, 'Por favor, selecione um ponto de coleta!', false);
            isValid = false;
          }
          
          // Validação do radio
          let radioChecked = false;
          radios.forEach(radio => {
            if (radio.checked) radioChecked = true;
          });
          
          if (radios.length > 0 && !radioChecked) {
            showMessage(container, 'Por favor, selecione o status do recipiente!', false);
            isValid = false;
          }
          
          // Validação do textarea (se existir)
          if (textarea && textarea.value.trim() === '') {
            showMessage(container, 'Por favor, digite sua mensagem!', false);
            isValid = false;
          }
          
          // Se tudo válido
          if (isValid) {
            showMessage(container, 'Status atualizado com sucesso!');
            if (textarea) textarea.value = '';
            if (select) select.value = 'Escolha um local';
            radios.forEach(radio => radio.checked = false);
          }
        });
      }
    });
  }

  // Configuração para avaliações
  function setupAvaliacoesForm() {
    const comentarioContainer = document.querySelector('.comentario');
    if (!comentarioContainer) return;
    
    const textarea = comentarioContainer.querySelector('textarea');
    const submitButton = comentarioContainer.querySelector('.submit-btn');
    
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (textarea.value.trim() === '') {
          showMessage(comentarioContainer, 'Por favor, digite seu comentário!', false);
          return;
        }
        
        showMessage(comentarioContainer, 'Avaliação enviada com sucesso!');
        textarea.value = '';
      });
    }
  }

  // Inicializa todas as configurações
  setupFeedbackForm();
  setupColetaForms();
  setupAvaliacoesForm();
});