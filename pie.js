 // Dummy data for pie chart (replace with actual data)
    const pieChartData = {
        labels: ['NDA', 'I.N.D.I Alliance', 'Others', 'NOTA'],
        datasets: [{
            data: [70, 10, 8, 12], // Example data percentages
            backgroundColor: ['#fd6b19', '#115740', '#36a2eb', '#000000'],
        }]
    };

    // Render pie chart
    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData,
    });

    // Update vote count
    const voteCountElement = document.getElementById('voteCount');
    const totalVotes = pieChartData.datasets[0].data.reduce((total, voteCount) => total + voteCount, 0);
    voteCountElement.textContent = `Votes Polled: ${totalVotes}`;

    // Handle opening of "Cast Your Vote" popup
    const castVoteBtn = document.getElementById('castVoteBtn');
    const userDetailsPopup = document.getElementById('userDetailsPopup');
    castVoteBtn.addEventListener('click', function () {
        userDetailsPopup.style.display = 'block';
    });

    // Handle closing of popups when clicking outside the form
    document.addEventListener('click', function (event) {
        if (event.target === userDetailsPopup) {
            userDetailsPopup.style.display = 'none';
        }
    });

    // Handle submission of user details form
    const userDetailsForm = document.getElementById('userDetailsForm');
    userDetailsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Additional validation can be added here
        userDetailsPopup.style.display = 'none'; // Close user details popup
        document.getElementById('votePopup').style.display = 'block'; // Open vote popup
    });

    // Handle submission of vote form
    const voteForm = document.getElementById('voteForm');
    voteForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedOption = document.getElementById('vote').value;
        const reason = document.getElementById('reason').value;
        // Send vote to server (replace with actual server-side code)
        console.log(`Vote: ${selectedOption}, Reason: ${reason}`);
        // Close vote popup after submission (replace with actual behavior)
        document.getElementById('votePopup').style.display = 'none';
    });

    // Additional JavaScript code can go here

