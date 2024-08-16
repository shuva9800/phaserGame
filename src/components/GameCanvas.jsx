import Phaser from 'phaser';
import GameScene from '../GameScene';
import React, { useEffect } from 'react';

const GameCanvas = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 500,
      backgroundColor: '#FFFFFF',
      scene: [GameScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};

export default GameCanvas;
