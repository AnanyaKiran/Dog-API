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
        <p class="type">Type: ${breed.type}</p>
        <h3 class="attributes">Name: ${breed.attributes.name}</h3>
        <p class="attributes">Description: ${breed.attributes.description || "No description available"}</p>
        <p class="attributes">Min life:${breed.attributes.life.min}</p>
        <p class="attributes">Max life: ${breed.attributes.life.max}</p>
        <p class="attributes">Min male weight: ${breed.attributes.male_weight.min}</p>
        <p class="attributes">Max male weight: ${breed.attributes.male_weight.max}</p>
        <p class="attributes">Min female weight: ${breed.attributes.female_weight.min}</p>
        <p class="attributes">Max female weight: ${breed.attributes.female_weight.max}</p>
        <p class="attributes">Hypoallergenic: ${breed.attributes.hypoallergenic}</p>
        <p class="relationships">Group ID: ${breed.relationships.group.data.id}</p>
        <p class="relationships">Group type: ${breed.relationships.group.data.type}</p>
        
        
      </div>
    `;
    
    breedContainer.innerHTML += breedCard;
  });
}

// Call the fetchBreeds function to load the breeds when the page loads
fetchBreeds();
