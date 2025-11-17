function generatePlan() {
    let house = document.getElementById("houseType").value;
    let location = document.getElementById("location").value;
    let family = parseInt(document.getElementById("familyMembers").value);
    let pets = document.getElementById("pets").value;
    let special = document.getElementById("specialNeeds").value;

    // Risk score logic
    let risk = "Low";
    if(house === "wood" && location === "flood-prone") {
        risk = "High";
    } else if(house === "mixed" && location === "coastal") {
        risk = "Moderate";
    }

    // Checklist
    let checklist = ["Water", "Food", "First Aid Kit", "Flashlight"];
    if(pets === "yes") checklist.push("Pet supplies");
    if(special === "yes") checklist.push("Medications / Special items");

    // Go-bag readiness %
    let readiness = Math.floor(Math.random() * 50) + 50; // dummy percentage

    // Family communication
    let communication = "Prepare emergency contacts and evacuation plan.";

    // Output
    document.getElementById("output").innerHTML = `
        <h2>Hazard Plan</h2>
        <p><strong>Risk Score:</strong> ${risk}</p>
        <p><strong>Checklist:</strong> ${checklist.join(", ")}</p>
        <p><strong>Go-bag Readiness:</strong> ${readiness}%</p>
        <p><strong>Communication Plan:</strong> ${communication}</p>
    `;
}
