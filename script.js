function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the radius value entered by the user
    const radius = parseFloat(document.getElementById('radius').value);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN'; // Display 'NaN' for invalid input
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume rounded to four decimal places
    document.getElementById('volume').value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
