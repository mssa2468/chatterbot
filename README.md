# ChatterBot

ChatterBot is a simple chatbot application built with Next.js, TypeScript, and Tailwind CSS. It utilizes Ollama to provide conversational responses.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using pnpm:
```
pnpm install
```

## Configuration

Before running the application, ensure you have installed [Ollama](https://github.com/ollama/ollama) and acquired a model. Within this project, the "Mistral" model is utilized. If you wish to employ a different model, refer to the [Customization](#customization) section for instructions.

## Usage

To run the application locally:
1. Run Ollama with Mistral Model
```
ollama run mistral
```
2. Start the development server:
```bash
pnpm dev
```

2. Open your browser and navigate to `http://localhost:3000`.

## Customization

If you want to customize the chatbot's behavior or appearance, you can modify the code accordingly. Here are some points to consider:

- Changing the model: You can replace the model used by the chatbot by modifying the `route.ts` file in the `src/app/api` directory.
``` ts
model: "mistral",
```
- Styling: Tailwind CSS is used for styling the UI components. You can modify the styles in the `globals.css` file or add additional stylesheets as needed.
- Adding features: Feel free to extend the functionality of the chatbot by adding new features or integrating with other APIs.
