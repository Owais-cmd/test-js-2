import aida from 'aida-sdk'; // Use the new package name you published!
import express from 'express'
import { controller } from './impo.js';

// 1. Initialize the SDK
aida.init({
  apiKey: "BBBjiojaof-aifsaoJJJoanfoainf",
  projectId: "your-github-username/your-repo-name", 
  baseUrl: "https://nondictatorially-spouseless-cornelius.ngrok-free.dev",
  environment: "staging",
  service: "my-test-script"
});

const app = express();

app.get('/', async (req, res) => {
  
    try {
        await controller(req, res);
    } catch (error) {
        console.error("Error in controller:", error);
        res.status(500).send("Internal Server Error");
    }
  
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});