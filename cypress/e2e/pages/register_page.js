/// <reference types="Cypress" /> 
import RegisterElements from "../elements/register_elements";

const registerElements = new RegisterElements

const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPage{

    vsitPage() {
        cy.visit(url)
    }

    fillNameAndSurname(name, surname){
        cy.get(registerElements.inputFirstname()).type(name)
        cy.get(registerElements.inputLastname()).type(surname)
    }

    fillContacts(address, email, phone){
        cy.get(registerElements.inputAddress()).type(address)
        cy.get(registerElements.inputAddressEmail()).type(email)
        cy.get(registerElements.inputPhoneNumber()).type(phone)
    }

    selectRadioGender(gender){
        cy.get(registerElements.checkRadioGender()).check(gender)
    }

    selectCheckHobbies(hobbies){
        cy.get(registerElements.checkHobbies()).check(hobbies)
    }

    selectLanguages(){

    }

    selectSkills(skill){
        cy.get(registerElements.inputSkills()).select(skill)
    }

    selectCountry(country){
        cy.get(registerElements.selectCountry()).select(country, {force: true})
    }

    selectBirthDay(year, month, day){
        cy.get(registerElements.selectYear()).select(year)
        cy.get(registerElements.selectMonth()).select(month)
        cy.get(registerElements.selectDay()).select(day)
    }

    inputPasswords(pass, confirm_pass){
        cy.get(registerElements.inputPass()).type(pass)
        cy.get(registerElements.inputConfirmPass()).type(confirm_pass)
    }

     btnSubmit(){
        cy.get(registerElements.submitRegister()).click()
    }

    selectImage(){
        cy.get(registerElements.selectFile()).selectFile('cypress/downloads/Mr.H4C3.jpg')
    }

} export default RegisterPage;