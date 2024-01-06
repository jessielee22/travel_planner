function submitForm() {
  // Retrieve values from the form
  const destination = document.getElementById('destination').value;
  const departureDate = document.getElementById('departureDate').value;
  const returnDate = document.getElementById('returnDate').value;

  // You can add code to handle and store the form data here
  // For simplicity, let's display the data on the page for now
  const output = document.getElementById('output');
  output.innerHTML = `
    <h2>Destination and Dates</h2>
    <p>Destination: ${destination}</p>
    <p>Departure Date: ${departureDate}</p>
    <p>Return Date: ${returnDate}</p>
    <!-- Add similar structures for other sections -->
  `;
}
