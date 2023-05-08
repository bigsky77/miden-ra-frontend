import React, { useEffect } from 'react';
import Phaser from 'phaser';
import SpriteAnimationScene from './SpriteAnimationScene';

export default function PhaserGame() {
  useEffect(() => {
    const gameConfig = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'phaser-container',
      scene: [SpriteAnimationScene],
      transparent: true,
    };

    const game = new Phaser.Game(gameConfig);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id="phaser-container" style={{ width: '100%', height: '100%' }}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          {/* Your content here */}
        </div>
      </main>
    </div>
  );
}
