function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = ""; 
    projects.forEach(project => {
        // Ensure that we directly use the image URL from JSON
        let imageUrl = project.image.startsWith("http") ? project.image : `assets/images/projects/${project.image}`;

        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                
                <img draggable="false" src="${imageUrl}" alt="${project.name}" />
                
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;
}
