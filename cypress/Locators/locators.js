class locatorsPage {

  // signUp
  boardCard = "(//h1[normalize-space()='Create new board'])[1]"
  boardInput = "(//input[@placeholder='Add board title'])[1]"
  boardTitle = "(//input[@name='board-title'])[1]"
  addListButton = "(//div[@class='inline-block align-top'])[1]"
  listInput = "(//input[@placeholder='Enter list title...'])[1]"
  passwordField = "(//input[@id='sign-password'])[1]"
  signupButton = "(//button[normalize-space()='Sign up'])[1]"

  // signIn
  loginTab = "(//a[normalize-space()='Log in'])[1]"
  loginUsernmae = "(//input[@id='loginusername'])[1]"
  loginPassword = "(//input[@id='loginpassword'])[1]"
  loginButton = "(//button[normalize-space()='Log in'])[1]"



}
export default locatorsPage;