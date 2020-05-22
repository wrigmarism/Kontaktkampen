//En klass för att spara datan från databasen. Vet inte om det här behövs i javaScript dock. 

class Company {
  constructor(
    ID,
    name,
    title,
    text,
    question,
    answer1,
    answer2,
    answer3,
    correctAnswer
  ) {
    this.ID = ID;
    this.name = name;
    this.title = title;
    this.text = text;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
  }
}

export default Company;
