let certificates = {};

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    certificates = data;
  })
  .catch(error => {
    console.error('Error loading certificate data:', error);
  });

function verifyCertificate() {
  const input = document.getElementById('certInput').value.trim();
  const resultDiv = document.getElementById('result');
  if (certificates[input]) {
    const cert = certificates[input];
    resultDiv.innerHTML = `
      <div class="result-box">
        <div class="success-title">Verification Successful</div>
        <div><strong>Certificate ID:</strong> ${cert.id}</div>
        <div><strong>Name:</strong> ${cert.name}</div>
        <div><strong>Internship:</strong> ${cert.domain}</div>
        <div><strong>Duration:</strong> ${cert.duration}</div>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="error-box">
        Certificate not found. Please check the number and try again.
      </div>
    `;
  }
}