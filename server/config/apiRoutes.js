const EXTERNAL_BASE_URL = "https://react-project-t4ti.onrender.com";


export const API_ROUTES = {
    MATH_OPERATIONS: "/api/math-operation",
    QUESTIONS: "/api/questions",
    GENERATE_EXAMPLE: "/generate/:operation",

    EXTERNAL_MATH_OPERATIONS: `${EXTERNAL_BASE_URL}/api/math-operation`,
    EXTERNAL_QUESTIONS: `${EXTERNAL_BASE_URL}/api/questions`,
    EXTERNAL_GENERATE_EXAMPLE: `${EXTERNAL_BASE_URL}/generate/:operation`,
};
