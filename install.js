module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/fishaudio/fish-speech-1/ app",
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
          "pip install -r requirements.txt"
		  //"pip3 install -e .",
		  //"pip install https://github.com/AnyaCoder/fish-speech/releases/download/v0.1.0/triton_windows-0.1.0-py3-none-any.whl"
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
