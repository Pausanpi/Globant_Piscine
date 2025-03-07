import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CallbackPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
        try {
          // Endpoint de tu servidor para intercambiar el código por un token
          const response = await axios.post("http://localhost:4000/oauth/github", { code });
          const { token } = response.data;

          // Guarda el token y redirige al dashboard
          localStorage.setItem("githubToken", token);
          navigate("/dashboard");
        } catch (error) {
          console.error("Error intercambiando el código por el token:", error);
        }
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return <div>Procesando inicio de sesión...</div>;
};

export default CallbackPage;
