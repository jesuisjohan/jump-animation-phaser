import Phaser from 'phaser'
import Coin from './objects/Coin'
import PhysicsManager from './managers/PhysicsManager'

export default class HelloWorldScene extends Phaser.Scene {
    public physicsManager: PhysicsManager

    constructor() {
        super('hello-world')
        this.physicsManager = new PhysicsManager(this, {
            bound: {
                x: 10,
                y: 10,
                width: 780,
                height: 580,
				absorbScale: 0.99,
            },
            gravity: 0.05,
            standardDeltaTime: 7
        })
    }

    public preload() {
        this.load.image('circle', 'assets/circle.png')
    }

    public create() {
        this.physicsManager.init()
        const diameter = 50
        const coin1 = new Coin(this, {
            physicsProps: {
                vector2: {
                    x: -1,
                    y: 0,
                },
                size: {
                    width: diameter,
                    height: diameter,
                },
                mass: 1,
            },
        })
        coin1.setPosition(300, 300)
        const coin2 = new Coin(this, {
            physicsProps: {
                vector2: {
                    x: 1,
                    y: -1,
                },
                size: {
                    width: diameter,
                    height: diameter,
                },
                mass: 1,
            },
        })
        coin2.setPosition(400, 300)
        const coin3 = new Coin(this, {
            physicsProps: {
                vector2: {
                    x: 1,
                    y: 0,
                },
                size: {
                    width: diameter,
                    height: diameter,
                },
                mass: 1,
            },
        })
        coin3.setPosition(500, 300)
        const coins = [coin1, coin2, coin3]
        coins.forEach((c) => {
            this.physicsManager.addObject(c)
        })
    }

    public update(_: number, dt: number) {
        this.physicsManager.update(dt)
    }
}
