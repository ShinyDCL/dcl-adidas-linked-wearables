import { AvatarShape, Entity, Material, MeshRenderer, TextShape, Transform, TransformType, engine } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'

export enum BodyShape {
  Female = 'urn:decentraland:off-chain:base-avatars:BaseFemale',
  Male = 'urn:decentraland:off-chain:base-avatars:BaseMale'
}

const defaultSkinColor = Color4.create(0.9490196108818054, 0.7607843279838562, 0.6470588445663452, 1)
const defaultHairColor = Color4.create(0.8313725590705872, 0.8235576748847961, 0.8230588436126709, 1)

export const createNpc = (
  title: string,
  bodyShape: BodyShape,
  transform: Partial<TransformType>,
  wearables: string[]
): void => {
  const npc = engine.addEntity()
  Transform.create(npc, transform)
  AvatarShape.create(npc, {
    id: title,
    emotes: [],
    wearables,
    bodyShape,
    name: '',
    skinColor: defaultSkinColor,
    hairColor: defaultHairColor
  })

  createSign(title, npc)
}

export const createSign = (title: string, parent: Entity): void => {
  const sign = engine.addEntity()
  Transform.create(sign, {
    position: Vector3.create(0, 0, 0.4),
    rotation: Quaternion.fromEulerDegrees(310, 0, 0),
    parent
  })

  const plane = engine.addEntity()
  Transform.create(plane, { scale: Vector3.create(0.8, 0.25, 1), parent: sign })
  MeshRenderer.setPlane(plane)
  Material.setPbrMaterial(plane, { albedoColor: Color4.Black(), specularIntensity: 1 })

  const text = engine.addEntity()
  Transform.create(text, {
    position: Vector3.create(0, 0, 0.001),
    rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    parent: sign
  })
  TextShape.create(text, { text: title, fontSize: 0.6, textWrapping: true, height: 0.25, width: 0.8 })
}
