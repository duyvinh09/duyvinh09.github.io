// Get DOM elements
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const lifetime = document.querySelector('#lifetime');
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
        input: input.value
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
    });
    const data = await response.json();
    historyButton.innerHTML = `<i class="fas fa-history btn-icon-prepend"></i><b>${data.total}</b>`;
  } catch (error) {
    console.error(error);
    alert('Error getting history.');
  }
});
