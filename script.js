document.getElementById('artistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Artist registration submitted!');
    // Handle form submission (send data to the backend)
});

document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Customer login submitted!');
    // Handle login (send data to the backend)
});

function viewBookings() {
    alert('Viewing all bookings...');
    // Logic to display bookings
}

function viewReviews() {
    alert('Viewing all reviews...');
    // Logic to display reviews
}

function searchArtists() {
    const query = document.getElementById('search').value;
    alert('Searching for artists in category: ' + query);
    // Logic to search for artists
}
