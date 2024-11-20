# Magical Sand Art Creator

An interactive web-based sand art simulator that allows users to create beautiful, flowing sand patterns with various effects and controls. Built using p5.js, this project simulates particle physics to create a realistic sand-falling effect with customizable properties.

![Sand Art Demo](/api/placeholder/600/400)

## Features

- **Interactive Sand Drawing**: Click and drag to create flowing sand patterns
- **Real-time Physics**: Realistic particle simulation with gravity and collision detection
- **Multiple Effect Modes**:
  - Pattern Mode: Creates color patterns based on drawing direction
  - Mirror Mode: Symmetrical drawing effect
  - Rainbow Mode: Dynamic color changing while drawing
- **Customizable Controls**:
  - Particle Size: Adjust the size of sand particles
  - Gravity: Control how quickly the sand falls
  - Spread: Modify the spread of particles while drawing
  - Color Speed: Adjust the rate of color changes

## Live Demo

[View Live Demo](#) <!-- Add your live demo link when deployed -->

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of HTML/CSS/JavaScript
- No additional software installation required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/magical-sand-art.git
```

2. Navigate to the project directory:
```bash
cd magical-sand-art
```

3. Open `index.html` in your web browser to start creating sand art!

### Project Structure

```
magical-sand-art/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Use

1. **Basic Drawing**:
   - Click and drag your mouse on the canvas to create sand
   - Sand will fall and accumulate based on physics simulation

2. **Control Panel**:
   - Use sliders to adjust various parameters:
     - Particle Size: Changes the size of individual sand particles
     - Gravity: Adjusts how quickly sand falls
     - Spread: Controls how wide the sand spreads while drawing
     - Color Speed: Adjusts the rate of color changes in rainbow mode

3. **Special Effects**:
   - Toggle Pattern: Creates patterns based on drawing direction
   - Toggle Mirror: Enables symmetrical drawing
   - Toggle Rainbow: Activates dynamic color changing
   - Clear Canvas: Removes all sand from the canvas

## Controls Reference

| Control | Description | Default Value |
|---------|-------------|---------------|
| Particle Size | Adjusts the size of sand particles | 4 |
| Gravity | Controls the falling speed | 0.1 |
| Spread | Adjusts particle spread while drawing | 5 |
| Color Speed | Controls color change rate | 5 |

## Technical Details

- Built with p5.js for canvas manipulation and drawing
- Uses HSB color mode for smooth color transitions
- Implements a grid-based particle system
- Features optimized collision detection and physics calculations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Built with [p5.js](https://p5js.org/)
- Inspired by falling sand games and particle simulators

## Future Improvements

- [ ] Add more particle effects and behaviors
- [ ] Implement save/load functionality for created artworks
- [ ] Add touch support for mobile devices
- [ ] Create different sand types with unique properties
- [ ] Add color palette selection
- [ ] Implement undo/redo functionality

## Support

If you have any questions or run into issues, please open an issue in the repository.
