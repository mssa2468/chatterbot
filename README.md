# ChatterBot

ChatterBot is a simple chatbot application built with Next.js, TypeScript, and Tailwind CSS. It utilizes the OpenAI API to provide conversational responses.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using your preferred package manager:
   - If you're using npm:
     ```bash
     npm install
     ```
   - If you're using pnpm:
     ```bash
     pnpm install
     ```
   - If you're using yarn:
     ```bash
     yarn install
     ```

## Configuration

Before running the application, you need to set up your OpenAI API key. Create a `.env` file in the root directory and add your API key:

```
OPENAI_API_KEY="your-api-key"
```


## Usage

To run the application locally:

1. Start the development server:
   - If you're using npm:
     ```bash
     npm run dev
     ```
   - If you're using pnpm:
     ```bash
     pnpm dev
     ```
   - If you're using yarn:
     ```bash
     yarn dev
     ```

2. Open your browser and navigate to `http://localhost:3000`.

## Customization

If you want to customize the chatbot's behavior or appearance, you can modify the code accordingly. Here are some points to consider:

- Changing the OpenAI model: You can replace the model used by the chatbot by modifying the `route.ts` file in the `src/app/api` directory.
- Styling: Tailwind CSS is used for styling the UI components. You can modify the styles in the `globals.css` file or add additional stylesheets as needed.
- Adding features: Feel free to extend the functionality of the chatbot by adding new features or integrating with other APIs.

## Deployment

You can deploy the application to platforms like Vercel, Netlify, or Heroku for production use. Make sure to set up environment variables for your API key in your deployment environment.

## Contributing

Contributions are welcome! If you have any ideas for improvement or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

