//unknown purpose of video 2
let searchTerm = "";
let openOnly = false;

function isClassFull(course) {
    if(course.Classification.Open === false)
        return true;
    //alternative
    //return !course.Classification.Open;
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
    //   - course.Title
        if(course.Title.toLowerCase().startsWith(searchTerm)) {
            return true;
        } else {
            return false;
        }
    //   - course.CRN (convert to string first)
    //   - course.Instructors[].Name (use map to get all names, then join)
    // Use includes() for case-insensitive matching
    // Return true if searchTerm matches any of these fields
    return true;
}

function dataToHTML(course) {
    // should return a formatted HTML card with the relevant course info
    // (using template literals). 
    return `
        <section class="course-card">
            <h2>${course.Code}: ${course.Title}</h2>
            <p class="status open">
                <i class="fa-solid fa-circle-check"></i>
                Open &bull; 10320 &bull; Seats Available: 14
            </p>
            <p>
                ${course.Days} &bull;
                ${course.Location.FullLocation} &bull;
                ${course.Hours} Credit Hour(s)
            </p>
            <p>
                <strong>${1+1}</strong> //getInstructorString(course) video 5 7:47
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