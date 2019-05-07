let chai = require("chai");
let expect = chai.expect;
let cpf = require("../source/index");

describe("cpfValidator", () => {

    it("CPF Inválido!", () => {
        expect(cpf.cpfValidator("011.441.953-14")).to.equal(false);
    });
    it("CPF Válido!", () => {
        expect(cpf.cpfValidator("01144195314")).to.equal(true);
    });
    it("CPF Inválido!", () => {
        expect(cpf.cpfValidator("01144195312")).to.equal(false);
    });
    it("Ops! Quantidade de número de CPF menor que o esperado!", () => {
        expect(cpf.cpfValidator("011441953")).to.equal(false);
    });
    it("Ops! CPF não pode ser vazio!", () => {
        expect(cpf.cpfValidator(" ")).to.equal(false);
    });
    it("CPF Inválido!", () => {
        expect(cpf.cpfValidator("876.120.720-92")).to.equal(false);
    });
    it("Ops! Sinto muito! Não é um número!", () => {
        expect(cpf.cpfValidator("aline")).to.equal(false);
    });
    it("CPF Válido!", () => {
        expect(cpf.cpfValidator("65554377076")).to.equal(true);
    });
    it("CPF Válido!", () => {
        expect(cpf.cpfValidator("84994584087")).to.equal(true);
    });
    it("Ops! Não contamos espaços!", () => {
        expect(cpf.cpfValidator("900 815 320 32")).to.equal(false);
    });
    it("Ops! Sinto muito! Não é um número!", () => {
        expect(cpf.cpfValidator("Laboratoria")).to.equal(false);
    });
     it("Ops! Sinto muito! Não é um número!", () => {
        expect(cpf.cpfValidator("Laboratoria")).to.equal(false);
    });
      
});



