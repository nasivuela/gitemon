module.exports.fetch = async ({ octokit, orgSlug }) => {
  const { data: user } = await octokit.users.getAuthenticated();
  const { data: org } = await octokit.orgs.get({
    org: orgSlug,
  });
  const orgObject = {
    description: org.description,
    name: org.name,
    photoUrl: org.avatar_url,
  };
  const options = octokit.orgs.listMembers.endpoint.merge({
    org: orgSlug,
    per_page: 100,
  });
  const members = await octokit.paginate(options);
  const people = members.map((member) => ({
    username: member.login.toLowerCase(),
    photoUrl: member.avatar_url,
  }));

  return {
    authenticatedUser: user && user.login,
    org: orgObject,
    people,
  };
};

module.exports.getSignInLink = () =>
  `https://github.com/login/oauth/authorize?client_id=874c43adb13e94ceeab0&scope=user,repo&redirect_uri=${encodeURIComponent(
    window.location.origin + window.location.pathname
  )}`;
