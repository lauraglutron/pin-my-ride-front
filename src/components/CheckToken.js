const { useHistory } = require('react-router-dom');

function CheckToken() {
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (!token) {
    return history.push('/');
  }
  return history.push('/user');
}

module.exports = CheckToken;