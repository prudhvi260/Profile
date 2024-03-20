// Sample JavaScript - You can add more as needed

// Fetch and display projects from an API using Velocity
const fetchProjects = async () => {
  try {
    const response = await fetch('https://api.example.com/projects');
    const data = await response.json();
    
    const gallery = document.querySelector('.gallery');
    
    data.forEach(project => {
      const img = document.createElement('img');
      img.src = project.imageUrl;
      img.alt = project.title;
      gallery.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

// Call the fetchProjects function when the page loads
document.addEventListener('DOMContentLoaded', fetchProjects);
