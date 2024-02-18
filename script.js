document.getElementById("sort").addEventListener("click", function() {
    const sortTimeline = document.getElementById("timeline-container");
    sortTimeline.style.flexDirection = sortTimeline.style.flexDirection === "column" ? "column-reverse" : "column";

    const sortText = document.getElementById("sort");
    sortText.textContent = sortTimeline.style.flexDirection === "column-reverse" ? "Sort By : Newest to Oldest" : "Sort By : Oldest to Newest";
});

