//============================================================
clickOnProjectsBtns = () => {
    let titleProjects = document.getElementsByClassName("projectsNamesMenu__title");
    for(let i = 0 ; i<titleProjects.length ; i++) {
        titleProjects[i].addEventListener("click", () => {
            if (i == 0) {
                titleProjects[0].style.backgroundColor = "#666666";
                titleProjects[1].style.backgroundColor = "#333333";
                titleProjects[2].style.backgroundColor = "#333333";
                titleProjects[3].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);
            }
            else if (i == 1) {
                titleProjects[1].style.backgroundColor = "#666666";
                titleProjects[0].style.backgroundColor = "#333333";
                titleProjects[2].style.backgroundColor = "#333333";
                titleProjects[3].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);
            }
            else if (i == 2) {
                titleProjects[2].style.backgroundColor = "#666666";
                titleProjects[0].style.backgroundColor = "#333333";
                titleProjects[1].style.backgroundColor = "#333333";
                titleProjects[3].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);

            }
            else if (i == 3) {
                titleProjects[3].style.backgroundColor = "#666666";
                titleProjects[0].style.backgroundColor = "#333333";
                titleProjects[1].style.backgroundColor = "#333333";
                titleProjects[2].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);
            }
        })
    }
}
//============================================================
ajaxRequestToGetProjectsHTML = (i) => {
    if (i == 3) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/modulesAnalyse/modulesAnalyse.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
    else if (i == 2) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/animations-regex/animations-regex.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
    else if (i == 1) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/sitesWebFictifs/sitesWebFictifs.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
    else if (i == 0) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/mini-jeux/mini-jeux.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
};
//============================================================

clickOnProjectsBtns();