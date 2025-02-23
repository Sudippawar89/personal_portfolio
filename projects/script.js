function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = ""; 
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
        
        <img draggable="false" src="${project.image}" alt="${project.name}" />
        
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
