// Get DOM elements
const input = document.querySelector('input[name="username"]');
const secretKey = document.querySelector('input[name="secretKey"]');
const output = document.getElementById('output');
const lifetime = document.getElementById('lifetime');
const copyButton = document.querySelector('.copy-button');
const historyButton = document.querySelector('.btn-success');

// API endpoint
const apiUrl = 'https://api.code.pro.vn/2fa/v1/get-code';

// Listen for form submit
document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        input: input.value,
        secretKey: secretKey.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    output.value = data.code;
    lifetime.innerHTML = `Code will expire in ${data.expiration} seconds.`;
  } catch (error) {
    console.error(error);
    alert('Error getting 2FA code.');
  }
});

// Listen for copy button click
copyButton.addEventListener('click', () => {
  output.select();
  document.execCommand('copy');
  alert('Code copied to clipboard.');
});

// Listen for history button click
historyButton.addEventListener('click', async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secretKey.value}`
      }
    });
    const data = await response.json();
    historyButton.innerHTML = `<i class="fas fa-history btn-icon-prepend"></i><b>${data.total}</b>`;
  } catch (error) {
    console.error(error);
    alert('Error getting history.');
  }
});
