document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "index.html";
});


document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var watchdate = document.getElementById("watchdate").value;
    var rating = document.getElementById("rating").value;
    var watch = document.querySelector('input[name="watch"]:checked').value;
    var character = document.getElementById("character").value;
    var review = document.getElementById("review").value;
    var facts = [];
    var checkboxes = document.getElementsByName("facts");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            facts.push(checkboxes[i].value);
        }
    }

    var alertHTML = `
      <div class="form-values">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" value="${name}" readonly />
        </div>
        <div class="form-group">
          <label for="watchdate">The date you watched Thor: Love and Thunder:</label>
          <input type="text" value="${watchdate}" readonly />
        </div>
        <div class="form-group">
          <label for="rating">The rating you gave:</label>
          <input type="text" value="${rating}" readonly />
        </div>
        <div class="form-group">
          <label for="watch">Do you want to watch it again?</label>
          <input type="text" value="${watch}" readonly />
        </div>
        <div class="form-group">
          <label for="character">Your favorite character:</label>
          <input type="text" value="${character}" readonly />
        </div>
        <div class="form-group">
          <label for="review">Your review about this movie:</label>
          <input type="text" value="${review}" readonly />
        </div>
        <div class="form-group">
          <label for="facts">Fun facts about Thor: Love and Thunder:</label>
          <input type="text" value="${facts.join(', ')}" readonly />
        </div>
      </div>
    `;

    Swal.fire({
        title: "Form Submitted!",
        html: alertHTML,
        icon: "success",
        customClass: {
            container: "custom-swal-container",
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            confirmButton: "custom-swal-confirm-button",
        },
    }).then(function () {
        window.location.href = "form.html";
    });
});
