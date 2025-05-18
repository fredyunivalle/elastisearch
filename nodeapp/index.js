const axios = require('axios');

function sendLog(message) {
  const indexName = 'clases-univalle'; 
  const url = `http://localhost:9200/${indexName}/_doc`;

  axios.post(url, {
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
