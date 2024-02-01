import HelloWorldScene from '../HelloWorldScene'

export default class Coin extends Phaser.GameObjects.Image {
    public scene: HelloWorldScene
    public physicsProps: IPhysicsProps

    constructor(scene: HelloWorldScene, config: ICoinConfig) {
        super(scene, 0, 0, 'circle')
        this.scene = scene
        this.physicsProps = config.physicsProps
        const { size } = this.physicsProps
        const { width, height } = size
        this.setWorldSize(width, height)
        scene.add.existing(this)
    }

    public setWorldSize(width: number, height: number) {
        this.setSize(width, height)
        this.setDisplaySize(width, height)
    }
}
