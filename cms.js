function populate(course, branch) {
    var course = document.getElementById('course');
    var branch = document.getElementById('branch');

    // s2.innerHTML = "";
    // console.log(s1.value);
    // console.log(s2);
    // s1 = s1.value;
    var optionArray;

    if (course.value == "Diploma_to_Degree") {
        optionArray = ['Computer Engineering|Computer Engineering', 'Information and Technology|Information and Technology', 'Mechanical Engineering|Mechanical Engineering', 'Electrical Engineering|Electrical Engineering', 'Civil Engineering|Civil Engineering', 'Aeronautical Engineering|Aeronautical Engineering', 'Electronics and Communication Engineering|Electronics and Communication Engineering', 'Instrumentation and Control Engineering|Instrumentation and Control Engineering'];
        
         document.getElementById("previous_branch_container").style.visibility="visible";
        
    } else if (course.value == "Masters_in_Engineering") {
        optionArray = ['Computer Engineering(Specialization in software)|Computer Engineering(Specialization in software)', 'Computer Engineering(Systems and Network Security)|Computer Engineering(Systems and Network Security)', 'Structural Engineering|Structural Engineering', 'CAD/CAM|CAD/CAM'];

          document.getElementById("previous_branch_container").style.visibility="visible";
          
    } else if (course.value == "Bachelors_in_Engineering") {
        optionArray = ['Computer Engineering|Computer Engineering', 'Information and Technology|Information and Technology', 'Mechanical Engineering|Mechanical Engineering', 'Electrical Engineering|Electrical Engineering', 'Civil Engineering|Civil Engineering', 'Aeronautical Engineering|Aeronautical Engineering', 'Electronics and Communication Engineering|Electronics and Communication Engineering', 'Instrumentation and Control Engineering|Instrumentation and Control Engineering'];

        document.getElementById("previous_branch_container").style.visibility="hidden";
    }

    // console.log(s2.options);
    document.querySelectorAll('#branch option').forEach(option => option.remove());
    // console.log(s2.options);

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        branch.options.add(newoption);
    }

}