(function(module) {
    var repos = {};

    repos.all = [];

    repos.requestRepos = function(viewCallback) {
      // DONE: How would you like to fetch your repos? Don't forget to call the viewCallback.
      $.ajax({
        url: 'https://api.github.com/users/dogweather/repos',
        method: "GET",
        headers: { 'Authorization': 'token ' + githubToken }
      }).done(function(repoData) {
        repos.all = repoData;
        viewCallback();
      }).fail(function() {
        console.log('.get fails');
      });
    };

      // DONE: Model method that filters the full collection for repos with a particular attribute.
      // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
      repos.with = function(attr) {
        return repos.all.filter(function(repo) {
          return repo[attr];
        });
      };

      module.repos = repos;
    })(window);
