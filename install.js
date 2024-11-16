module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recurse-submodules git@github.com:toddllm/GLM-4-Voice.git app",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install -r requirements.txt",
		  "git lfs install",
		  "git clone https://huggingface.co/THUDM/glm-4-voice-decoder"
        ]
      }
    },
    {
      when: "{{platform !== 'darwin'}}",
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}
