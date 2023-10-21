const freelancers = [
  { name: "Paul", price: 50, occupation: "Programmer" },
  { name: "Emmy", price: 30, occupation: "Math Tutor" },
  { name: "Jin", price: 60, occupation: "Plumber" },
];

const newFreelancers = [
  { name: "Jack", price: 25, occupation: "Nutritionist" },
  { name: "Kate", price: 75, occupation: "Personal Trainer" },
  { name: "Ben", price: 35, occupation: "Photographer" },
  { name: "Hurly", price: 70, occupation: "Chef" },
  { name: "Richard", price: 20, occupation: "Illustrator" },
  { name: "James", price: 36, occupation: "Guitarist" },
  { name: "Jacob", price: 60, occupation: "Life Coach" },
  { name: "Bernard", price: 80, occupation: "Dentist" },
];

function updateFreelancers() {
  const freelancersList = document.querySelector("#freelancers-list");
  const averagePrice = document.querySelector("#average-price");
  let totalPrice = 0;

  freelancersList.innerHTML = ""; //clear list

  freelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name} - ${freelancer.occupation} (Starting Price: $${freelancer.price})`;
    freelancersList.appendChild(listItem);

    totalPrice += freelancer.price;
  });

  const average = totalPrice / freelancers.length;
  averagePrice.textContent = `$${average.toFixed(2)}`;
}

//Was not able to figure out how to start the intervals after jin
//when the page is loaded jack is already shown, but it should only show 3 freelancers
//then the code should update and start adding new freelancers

// Function to add new freelancers at 3-second intervals
function addNewFreelancersWithInterval() {
  let i = 0;
  const interval = 3000; // 3 seconds

  function addFreelancer() {
    if (i < newFreelancers.length) {
      freelancers.push(newFreelancers[i]);
      updateFreelancers();
      i++;
      setTimeout(addFreelancer, interval);
    }
  }

  addFreelancer();
}

updateFreelancers();

//we call this function to add new FL at 3 second intervals
addNewFreelancersWithInterval();
