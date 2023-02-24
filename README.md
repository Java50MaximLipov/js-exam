# js-exam
Write class Deferred so that launching following code

  const d = new Deferred()
  d.then(function(res){ console.log("1 ", res); return "a"; });
  d.then(function(res){ console.log("2 ", res); return "b"; });
  d.then(function(res){ console.log("3 ", res);
  return "c"; });
  d.resolve('hello');

Would display out the following result:
  1 hello
  2 a
  3 b

Hint: Despite method names (then and resolve) this task is related to neither Promise nor asynchronous functions.
