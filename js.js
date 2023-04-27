function X(instance, properties, context) {
  const { name } = properties;
  if (!name) return;
  console.log("name: ", name);

  const getFunction = function (name) {
    return function (resolve, reject) {
      console.log("getFunction");
      context.jQuery.get(
        "https://restcountries.com/v3.1/name/" + name,
        function (data) {
          console.log("adress: https://restcountries.com/v3.1/name/" + name);
          resolve(data);
        }
      );
    };
  };

  const result = context.async(getFunction(name));

  //console.log("instance", instance)
  //console.log("properties", properties)
  //console.log("context", context)

  console.log("result", result);

  const canvas = instance.canvas[0];

  instance.data.div.innerHTML = properties.name;
}
