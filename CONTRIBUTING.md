# Contributing to Doing OK Social Club

Thank you for your interest in contributing to the Doing OK Social Club website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Provide detailed descriptions
- Include screenshots for UI issues
- Specify browser and device information

### Suggesting Features
- Open a GitHub issue with the "enhancement" label
- Describe the feature and its benefits
- Provide mockups or examples if possible

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- Git
- Code editor (VS Code recommended)

### Setup Steps
```bash
# Clone your fork
git clone https://github.com/yourusername/doing-ok-social.git
cd doing-ok-social

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and test
npm run dev

# Check code quality
npm run lint
npm run type-check

# Build to ensure no errors
npm run build

# Commit changes
git add .
git commit -m "feat: add amazing feature"

# Push and create PR
git push origin feature/your-feature-name
```

## 📝 Code Standards

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible

### React Components
- Use functional components with hooks
- Follow naming conventions (PascalCase)
- Keep components focused and reusable
- Use proper prop types

### Styling
- Use Tailwind CSS classes
- Follow the existing design system
- Maintain responsive design
- Use semantic HTML

### File Organization
```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable React components
├── lib/          # Utility functions
└── types/        # TypeScript type definitions
```

## 🎨 Design Guidelines

### Colors
Use the established Oklahoma-themed palette:
- Oklahoma Red: `#C41E3A`
- Prairie Gold: `#DAA520`
- Sunset Orange: `#FF6B35`
- Sky Blue: `#87CEEB`

### Typography
- Headers: Playfair Display
- Body: Inter
- Maintain hierarchy and readability

### Animations
- Use Framer Motion for animations
- Keep animations subtle and purposeful
- Ensure accessibility (respect prefers-reduced-motion)

## 🧪 Testing

### Before Submitting
- [ ] Code builds without errors
- [ ] All TypeScript types are correct
- [ ] ESLint passes without errors
- [ ] Components are responsive
- [ ] Accessibility guidelines followed
- [ ] Performance impact considered

### Testing Commands
```bash
npm run lint          # Check code style
npm run type-check    # Verify TypeScript
npm run build         # Test production build
```

## 📋 Pull Request Guidelines

### PR Title Format
- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update documentation`
- `style: improve styling`
- `refactor: restructure code`

### PR Description
Include:
- What changes were made
- Why the changes were necessary
- Screenshots for UI changes
- Testing performed
- Breaking changes (if any)

### Review Process
1. Automated checks must pass
2. Code review by maintainers
3. Testing on multiple devices/browsers
4. Approval and merge

## 🌟 Recognition

Contributors will be:
- Listed in the README
- Credited in release notes
- Invited to join the contributor team

## 📞 Getting Help

- GitHub Discussions for questions
- GitHub Issues for bugs/features
- Email: hello@doingoksocial.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make the Doing OK Social Club website better! 🎉
