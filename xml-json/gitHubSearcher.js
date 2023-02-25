$(document).ready(function() {
  
    $("#search-input").on("keypress", function(e) {
      if (e.which === 13) {
        var query = $(this).val();
        $.ajax({
          url: "https://api.github.com/search/users?q=" + query,
          success: function(data) {
            $(".user-list").remove();
            var users = data.items.slice(0, 12);
            for (var i = 0; i < 4; i++) {
              var row = $("<div class='row user-list gap'></div>");
              for (var j = 0; j < 3; j++) {
                var index = i * 3 + j;
                var user = users[index];
                if (!user) break;
                var col = $("<div class='col-sm user d-flex justify-content'></div>");
                var image = $("<img src='" + user.avatar_url + "'class='user-image'/>");
                var username = $("<p class='username'>" + user.login + "</p>");
                col.append(image).append(username);
                row.append(col);
              }
              $(".container-fluid").append(row);
            }
          }
        });
      }
    });
  
    $(document).on("click", ".user", function() {
      var username = $(this).find(".username").text();
      $.ajax({
        url: "https://api.github.com/users/" + username + "/repos",
        success: function(repos) {
          $(".user-list").remove();
          for (var i = 0; i < repos.length; i++) {
            var repo = repos[i];
            var row = $("<div class='row'></div>");
            var name = "<div class='repo-box'>" + repo.name + "</div>";
            var description = "<div class='repo-box'>" + repo.description + "</div>";
            var stars = "<div class='repo-box'>" + repo.stargazers_count + "</div>"
            var language = "<div class='repo-box'>" + repo.language + "</div>";
            var hr = document.createElement("HR");
            row.append("<div class='col-sm repo'>" + "Repository name: " + name  + "Description: " + description + "Stars: " + stars + "Language: " + language + "</div>");
            $(".container-fluid").append(row);
            $(".container-fluid").append(hr);
          }
        }
      });
    });
  });
  