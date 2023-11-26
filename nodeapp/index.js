const axios = require('axios');

function sendLog(message) {
  axios.post('http://localhost:9600', {
    message: message,
    timestamp: new Date()
  })
  .then(response => {
    console.log('Log sent:', message);
  })
  .catch(error => {
    console.error('Error sending log:', error);
  });
}

// Ejemplo de envío de logs
sendLog('First test log');
sendLog('Second test log');
