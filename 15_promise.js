// return promises from the following methods

function getUserByid(id) {}

function getGithubUserName(user) {}

function getRepos() {}

getUserByid(1).then((user) => {
  getGithubUserName(user).then((username) => {
    const reposOfTheUser = getRepos(username);
    console.log(reposOfTheUser);
  });
});

async function collectRepos() {
  const user = await getUserByid(1);
  const userName = await getGithubUserName(user);
  const repos = await getRepos(userName);
}

collectRepos();
