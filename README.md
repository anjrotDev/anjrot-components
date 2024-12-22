# React Component Library

This project is a React component library created for a YouTube tutorial. It demonstrates how to build reusable UI components using React, TypeScript, and Tailwind CSS.

## 🎥 YouTube Tutorial

This project was created as part of a YouTube tutorial. To learn how to build your own React component library step-by-step watch the video.

[![React Typescript: Crea una libreria de Componentes](https://img.youtube.com/vi/9CU4jkxm-Ps/maxresdefault.jpg)](https://www.youtube.com/playlist?list=PLoOnCUvhzJYOk_s-NQOeWdzPaYmXZGzDj "React Typescript: Crea una libreria de Componentes")

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run storybook
   ```

## 🏗️ Install in Another Project

To use this library in another project, follow these steps:

### Install the library

Add the library to your project as a dependency using npm or yarn:

```bash
npm install anjrot-components
# or
yarn add anjrot-components
```

### 🛠️ Tailwind CSS Setup

To use this library in your project, make sure Tailwind CSS processes the classes in the components provided by the library. Add the following line to the `content` section of your `tailwind.config.js`:

```javascript
content: ["./node_modules/anjrot-components/**/*.{js,ts,jsx,tsx}"],
```

### Import and use the components

Now you can import and use components from the library in your project. For example:

```tsx
import { Button, Input, Stack } from "anjrot-components";

export default function MyComponent() {
  return (
    <div>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
      <Input placeholder="Enter your text here" />
      <Stack gap={4}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    </div>
  );
}
```

Restart your development server after making these changes to ensure Tailwind CSS processes the classes correctly.

## 🧱 Components

This library includes the following components:

- Button
- Input
- ValidatedInput
- Stack
- Text

Each component has its own story for Storybook, allowing you to view and interact with the components in isolation.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Storybook

## 📚 Documentation

For detailed documentation on each component, please refer to the individual component files in the `src` directory.

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to this project.

## 📜 License

This project is licensed under the [LICENSE](./LICENSE) file in the root directory of this project.

## 📝 Changelog

For a detailed list of changes and version updates, please refer to our [CHANGELOG.md](./CHANGELOG.md).

## 🙏 Acknowledgements

Thank you to all the contributors who have helped make this project possible!

## 🛎️ Announcements

- Will use this Library for our newest Video Tutorials.

- Trigger upgrade version

---

Made with ❤️ for the YouTube community
