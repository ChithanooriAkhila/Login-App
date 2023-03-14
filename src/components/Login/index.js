// Write your code here
const Login = props => {
  const {isClicked} = props
  return (
    <button type="button" onClick={isClicked}>
      Login
    </button>
  )
}

export default Login
