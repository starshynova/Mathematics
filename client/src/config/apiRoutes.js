const BASE_URL = "https://react-project-t4ti.onrender.com";

export const API_ROUTES = {
    GET_OPERATIONS: `${BASE_URL}/api/math-operation`,
    GET_QUESTIONS: `${BASE_URL}/api/questions`,
    GENERATE_EXAMPLE: (operation) => `${BASE_URL}/generate/${operation}`
};
