const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    // {} - object
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.log('Fetch error:', error.message);
  }
}

fetchData();
