const axios = require('axios');
const colors = require('colors');

console.log('Sending request to server...'.cyan);

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('\nData received successfully!\n'.green);
    
    const data = response.data;
    
    console.log('Received Information:'.rainbow);
    console.log('ID:'.yellow, data.id.toString().bold);
    console.log('User ID:'.yellow, `User ${data.userId}`.cyan);
    console.log('Title:'.yellow, data.title.bold);
    
    if (data.completed) {
      console.log('Status:'.yellow, 'Completed'.green.bold);
    } else {
      console.log('Status:'.yellow, 'Not Completed'.red.bold);
    }
    
    console.log('\nRaw JSON Data:'.rainbow);
    console.log(JSON.stringify(data, null, 2).blue);
    
  })
  .catch(error => {
    console.error('Error in receiving data:'.red.bold);
    console.error(error.message.red);
  })
  .finally(() => {
    console.log('\nProgram Ended'.magenta);
  });