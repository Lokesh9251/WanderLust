//wrap async function
//basically takes a function fn as parameter
//it retiurns a function
//which changes the function fn
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
