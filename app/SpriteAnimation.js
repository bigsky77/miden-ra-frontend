import Phaser from 'phaser';

export default class SpriteAnimationScene extends Phaser.Scene {
  constructor() {
    super('SpriteAnimationScene');
  }

  preload() {
    // Load your sprite sheet here
    this.load.spritesheet('spriteSheet', '/rainSheet.png', {
      frameWidth: FRAME_WIDTH,
      frameHeight: FRAME_HEIGHT,
    });
  }

  create() {
    const { width, height } = this.scale;

    // Create the sprite and position it at the center of the screen
    const sprite = this.add.sprite(width / 2, height / 2, 'spriteSheet');

    // Create the animation
    const animConfig = {
      key: 'playSpriteAnimation',
      frames: this.anims.generateFrameNumbers('spriteSheet', {
        start: 0,
        end: TOTAL_FRAMES - 1,
      }),
      frameRate: FRAME_RATE,
      repeat: -1, // Loop the animation
    };
    this.anims.create(animConfig);

    // Play the animation
    sprite.play('playSpriteAnimation');

    // Scale the sprite to cover the entire screen
    const scaleX = width / sprite.width;
    const scaleY = height / sprite.height;
    const scale = Math.max(scaleX, scaleY);
    sprite.setScale(scale);
  }
}
