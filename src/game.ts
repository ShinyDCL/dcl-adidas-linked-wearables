const wearables = [
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Wallrunner-Orange', // Wallrunner - Disco Orange Cush
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Wallrunner-SL72', // Wallrunner - SL '72 Cush
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Wallrunner-Lime', // Wallrunner - Solar Lime Cush
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:C2172-Energy-Blue', // C2172 - Energy Blue
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:C2172-Dune', // C2172 - Dune
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:C2172-Slime', // C2172 - Slime
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:PFD-Sand', // P.F.D. — Personal Flotation Device - Desert Sand
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:PFD-Red', // P.F.D. — Personal Flotation Device - Fire Red
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:PFD-Green', // P.F.D. — Personal Flotation Device - Neon Green
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Neobone-Blue', // Neobone - Bolt From The Blue
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Neobone-Pink', // Neobone - Incandescent Pink
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Space-01', // Space Crystal - Celestine
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Space-02', // Space Crystal - Celestine II
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:GMoney', // Gmoney - GM Puffer
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:Punks-comic', // PUNKS Comic - Courtney’s Jacket
  'urn:decentraland:matic:collections-thirdparty:adidas-virtual-gear:0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc:DMT', // BAYC - DMT
];

const skinColor = new Color4(
  0.9490196108818054,
  0.7607843279838562,
  0.6470588445663452,
  1
);
const hairColor = new Color4(
  0.8313725590705872,
  0.8235576748847961,
  0.8230588436126709,
  1
);

const createNpc = (
  position: Vector3,
  bodyShape: string,
  wearables: string[]
): void => {
  const npc = new Entity();
  const npcShape = new AvatarShape();

  npc.addComponent(npcShape);
  npc.addComponent(new Transform({ position }));
  npcShape.skinColor = skinColor;
  npcShape.hairColor = hairColor;
  npcShape.bodyShape = bodyShape;
  npcShape.wearables = wearables;

  engine.addEntity(npc);
};

// Female NPCs
wearables.forEach((urn: string, index: number) => {
  createNpc(
    new Vector3(1.2 + index * 0.9, 0.1, 5),
    'urn:decentraland:off-chain:base-avatars:BaseFemale',
    [
      'urn:decentraland:off-chain:base-avatars:f_eyebrows_00',
      'urn:decentraland:off-chain:base-avatars:f_eyes_04',
      'urn:decentraland:off-chain:base-avatars:f_mouth_00',
      'urn:decentraland:off-chain:base-avatars:distressed_black_Jeans',
      'urn:decentraland:off-chain:base-avatars:sport_black_shoes',
      'urn:decentraland:matic:collections-v2:0xf370aea38d9f4462236807b68d20c57fc814e1e9:0', // Doki Chunky Pigtails
      urn,
    ]
  );
});

// Male NPCs
wearables.forEach((urn: string, index: number) => {
  createNpc(
    new Vector3(1.2 + index * 0.9, 0.1, 11),
    'urn:decentraland:off-chain:base-avatars:BaseMale',
    [
      'urn:decentraland:off-chain:base-avatars:eyebrows_00',
      'urn:decentraland:off-chain:base-avatars:f_eyes_02',
      'urn:decentraland:off-chain:base-avatars:mouth_00',
      'urn:decentraland:off-chain:base-avatars:hip_hop_joggers',
      'urn:decentraland:off-chain:base-avatars:sport_black_shoes',
      'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:17', // MVMF22 Ritual Spiky Hair
      urn,
    ]
  );
});

// Grass
const grass = new Entity();
const grassShape = new GLTFShape('models/grass.glb');

grassShape.withCollisions = true;
grassShape.isPointerBlocker = true;
grassShape.visible = true;

grass.addComponentOrReplace(new Transform({ position: new Vector3(8, 0, 8) }));
grass.addComponentOrReplace(grassShape);

engine.addEntity(grass);
