class User {
  constructor({email}) {
    this.email = email
  }

  sendMessage(){
    console.log("Mensagem enviada para:", this.email)
  }
}

let user = new User({email: "teste@teste.com"})
user.sendMessage()

// Automatizando o compilador com --watch para acompanhar cada modificação