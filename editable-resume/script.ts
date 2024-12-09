document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;

    const previewName = document.getElementById("previewName")!;
    const previewEmail = document.getElementById("previewEmail")!;
    const previewPhone = document.getElementById("previewPhone")!;
    const previewSummary = document.getElementById("previewSummary")!;
    const previewExperience = document.getElementById("previewExperience")!;
    const previewEducation = document.getElementById("previewEducation")!;

    const generateButton = document.getElementById("generateResume")!;
    const downloadButton = document.getElementById("downloadResume")!;

    // Generate Resume Preview
    generateButton.addEventListener("click", () => {
        previewName.textContent = nameInput.value || "[Full Name]";
        previewEmail.textContent = emailInput.value || "[Email]";
        previewPhone.textContent = phoneInput.value || "[Phone]";
        previewSummary.textContent = summaryInput.value || "[Summary]";
        previewExperience.textContent = experienceInput.value || "[Experience]";
        previewEducation.textContent = educationInput.value || "[Education]";
    });

    // Download Resume
    downloadButton.addEventListener("click", () => {
        const resumeContent = document.getElementById("resumePreview")!.innerHTML;
        const blob = new Blob([resumeContent], { type: "text/html" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.html";
        link.click();
    });
});
