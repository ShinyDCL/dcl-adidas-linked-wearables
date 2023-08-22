import { GltfContainer, Transform, engine } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { defaultFemaleWearables, defaultMaleWearables, wearables } from './wearables'
import { BodyShape, createNpc } from './npc'

export function main() {
  // Female NPCs
  wearables.forEach(({ urn, title }, index) => {
    createNpc(title, BodyShape.Female, { position: Vector3.create(1.2 + index * 0.9, 0.1, 4 - (index % 2)) }, [
      ...defaultFemaleWearables,
      urn
    ])
  })

  // Male NPCs
  wearables.forEach(({ urn, title }, index) => {
    createNpc(
      title,
      BodyShape.Male,
      {
        position: Vector3.create(1.2 + index * 0.9, 0.1, 12 + (index % 2)),
        rotation: Quaternion.fromEulerDegrees(0, 180, 0)
      },
      [...defaultMaleWearables, urn]
    )
  })

  // Grass
  const grass = engine.addEntity()
  GltfContainer.create(grass, { src: 'models/grass.glb' })
  Transform.create(grass, { position: Vector3.create(8, 0, 8) })
}
