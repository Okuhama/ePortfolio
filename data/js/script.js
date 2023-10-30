$(document).ready(function() {
    // Store the subtopics for each expertise in an object
    const subtopics = {
        english: ["Grammar", "Writing", "Reading", "AP Language & Composition"],
        math: ["Algebra 1", "Geometry", "Algebra 2", "PreCalculus", "AP Statistics", "AP Calculus AB/BC"],
        science: ["AP Biology", "AP Chemistry", "AP Physics 1", "AP Environmental Science", "AP Psychology"],
        cs: ["AP Computer Science A", "AP Computer Science Principles"]
    };
    
    // Function to update the lesson options based on the selected expertise
    $("#topic").change(function() {
        const selectedExpertise = $(this).val();
        const lessons = subtopics[selectedExpertise];
        const lessonSelect = $("#lesson");
        lessonSelect.empty(); // Clear previous options

        // Add the new options based on the selected expertise
        $.each(lessons, function(index, value) {
            lessonSelect.append($("<option></option>").attr("value", value).text(value));
        });
    });

    // Trigger change event initially to populate the options based on the default value
    $("#topic").trigger("change");
});



$(document).ready(function() {
    // Function to populate end time options based on the selected start time
    $("#start-time").change(function() {
        const timeValue = $(this).val();
        const [hours, minutes] = timeValue.split(":").map(Number);
        const selectedStartTime = hours + minutes / 60;
        console.log(selectedStartTime);
        const endTimeSelect = $("#end-time");
        endTimeSelect.empty(); // Clear previous options

        // Dynamically generate the end time options based on the selected start time
        for (let i = 1; i < 9; i++) {
            let startTime = parseFloat(selectedStartTime);
            let newTime = startTime + i * 0.5;
            let optionText = formatTime(newTime);
            
            if (newTime <= 21 && newTime !== startTime) {

                endTimeSelect.append($("<option></option>").attr("value", newTime).text(optionText));

            }

        }
    });

    // Function to format time in 12-hour clock format
    function formatTime(time) {
        let hours = Math.floor(time);
        let minutes = (time % 1) * 60;
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Adjusting 0 to 12
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let formattedTime = hours + ':' + minutes + ' ' + ampm;
        return formattedTime;
    }

    // Trigger change event initially to populate the end time options based on the default start time
    $("#start-time").trigger("change");

    // Function to check if the end time is after the start time
    $("#end-time").change(function() {
        const selectedStartTime = parseFloat($("#start-time").val());
        const selectedEndTime = parseFloat($(this).val());
        if (selectedEndTime <= selectedStartTime) {
            alert("End time should be after the start time.");
            $(this).val(""); // Clear the selected end time
        }
    });

});
