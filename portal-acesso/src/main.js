document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const feedback = document.getElementById('feedback');

    if (!user || !pass) {
        feedback.textContent = 'Preencha todos os campos.';
        return;
    }

    if (!validatePassword(pass)) {
        feedback.textContent = 'A senha não atende aos critérios de segurança.';
        return;
    }

    feedback.style.color = 'green';
    feedback.textContent = `Bem-vindo, ${user}!`;
});

function forgotPassword() {
    alert('Função de recuperação de senha em desenvolvimento.');
}

function validatePassword(password) {
    const minLength = /.{8,}/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    return minLength.test(password) &&
           upperCase.test(password) &&
           number.test(password) &&
           specialChar.test(password);
}

function togglePassword() {
    const passField = document.getElementById('password');
    if (passField.type === 'password') {
        passField.type = 'text';
    } else {
        passField.type = 'password';
    }
}

document.getElementById('password').addEventListener('input', function() {
    const pass = this.value;
    const strengthEl = document.getElementById('password-strength');

    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength++;

    const levels = ['Fraca', 'Média', 'Forte', 'Muito Forte'];
    strengthEl.textContent = `Força da senha: ${levels[strength - 1] || '-'}`;
});