import Axios from "axios";

const Api = Axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true  // ✅ Ensure cookies are sent
});

Api.interceptors.response.use(
    response => response,
    async (error) => {
        console.log("🚀 Interceptor Triggered! Error:", error.response?.status, error.response?.data);  // ✅ Debugging

        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            console.log("🔴 401 Unauthorized detected. Trying to refresh token...");

            originalRequest._retry = true;
            try {
                const refresh = await Axios.post(
                    "http://localhost:3001/ResumeGenerator/refresh", 
                    {}, 
                    { withCredentials: true }  // ✅ Ensure cookies are sent
                );

                console.log("✅ Refresh Token Response:", refresh.data);
                
                // Set new token and retry request
                originalRequest.headers["Authorization"] = `Bearer ${refresh.data.accessToken}`;
                return Api(originalRequest); // ✅ Retry the original request with new token
            } catch (refreshError) {
                console.log("❌ Error during refresh request:", refreshError); // ✅ Debugging
            }
        }

        return Promise.reject(error);
    }
);

export default Api;
