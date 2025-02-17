export const getOperationName = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/math-operation");
    // const response = await fetch("https://react-project-t4ti.onrender.com/api/math-operation");
    const data = await response.json();
    console.log(data);
    return data;
  
  } catch (error) {
    console.error("Error querying data:", error);
    return [];
  }
};


export const getData = async () => {

try {
  const response = await fetch("http://localhost:5000/api/questions");
  // const response = await fetch("https://react-project-t4ti.onrender.com/api/questions");
  const data = await response.json();
  console.log(data);
  return data;

} catch (error) {
  console.error("Error querying data:", error);
  return [];
}
};