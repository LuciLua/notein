export default (request, response) => {
  const { username, pass, email } = request.body;

  return response.json({ message: `${username} | ${pass} | ${email} ` });
};
