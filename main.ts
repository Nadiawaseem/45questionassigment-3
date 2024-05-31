let personName = "hammad ali;"

console.log("lowerCase:", personName.toLowerCase());

console.log("upperCase :", personName.toUpperCase());

console.log("tittleCase :", personName.split(" "));

console.log("tittleCase :", personName.split(" ").map(item => item.charAt(0)));

console.log("tittleCase", personName.split(" ").map(item=> item.charAt(0).
+  item.slice(1).toLowerCase()).join (" "));