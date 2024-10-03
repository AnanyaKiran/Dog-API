const API = "https://dogapi.dog/api/v2/breeds";

// Function to fetch breed data from API
async function fetchBreeds() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    displayBreeds(data.data); // Assuming breed data is in 'data.data'
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

// Function to display breeds in the UI
function displayBreeds(breeds) {
  const breedContainer = document.getElementById("breed-cards");

  breeds.forEach(breed => {
    const breedCard = `
      <div class="card">
        <p class="id">ID: ${breed.id}</p>
        <h3>${breed.attributes.name}</h3>
        <p class="type">Type: ${breed.type}</p>
        <p>${breed.attributes.description || "No description available"}</p>
      </div>
    `;
    
    breedContainer.innerHTML += breedCard;
  });
}

// Call the fetchBreeds function to load the breeds when the page loads
fetchBreeds();
