"use strict";

const isValidObjectID = require("../index");

const chai = require("chai");
chai.config.includeStack = true;
const expect = chai.expect;

describe("Function isValidObjectID - check if a String has MongoDB's ObjectID format", () => {
  describe("Invalid ObjectID formats", () => {
    it("should return false because of no param passed to the function", done => {
      expect(isValidObjectID()).to.be.false;
      done();
    });

    it("should return false because of passed param is not a String (boolean)", done => {
      expect(isValidObjectID(true)).to.be.false;
      done();
    });

    it("should return false because of passed param is not a String (number)", done => {
      expect(isValidObjectID(123456789012345678901234)).to.be.false;
      done();
    });

    it("should return false because of passed param is not a String (object)", done => {
      expect(isValidObjectID({})).to.be.false;
      done();
    });

    it("should return false because of String param passed to the function is empty", done => {
      expect(isValidObjectID("")).to.be.false;
      done();
    });

    it("should return false because of String passed to the function is not 24 chars length (23) ", done => {
      expect(isValidObjectID("507f191e810c19729de860e")).to.be.false;
      done();
    });

    it("should return false because of String passed to the function is not 24 chars length (25) ", done => {
      expect(isValidObjectID("507f191e810c19729de860eaa")).to.be.false;
      done();
    });

    it("should return false because of String passed to the function does not contains an hex char ", done => {
      expect(isValidObjectID("507f191e810c19729de860ek")).to.be.false;
      done();
    });
  });

  describe("vaiid ObjectID format", () => {
    it("should return false because of no param passed to the function", done => {
      expect(isValidObjectID("507f191e810c19729de860e1")).to.be.true;
      done();
    });
  });
});
