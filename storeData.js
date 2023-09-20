document.getElementById("donationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const donorName = document.getElementById("donor_name").value;
    const mobileNumber = document.getElementById("mobile_number").value;
    const email = document.getElementById("email").value;

    const data = `Donor Name: ${donorName}\nMobile Number: ${mobileNumber}\nEmail Address: ${email}\n----------------------\n`;

    // Create a data URI for the text file
    const dataUri = "data:text/plain;charset=utf-8," + encodeURIComponent(data);

    // Create a temporary anchor element for downloading
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = "donation.txt";

    // Trigger a click event to initiate the download
    link.click();
});
