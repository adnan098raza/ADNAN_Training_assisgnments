import React, { useState } from 'react';

function TravelWebsite() {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Paris', description: 'City of love', image: 'paris.gif' },
    { id: 2, name: 'Tokyo', description: 'Capital of Japan', image: 'tokio.gif' },
    { id: 3, name: 'New York', description: 'City that never sleeps', image: 'nyc.gif' }
  ]);

  return (
    <div>
      <header>
        <h1>Travel Website</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>Explore the world</h2>
          <p>Choose your next adventure</p>
          <p>Planning a trip can take a lot of time and energy, whether you’re </p>
          <p>traveling for work, taking your dream vacation, or anything in between.</p>
        </section>
        {/* <img src="mj.jpg" alt="Messi image 1"></img> */}
        <section>
          <h4>Destinations</h4>
          <ul>
            {destinations.map((destination) => (
              <li key={destination.id}>
                <img src={destination.image} alt={destination.name} />
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <a href="#">Learn more</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>Travel Website &copy; 2023</p>
      </footer>
    </div>
  );
}

export default TravelWebsite;
