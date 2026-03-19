//unknown purpose of video 2
let searchTerm = "";
let openOnly = false;

function isClassFull(course) {
    if(course.Classification.Open === false)
        return true;
    }

function doesTermMatch(course) {//video 4, but only the first two points are shown
    // If searchTerm is empty, return true (show all courses)
    if(searchTerm === "") {
        return true;
    }

    // Convert searchTerm to lowercase
    searchTerm = searchTerm.toLowerCase();

    // Check if searchTerm appears in (all converted to lowercase):
    //   - course.Code
        const codeMatch = course.Code.includes(searchTerm);
    //   - course.Title
    //    if(course.Title.toLowerCase().includes(searchTerm)) {
    //        return true;
    //    } else {
    //        return false;
    //    }
        const titleMatch = course.Title.toLowerCase().includes(searchTerm);
    //   - course.CRN (convert to string first)
        const crnMatch = course.CRN.toString().includes(searchTerm);
    //   - course.Instructors[].Name (use map to get all names, then join)
        const instructorsMatch = course.Instructors[0].Name.toLowerCase().includes(searchTerm);
    // Use includes() for case-insensitive matching
    // Return true if searchTerm matches any of these fields
    return codeMatch || titleMatch || crnMatch || instructorsMatch;
}

function dataToHTML(course) {
    // should return a formatted HTML card with the relevant course info
    // (using template literals). 
    console.log(course);
    return `
        <section class="course-card">
            <h2>${course.Code}: ${course.Title}</h2>
            <p class="status open">
                <i class="fa-solid fa-circle-check"></i>
                Open &bull; ${course.CRN} &bull; Seats Available: ${course.EnrollmentMax-course.EnrollmentCurrent}
            </p>
            <p>
                ${course.Days} &bull;
                ${course.Location.FullLocation} &bull;
                ${course.Hours} Credit Hour(s)
            </p>
            <p>
                <strong>${course.Instructors[0].Name}</strong>
            </p>
        </section>
    `;
}

function showMatchingCourses() {
    // 1. Get the .courses container element
    const containerEl = document.querySelector('.courses');
    // 2. Clear it
    containerEl.innerHTML = "";
    // 3. Start with courseList (from course-data.js)
    let matchingCourses = courseList.filter(doesTermMatch);
    // 4. Apply the filters and store the matched courses in a variable
        // view only open courses
    if (openOnly) {
        matchingCourses = matchingCourses.filter(isClassFull);
    }
    // 5. If no courses match, display "No courses match your search." and return
    if(matchingCourses.length === 0) {
        containerEl.innerHTML = "No courses match your search.";
        return;
    }
    // 6. Output each course to the .courses container (forEach + insertAdjacentHTML)
    matchingCourses.forEach((course) => {
        const htmlSnippet = dataToHTML(course);
        containerEl.insertAdjacentHTML("beforeend", htmlSnippet);
    })
}

function filterCourses() {
    // Update global variables (searchTerm and openOnly) by
    // reaching into the DOM and retrieving their values
    searchTerm = document.querySelector('#search_term').value;
    openOnly = document.querySelector('#is_open').checked;
    showMatchingCourses()
}

// show all courses initially:
showMatchingCourses();