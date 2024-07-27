document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');

    // Function to toggle between playing forwards and backwards
    function togglePlayback() {
        if (video.playbackRate > 0) {
            video.playbackRate = -1; // Play backwards
            video.currentTime = video.duration; // Start from the end
        } else {
            video.playbackRate = 1; // Play forwards
            video.currentTime = 0; // Start from the beginning
        }
    }

    // Event listener for when the video ends
    video.onended = function() {
        togglePlayback(); // Toggle the playback direction at the end of each loop
        video.play(); // Ensure the video plays after switching directions
    };
});