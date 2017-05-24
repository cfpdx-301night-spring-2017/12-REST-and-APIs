'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        'Authorization': `token ${githubToken}`
      }
    })
    .then(
      data => {
        // data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
        repos.all = data;
        callback();
        console.log('git hub data returned', data);
      },
      error => {
        console.error(error)
      }
    )
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
