const users = [
    { id: 1, img: "https://i.pravatar.cc/150?img=1", name: "Ayesha Khan", bio: "Frontend developer who loves clean UI and a good cup of chai." },
    { id: 2, img: "https://i.pravatar.cc/150?img=2", name: "Liam Carter", bio: "Backend engineer building scalable APIs with Node.js and Go." },
    { id: 3, img: "https://i.pravatar.cc/150?img=3", name: "Sofia Martinez", bio: "UX designer turning complex problems into simple experiences." },
    { id: 4, img: "https://i.pravatar.cc/150?img=4", name: "Hamza Ali", bio: "Full-stack developer and open-source contributor." },
    { id: 5, img: "https://i.pravatar.cc/150?img=5", name: "Emma Johnson", bio: "Product manager passionate about user-first roadmaps." },
    { id: 6, img: "https://i.pravatar.cc/150?img=69", name: "Noah Williams", bio: "Mobile developer crafting smooth apps with React Native." },
    { id: 7, img: "https://i.pravatar.cc/150?img=7", name: "Fatima Noor", bio: "Data scientist exploring patterns in messy datasets." },
    { id: 8, img: "https://i.pravatar.cc/150?img=8", name: "Oliver Brown", bio: "DevOps engineer who automates everything twice." },
    { id: 9, img: "https://i.pravatar.cc/150?img=9", name: "Mia Davis", bio: "Graphic designer with a love for bold colors and typography." },
    { id: 10, img: "https://i.pravatar.cc/150?img=10", name: "Usman Tariq", bio: "Cybersecurity enthusiast and ethical hacker." },
    { id: 11, img: "https://i.pravatar.cc/150?img=11", name: "Charlotte Wilson", bio: "Content writer telling stories about tech and travel." },
    { id: 12, img: "https://i.pravatar.cc/150?img=12", name: "James Anderson", bio: "Cloud architect working with AWS and Kubernetes." },
    { id: 13, img: "https://i.pravatar.cc/150?img=13", name: "Zara Ahmed", bio: "Machine learning engineer training models for good." },
    { id: 14, img: "https://i.pravatar.cc/150?img=14", name: "Benjamin Taylor", bio: "Game developer building indie worlds in Unity." },
    { id: 15, img: "https://i.pravatar.cc/150?img=15", name: "Amelia Thomas", bio: "QA engineer who finds the bugs before your users do." },
    { id: 16, img: "https://i.pravatar.cc/150?img=16", name: "Bilal Hussain", bio: "Startup founder obsessed with solving local problems." },
    { id: 17, img: "https://i.pravatar.cc/150?img=17", name: "Harper Moore", bio: "Photographer capturing city life one frame at a time." },
    { id: 18, img: "https://i.pravatar.cc/150?img=18", name: "Lucas Jackson", bio: "Blockchain developer writing smart contracts in Solidity." },
    { id: 19, img: "https://i.pravatar.cc/150?img=19", name: "Hira Saleem", bio: "Digital marketer growing brands through social media." },
    { id: 20, img: "https://i.pravatar.cc/150?img=20", name: "Henry White", bio: "Technical writer making documentation actually readable." },
    { id: 21, img: "https://i.pravatar.cc/150?img=21", name: "Evelyn Harris", bio: "AI researcher curious about language and reasoning." },
    { id: 22, img: "https://i.pravatar.cc/150?img=22", name: "Ali Raza", bio: "Python developer who automates boring tasks for fun." },
    { id: 23, img: "https://i.pravatar.cc/150?img=23", name: "Abigail Clark", bio: "Illustrator drawing whimsical characters and comics." },
    { id: 24, img: "https://i.pravatar.cc/150?img=24", name: "Alexander Lewis", bio: "Systems engineer tuning performance down to the millisecond." },
    { id: 25, img: "https://i.pravatar.cc/150?img=25", name: "Maryam Iqbal", bio: "Computer science student and competitive programmer." },
    { id: 26, img: "https://i.pravatar.cc/150?img=26", name: "Daniel Walker", bio: "Freelance web developer helping small businesses go online." },
    { id: 27, img: "https://i.pravatar.cc/150?img=27", name: "Ella Hall", bio: "Motion designer bringing interfaces to life with animation." },
    { id: 28, img: "https://i.pravatar.cc/150?img=28", name: "Saad Malik", bio: "Android developer and Kotlin fan." },
    { id: 29, img: "https://i.pravatar.cc/150?img=29", name: "Grace Young", bio: "Community manager connecting developers around the world." },
    { id: 30, img: "https://i.pravatar.cc/150?img=30", name: "Ethan King", bio: "Tech lead mentoring juniors and shipping reliable code." },
];

function showUsers(users) {
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.img;
        img.alt = user.name;
        img.classList.add("img");

        const name = document.createElement("h1");
        name.textContent = user.name;
        name.classList.add("h1")


        const bio = document.createElement("p");
        bio.textContent = user.bio;
        bio.classList.add("p");

        card.append(img, name, bio);
        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users)

document.querySelector("#search").addEventListener("input", function (inp) {
    document.querySelector(".cards").innerHTML = "";
    let newUsers = users.filter(function (user) {
        return user.name.toLowerCase().startsWith(inp.target.value.toLowerCase());
    });
    showUsers(newUsers);
})