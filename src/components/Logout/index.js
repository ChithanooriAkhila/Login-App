// Write your code here
const Logout = props => {
  const {isClicked} = props
  return (
    <button type="button" onClick={isClicked}>
      Logout
    </button>
  )
}

export default Logout
