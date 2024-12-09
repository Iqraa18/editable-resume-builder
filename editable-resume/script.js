document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var summaryInput = document.getElementById("summary");
    var experienceInput = document.getElementById("experience");
    var educationInput = document.getElementById("education");
    var previewName = document.getElementById("previewName");
    var previewEmail = document.getElementById("previewEmail");
    var previewPhone = document.getElementById("previewPhone");
    var previewSummary = document.getElementById("previewSummary");
    var previewExperience = document.getElementById("previewExperience");
    var previewEducation = document.getElementById("previewEducation");
    var generateButton = document.getElementById("generateResume");
    var downloadButton = document.getElementById("downloadResume");
    // Generate Resume Preview
    generateButton.addEventListener("click", function () {
        previewName.textContent = nameInput.value || "[Full Name]";
        previewEmail.textContent = emailInput.value || "[Email]";
        previewPhone.textContent = phoneInput.value || "[Phone]";
        previewSummary.textContent = summaryInput.value || "[Summary]";
        previewExperience.textContent = experienceInput.value || "[Experience]";
        previewEducation.textContent = educationInput.value || "[Education]";
    });
    // Download Resume
    downloadButton.addEventListener("click", function () {
        var resumeContent = document.getElementById("resumePreview").innerHTML;
        var blob = new Blob([resumeContent], { type: "text/html" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.html";
        link.click();
    });
});
