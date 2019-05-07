let chai = require("chai");
let expect = chai.expect;
let cpf = require("../source/index");

describe("cpfValidator", () => {

    it('CPF inválido', () => {       
        expect(cpf.cpfValidator("011.441.953-14")).to.equal(false);
    });
    it('CPF válido', () => {
        expect(cpf.cpfValidator("01144195314")).to.equal(true);
    });
    it('CPF inválido', () => {
        expect(cpf.cpfValidator("01144195312")).to.equal(false);
    });
    it('CPF incompleto', () => {
        expect(cpf.cpfValidator("011441953")).to.equal(false);
    });
    it('CPF não pode ser vazio', () => {
        expect(cpf.cpfValidator("")).to.equal(false);
    });
    
});



