function sendRequest() {
    const numberType = document.getElementById("numberType").value;
    const url = `http://20.244.56.144/test/${numberType}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayResponse(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        displayError();
      });
  }
  
  function displayResponse(data) {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = `
      <p>Previous Window State: ${JSON.stringify(data.windowPrevState)}</p>
      <p>Current Window State: ${JSON.stringify(data.windowCurrState)}</p>
      <p>Numbers: ${JSON.stringify(data.numbers)}</p>
      <p>Average: ${data.avg.toFixed(2)}</p>
    `;
  }
  
  function displayError() {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
  }
  