module.exports = {

  checkForbidenString(value, forbidenString) {
    if (value === forbidenString) {
      throw new Error('Nazwa "slug" jest zakazana');
    }
  },

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
};
