// State
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    // Initially, Carol is not on the list
  ];
  let averagePrice = calculateAveragePrice(freelancers);
  
  // Update the list and the average price every few seconds
  const addFreelancerIntervalId = setInterval(addFreelancerAndUpdateAverage, 3000);
  
  render();
  
  
  // Functions 
  function render() {
    // Render the freelancers list
    const freelancersList = document.querySelector("#freelancersList");
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;
      return element;
    });
    freelancersList.replaceChildren(...freelancerElements);
  
    // Render the average price
    const averagePriceElement = document.querySelector("#averagePrice");
    averagePriceElement.textContent = `The average starting price is $${averagePrice}`;
  }

  //Add new freelancer
  function addFreelancerAndUpdateAverage() {
    // Add a new freelancer
    
    const newFreelancer = [
    { name: "Carol",occupation: "Programmer", price: 70,},
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    ];
    const size = newFreelancer.length;
    const randomNumber = Math.floor(Math.random()* size)
    freelancers.push(newFreelancer[randomNumber]);
  
    // Update the average price
    averagePrice = calculateAveragePrice(freelancers).toFixed(2);

    render();
    }
  
  function calculateAveragePrice(freelancersList) {
    const total = freelancersList.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return total / freelancersList.length;
  }
  
  