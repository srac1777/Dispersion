# Welcome to the Dispersion Repo!

Dispersion is a retro-themed interactive client-side JavaScript project that enables users to distort the space-time continuum of particles.

![home](https://github.com/srac1777/Dispersion/blob/master/wiki/land.png "home")

### Intro

I made this purely frontend JavaScript project to demonstrate particle motion while allowing for changes in gravity dynamically. The mouse cursor disrupts the equilibrium of the particles and sets them into motion. Each particle has a gravity towards its equilibrium position, and this gravity can be altered to either attract or repel the particle.

![dispersion](https://github.com/srac1777/Dispersion/blob/master/wiki/dispersion.gif "dispersion interaction")

### Code

This project involved applying physics formulae and mathematical manipulation to adjust gravity. 
This snippet of code is what made the gravity distortion possible
```javascript
     p.vx *= gravity_input;
     p.vy *= gravity_input;
        
     p.x += p.vx + (p.original_x - p.x) * (gravity_input - 0.7);
     p.y += p.vy + (p.original_y - p.y) * (gravity_input - 0.7);
```

### Technologies Used

I will be using vanilla JavaScript for the app's code. All the rendering will be done using Canvas. The repulsion and collision will be physics.



### Future version features

- [ ] have more particles 
- [ ] change number of particles with a slider
- [ ] background music
