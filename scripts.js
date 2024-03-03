document.addEventListener("DOMContentLoaded", function() {
    const templateButtons = document.querySelectorAll(".template-button");
    const previewButton = document.getElementById("preview-button");
    const downloadButton = document.getElementById("download-button");
    const addEducationButton = document.getElementById("add-education");
    const addExperienceButton = document.getElementById("add-experience");

    templateButtons.forEach(button => {
        button.addEventListener("click", function() {
            applyTemplate(button.dataset.template);
        });
    });

    previewButton.addEventListener("click", generatePreview);
    downloadButton.addEventListener("click", downloadResume);
    addEducationButton.addEventListener("click", addEducationField);
    addExperienceButton.addEventListener("click", addExperienceField);
});

function applyTemplate(templateClass) {
    const previewContainer = document.getElementById("preview");
    previewContainer.className = "template-preview " + templateClass;
}

function generatePreview() {
    const previewContainer = document.getElementById("preview");
    // Generate preview content based on form data
    previewContainer.innerHTML = "<h2>Preview</h2><p>This is a preview of your resume content.</p>";
}

function downloadResume() {
    const previewContent = document.getElementById("preview").innerHTML;
    const blob = new Blob([previewContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
    URL.revokeObjectURL(url);
}

function addEducationField() {
    const educationContainer = document.querySelector(".education-container");
    const newEducationField = document.createElement("div");
    newEducationField.className = "education-item";
    newEducationField.innerHTML = `
        <input type="text" class="institution" placeholder="Institution">
        <input type="text" class="degree" placeholder="Degree">
        <input type="text" class="year" placeholder="Year">
    `;
    educationContainer.appendChild(newEducationField);
}

function addExperienceField() {
    const experienceContainer = document.querySelector(".experience-container");
    const newExperienceField = document.createElement("div");
    newExperienceField.className = "experience-item";
    newExperienceField.innerHTML = `
        <input type="text" class="company" placeholder="Company Name">
        <input type="text" class="job-title" placeholder="Your Job Title">
        <textarea class="experience-description" placeholder="Brief Description"></textarea>
    `;
    experienceContainer.appendChild(newExperienceField);
}
