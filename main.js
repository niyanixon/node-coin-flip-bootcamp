document.querySelector('button').addEventListener('click', coinResult)

function coinResult(){
    fetch('/api?coinOutcome=result')
.then(response => response.json())
.then(data => {
  console.log(data)
  document.querySelector('h2').innerText = data.result
})
.catch(error => {
  console.log(`${error}`)
});
    
}
